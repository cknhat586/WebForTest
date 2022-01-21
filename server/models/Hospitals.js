const db = require('../connections/postgres');
const tbName = 'Hospitals';
const nameFieldName = 'f_Name';

module.exports = {
    getAll: async () => {
        const res = await db.load(tbName);
        return res;
    },

    getHospitalByName: async name => {
        const res = await db.get(tbName, nameFieldName, name);
        if (res.length > 0) {
            return res[0];
        }
        return null;
    },

    add: async hospital => {
        const res = await db.add(tbName, hospital);
        return res;
    },

    update: async (name, columnArray, valueArray) => {
        const res = await db.update(tbName, nameFieldName, name, columnArray, valueArray);
        return res;
    }
}
