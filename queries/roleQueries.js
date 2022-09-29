const db = require('../config/connection');

const viewAllRoles = async () => {
    const res = await db.promise().query(`SELECT * from roles`);
    return res[0];
};