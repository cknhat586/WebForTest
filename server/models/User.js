const db = require('../connections/postgres');
const tbName = 'Users';
const usernameFieldName = 'f_Username';
const bcrypt = require('../middlewares/bcrypt');

module.exports = {
    getAll: async () => {
        const res = await db.load(tbName);
        return res;
    },

    getUserByName: async username => {
        const res = await db.get(tbName, usernameFieldName, username);
        if (res.length > 0) {
            return res[0];
        }
        return null;
    },

    add: async user => {
        const res = await db.add(tbName, user);
        return res;
    },

    update: async (username, columnArray, valueArray) => {
        const res = await db.update(tbName, usernameFieldName,username, columnArray, valueArray);
        return res;
    },

    getRelevantByUsername: async username => {
        const user = this.getUserByName(username);
        if (!user) { return ;}

        const userID = user.f_ID;
        

        return res;
    }
}
