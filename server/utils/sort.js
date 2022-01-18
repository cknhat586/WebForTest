/**
 * @param {string} sortAttribute
 * @param {string} sortOrder
 */
function stringSort(objectList, sortAttribute, sortOrder) {
    if (objectList.length < 2) {
        return objectList;
    }
    if (!objectList[0][sortAttribute]) {
        return objectList;
    }
    if (sortOrder != 'ascending' && sortOrder != 'descending') {
        return objectList;
    }

    return objectList.sort((obj1, obj2) => {
        let sortAttribute_1 = obj1[sortAttribute].toLowerCase();
        let sortAttribute_2 = obj2[sortAttribute].toLowerCase();
        let result = 0;

        if (sortAttribute_1 < sortAttribute_2) {
            result = -1;
        }
        if (sortAttribute_1 > sortAttribute_2) {
            result = 1;
        }
        if (sortOrder == 'descending') {
            result *= -1;
        }
        return result;
    });
}

/**
 * @param {string} sortAttribute
 * @param {string} sortOrder
 */
function numericSort(objectList, sortAttribute, sortOrder) {
    if (objectList.length < 2) {
        return objectList;
    }
    if (!objectList[0][sortAttribute]) {
        return objectList;
    }
    if (isNaN(objectList[0][sortAttribute])) {
        return objectList;
    }
    if (sortOrder != 'ascending' && sortOrder != 'descending') {
        return objectList;
    }

    return objectList.sort((obj1, obj2) => {
        if (sortOrder == 'ascending') {
            return obj1[sortAttribute] - obj2[sortAttribute];
        } else {
            return obj2[sortAttribute] - obj1[sortAttribute];
        }
    });
}

module.exports = {
    stringSort: stringSort,
    numericSort: numericSort
}

let employees = [{
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];
