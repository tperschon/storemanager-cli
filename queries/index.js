const db = require('../config/connection');

const getAllFromTable = async (table) => {
    const res = await db.promise().query(`SELECT * FROM ${table}`);
    return res[0];
};

const addToTable = async (table, fields, values) => {
    const res = await db.promise().query(`INSERT INTO ${table} (${fields})
    VALUES (${values})`);
};

const changeTableEntry = async () => {

};

module.exports = { getAllFromTable, addToTable, changeTableEntry }