/* istanbul ignore next */
require('dotenv').config()
const path = require('path');
const serve = require('koa-static');
const mount = require('koa-mount');
const koaBody = require('koa-bodyparser');
const koaRequestLogger = require('koa-reqlog');
const Koa = require('koa');
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');
const cors = require('@koa/cors');
const render = require('koa-ejs');
const session = require('koa-session');

const app = new Koa();
const cache = (process.env.CACHE === 'true');
const debug = (process.env.DEBUG === 'true');
app.use(serve(path.join(__dirname, './../public/')));

// app.use(cors());
/* eslint-disable */
app.use(koaBody());
app.use(require('./exception/exception.handler'));
/* istanbul ignore next */
if (['development', 'production'].indexOf(process.env.NODE_ENV) !== -1) {
    app.use(koaRequestLogger({
        url: '/api/request-log',
        lastItems: 500
    }));
}
const CONFIG = {
    key: 'koa.sess',
    /** (string) cookie key (default is koa.sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    autoCommit: true,
    /** (boolean) automatically commit headers (default true) */
    overwrite: true,
    /** (boolean) can overwrite or not (default true) */
    httpOnly: true,
    /** (boolean) httpOnly or not (default true) */
    signed: false,
    /** (boolean) signed or not (default true) */
    rolling: false,
    /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false,
    /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
    secure: false,
    /** (boolean) secure cookie*/
    sameSite: null,
    /** (string) session cookie sameSite options (default null, don't set it) */
};

app.use(session(CONFIG, app));
app.use(require('./routes/tweets'));

Sentry.init({ dsn: "https://57b3f3931a624b06b616e3139fa1446a@o532743.ingest.sentry.io/5652012", tracesSampleRate: 1.0 });

app.on("error", (err, ctx) => {
    Sentry.withScope(function(scope) {
        scope.addEventProcessor(function(event) {
            return Sentry.Handlers.parseRequest(event, ctx.request);
        });
        Sentry.captureException(err);
    });
});

// /* istanbul ignore else  */
// if (['development', 'test'].includes(process.env.NODE_ENV)) {
//     app.use(require('./routes/swagger.router'));
//     app.use(mount('/docs', serve(path.resolve(__dirname, '../static/docs'))));
//     app.use(mount('/static', serve(path.resolve(__dirname, '../static'))));
// }
app.use(async ctx => {
    ctx.throw(404, 'API endpoint not found');
});
/* eslint-enable */
/* istanbul ignore if  */
if (!module.parent) {
    app.listen(process.env.PORT, () => process.stdout.write(`Server listening on ${process.env.PORT}\n`));
}


module.exports = app;