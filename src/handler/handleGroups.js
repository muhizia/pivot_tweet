const getGroupsIDs = async (groups) => {
    var rights = [];
    await groups.forEach(element => {
        rights.push(element.group_id);
    });
    return rights;
}

const addRightSessions = async (ctx, rights) => {
    var _rights = []
    await rights.forEach(element => {
        _rights.push(element.id);
    });
    ctx.session.rights = _rights;
}
module.exports = { getGroupsIDs, addRightSessions };