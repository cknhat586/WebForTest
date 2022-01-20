const db = require('../connections/postgres');
const helpers = require('../utils/helpers');
const tbName = 'Places';
const provinceFieldName = 'f_Province';
const districtFieldName = 'f_District';
const wardFieldName = 'f_Ward';

module.exports = {
    getAll: async () => {
        const res = await db.load(tbName);
        return res;
    },

    getAllProvince: async () => {
        const res = await db.load(tbName);
        if (res.length > 0) {
            let provinceList = [];
            for (let i = 0; i < res.length; i++) {
                if (helpers.foundInArray(res[i].f_Province, provinceList) == false) {
                    provinceList.push(res[i].f_Province);
                }
            }
            return provinceList;
        }
        return null;
    },

    getDistrictByProvince: async province => {
        const res = await db.get(tbName, provinceFieldName, province);
        if (res.length > 0) {
            let districtList = [];
            for (let i = 0; i < res.length; i++) {
                if (helpers.foundInArray(res[i].f_District, districtList) == false) {
                    districtList.push(res[i].f_District);
                }
            }
            return districtList;
        }
        return null;
    },

    getWardByDistrict: async district => {
        const res = await db.get(tbName, districtFieldName, district);
        if (res.length > 0) {
            let wardList = [];
            for (let i = 0; i < res.length; i++) {
                wardList.push(res[i].f_Ward);
            }
            return wardList;
        }
        return null;
    },

    add: async user => {
        const res = await db.add(tbName, user);
        return res;
    }
}
