USE employees_db;

SELECT  employee.id AS "ID",
        employee.first_name AS "First Name",
        employee.last_name AS "Last Name",
        role.title AS "Title",
        role.salary AS "Salary",
        department.name AS "Department",
        department.id AS "Department #"
FROM department
JOIN role ON department.id = role.department_id
JOIN employee ON role.id = employee.role_id
ORDER BY employee.id;