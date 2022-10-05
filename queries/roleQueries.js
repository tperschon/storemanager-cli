const db = require('../config/connection');

const viewAllRoles = async () => {
    const res = await db.promise().query(`
SELECT r.id, r.title, r.salary, d.name AS 'department'
FROM departments as d
INNER JOIN roles as r ON department_id
WHERE r.department_id = d.id`);
    return res[0];
};

module.exports = { viewAllRoles };