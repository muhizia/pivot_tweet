const { get } = require('lodash');

module.exports = async(ctx, next) => {
    try {
        ctx.set({ 'x-api-version': get(process, 'env.API_VERSION', 'none') });
        await next();
    } catch (err) {
        switch (true) {
            case err.name === 'ValidationError':
                ctx.status = 400;
                ctx.body = { error: { code: 400, message: 'Validation Exception', details: get(err, 'details', []) } };
                break;
            case err.name === 'ConflictError':
            case err.name === 'UnauthorizedError':
            case err.name === 'BadRequestError':
            case err.name === 'HttpException':
            case err.name === 'NotFoundError':
                ctx.status = err.statusCode;
                ctx.body = { error: { code: err.statusCode, message: err.message, details: [] } };
                break;
            case err.name === 'Error':
            default:
                /* istanbul ignore if */
                if (process.env.NODE_ENV !== 'test') {
                    // eslint-disable-next-line no-console
                    console.log('exception.handler.js:23 -> ', err.message, err.stack);
                }

                ctx.status = 500;
                ctx.body = { error: { code: 500, message: 'Ooooops! Something went wrong!', details: [] } };
                break;
        }
    }
};