const db = require('../config/connection');

const viewAllEmployees = async () => {
    // query to get all employees with their data for department and role, along with their manager
    const res = await db.promise().query(`
SELECT e.id, e.first_name, e.last_name, r.title, d.name as department, r.salary, concat(em.first_name, em.last_name) as manager
FROM departments AS d
INNER JOIN roles AS r on department_id
INNER JOIN employees AS e on role_id
INNER JOIN employees AS em on e.manager_id
WHERE e.role_id = r.id AND r.department_id = d.id and em.id = e.manager_id
`);
    return res[0];
};

const addAnEmployee = async () => {

};

viewAllEmployees();
module.exports = { viewAllEmployees, addAnEmployee }


// SELECT e.id, e.first_name, e.last_name, r.title, d.name, r.salary, concat(e.first_name, e.last_name) AS manager
// FROM departments as d
// INNER JOIN roles as r on departments as d WHERE r.department_id = d.id
// INNER JOIN employees AS e ON roles as r WHERE e.role_id = r.id