const config = require('../config/db_config');
const pg = require('pg-promise')(config.initOptions);

const connect_string = config.connect_string;
const schema = config.schema;

const db = pg(connect_string);

exports.load = async tbName => {
    const table = new pg.helpers.TableName({ table: tbName, schema: schema});
    const qStr= pg.as.format('SELECT * FROM $1', table);

    try {
        const res = await db.any(qStr);
        return res;
    } catch (err) {
        console.log('ERROR: ', err);
    }
};

exports.get = async (tbName, fieldName, value) => {
    const table = new pg.helpers.TableName({ table: tbName, schema: schema});
    const qStr= pg.as.format(`SELECT * FROM $1 WHERE "${fieldName}"='${value}'`, table);

    try {
        const res = await db.any(qStr);
        return res;
    } catch (err) {
        console.log('ERROR: ', err);
    }
};

exports.add = async (tbName, entity) => {
    const table = new pg.helpers.TableName({ table: tbName, schema: schema});
    const qStr = pg.helpers.insert(entity, null, table) + ' RETURNING *';

    try {
        const res = await db.one(qStr);
        return res;
    } catch (err) {
        console.log('ERROR: ', err);
    }
};

exports.update = async (tbName, fieldName, value, columnArray, valueArray) => {
    const table = new pg.helpers.TableName({ table: tbName, schema: schema});
    const condition = pg.as.format(` WHERE "${fieldName}"='${value}'`, table);
    const qStr= pg.helpers.update(valueArray, columnArray, table) + condition;
    
    try {
        const res = await db.one(qStr);
        return res;
    } catch (err) {
        console.log('ERROR: ', err);
    }
}