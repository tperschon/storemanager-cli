const db = require('../config/connection');

const viewAllDepartments = async () => {
    const res = await db.promise().query(`SELECT * FROM departments`);
    return res[0];
};

const addADepartment = async () => {

};

module.exports = { viewAllDepartments, addADepartment }