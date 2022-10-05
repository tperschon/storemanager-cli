const db = require('../config/connection');

const getAllFromTable = async (table) => {
    const res = await db.promise().query(`SELECT * FROM ${table}`);
    return res[0];
};

const addToTable = async (table, fields, values) => {
    const res = await db.promise().query(`INSERT INTO ${table} (${fields})
    VALUES (${values})`);
};

const updateTableEntry = async (table, fields, values, id) => {
    let setString = '';
    for(i = 0; i < fields.length; i++) {
        setString+= `${fields[i]} = ${values[i]}`
    };
    const res = await db.promise().query(`UPDATE ${table}
    SET ${setString}
    WHERE id = ${id}`);
};

module.exports = { getAllFromTable, addToTable, updateTableEntry }