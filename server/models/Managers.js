const { use } = require('passport');
const db = require('../connections/postgres');

const TABLE_MANAGER = 'Managers';
const TABLE_MANAGER_EVENT = 'ManagerEvents';
const usernameFieldName = 'f_Username';

module.exports = {
    getAll: async () => {
        const res = await db.load(tbName);
        return res;
    },

    getManagerByName: async username => {
        const res = await db.get(tbName, usernameFieldName, username);
        return res;
    },

    getAllEvent: async username => {

    },

    add: async manager => {
        const res = await db.add(tbName, manager);
        return res;
    },

    auth: async (username, password) => {

    }
}