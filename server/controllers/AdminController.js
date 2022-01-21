const data = require('../connections/rawData');
Object.freeze(data);

const hospitalModel = require('../models/Hospitals');
const placeModel = require('../models/Places');
const userModel = require('../models/User');

class AdminController {

    indexGET(req, res) {
        console.log('admin home')
        return res.render('admin/adminHome');
    }

    managerListGET(req, res) {
        const managerList = data.managerList;
        const payload = req.query;
        if (Object.keys(payload).length > 0) {
            let newList = managerList;
            for (let i = 0; i < newList.length; i++) {
                if (newList[i].f_Username == payload.username) {
                    if (payload.command == 'unlock') {
                        newList[i].f_isLocked = false;
                    } else {
                        newList[i].f_isLocked = true;
                    }

                    break;
                }
            }
            return res.redirect('/admin/managerList', '200', {
                list: newList
            });
        } else {
            return res.render('admin/managerList', {
                list: managerList
            });
        }
    }

    async addManagerGET(req, res) {
        return res.render('admin/addManager');
    }

    async addHospitalGET(req, res) {
        const provinceList = await placeModel.getAllProvince();
        const firstProvince = provinceList[0];
        let remainProvinceList = [];
        for (let i = 1; i < provinceList.length; i++) {
            remainProvinceList.push(provinceList[i]);
        }

        const districtList = await placeModel.getDistrictByProvince(firstProvince);
        const firstDistrict = districtList[0];
        let remainDistrictList = [];
        for (let i = 1; i < districtList.length; i++) {
            remainDistrictList.push(districtList[i]);
        }

        const wardList = await placeModel.getWardByDistrict(firstDistrict);
        const firstWard = wardList[0];
        let remainWardList = [];
        for (let i = 1; i < wardList.length; i++) {
            remainWardList.push(wardList[i]);
        }

        return res.render('admin/addHospital', {
            firstProvince: firstProvince,
            provinceList: remainProvinceList,
            firstDistrict: firstDistrict,
            districtList: remainDistrictList,
            firstWard: firstWard,
            wardList: remainWardList
        });
    }

    async editHospitalGET(req, res) {
        const crrHospitalName = req.query.name;
        const crrHospital = await hospitalModel.getHospitalByName(crrHospitalName);
        if (crrHospital) {
            return res.render('admin/editHospital', {
                hospital: crrHospital
            });
        } else {
            return res.redirect('/admin/hospitalList');
        }

    }

    managerHistoryGET(req, res) {
        const payload = req.query;
        console.log(payload.username)
        const managerName = 'Nguyen Huu Dien';
        const history = data.managerActionHistory;
        for (let i = 0; i < history.length; i++) {
            history[i].f_Date = (new Date(history[i].f_Date)).toLocaleString();
        }

        return res.render('admin/managerHistory', {
            manager: managerName,
            history: history
        });
    }

    async hospitalListGET(req, res) {
        const hospitalList = await hospitalModel.getAll();
        let list = hospitalList;
        for (let i = 0; i < list.length; i++) {
            list[i].f_Current = (list[i].f_Current).toLocaleString();
            list[i].f_Max = (list[i].f_Max).toLocaleString();
        }
        return res.render('admin/hospitalList', {
            list: list,
            ajax: true
        });
    }

    addManagerPOST(req, res) {

        return res.render('admin/addManager');
    }

    async addHospitalPOST(req, res) {
        const payload = req.body;
        const hospital = {
            f_ID: 10,
            f_Name: payload.name,
            f_Address: payload.address + ', ' + payload.ward + ', ' + payload.district + ', ' + payload.province,
            f_Current: payload.current,
            f_Max: payload.max
        };
        try {
            const rs = await hospitalModel.add(hospital);
        } catch (err) {
            console.error(err);
        }
        return res.redirect('/admin/hospitalList');
    }

    async editHospitalPOST(req, res) {
        const payload = req.body;
        const columnArray = ['f_Name', 'f_Address', 'f_Current', 'f_Max'];
        const valueArray = {
            f_Name: payload.name,
            f_Address: payload.address,
            f_Current: payload.current,
            f_Max: payload.max
        }
        try {
            const rs = await hospitalModel.update(payload.oldName, columnArray, valueArray);
        } catch (err) {
            console.error(err);
        }

        return res.render('admin/editHospital');
    }
}

module.exports = new AdminController;