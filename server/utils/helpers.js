module.exports = {
    foundInArray: (item, array) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                return true;
            }
        }
        return false;
    }
}