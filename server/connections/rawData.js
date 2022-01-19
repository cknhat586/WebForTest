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

module.exports = {
    managerList: managerList,
    managerActionHistory: managerActionHistory
}