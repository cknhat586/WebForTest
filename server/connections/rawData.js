const managerActionHistory = [
    {
        f_ID: 1,
        f_Manager: 'nguyenhuudien',
        f_Action: 'Add user: Nguyen Van A',
        f_Date: '2014-01-01T23:28:56.782Z'
    },

    {
        f_ID: 2,
        f_Manager: 'nguyentiensy',
        f_Action: 'Add user: Nguyen Thi B',
        f_Date: '2015-01-01T23:28:56.782Z'
    },

    {
        f_ID: 3,
        f_Manager: 'nguyenhuudien',
        f_Action: 'Change state of user Nguyen Van A from F2 to F1',
        f_Date: '2015-01-01T23:28:56.782Z'
    }
]


const managerList = [
    {
        f_ID: 1,
        f_Username: 'nguyenhuudien',
        f_Fullname: 'Nguyen Huu Dien',
        f_isLocked: false
    },

    {
        f_ID: 2,
        f_Username: 'nguyentiensy',
        f_Fullname: 'Nguyen Tien Sy',
        f_isLocked: false
    },

    {
        f_ID: 3,
        f_Username: 'nguyenvu',
        f_Fullname: 'Nguyen Van Vu',
        f_isLocked: true
    },
]

const userInfo = {
    f_ID: 2,
    f_Username: '206574213',
    f_Fullname: 'Nguyen Van A',
    f_CMND: '206574213',
    f_YOB: '2001',
    f_STD: '0903966423',
    f_Address: '123 Phan Tan Trung, phuong Hoai An, quan Tran Bac, thanh pho Ho Chi Minh',
    f_State: 'F1',
    f_Hospital: 'Benh vien Hoa Huong, phuong Hoai An, quan Tran Bac, thanh pho Ho Chi Minh'
}

const hospitalList = [
    {
        f_ID: 1,
        f_Name: 'Benh vien 1',
        f_Address: '123 ABC',
        f_Max: 50000,
        f_Current: 13565
    },

    {
        f_ID: 2,
        f_Name: 'Benh vien 2',
        f_Address: '123 DEF',
        f_Max: 20000,
        f_Current: 16754
    },

    {
        f_ID: 3,
        f_Name: 'Benh vien 3',
        f_Address: '123 GHI',
        f_Max: 200000000,
        f_Current: 1976422
    },
]

module.exports = {
    hospitalList: hospitalList,
    userInfo: userInfo,
    managerList: managerList,
    managerActionHistory: managerActionHistory
}