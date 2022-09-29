const db = require('../config/connection');

const viewAllEmployees = async () => {
    const res = await db.promise().query(`SELECT * from employees`);
    return res[0];
};

const addAnEmployee = async () => {

};

module.exports = { viewAllEmployees, addAnEmployee }