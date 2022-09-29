// const db = require('../config/connection');
const inquirer = require('inquirer');
const { getAllFromTable, addToTable, updateTableEntry } = require('./queries/index')
require('console.table');

const mainMenu = async () => {
    // prompt main menu options
    const inq = await inquirer.prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'select',
        choices: [
            'View All Departments',
            'View All Employees',
            'View All Roles',
            'Add A Department',
            'Add A Role',
            'Add An Employee',
            'Updated An Employee Role',
            'Exit'
        ]
    },
    ]);
    // switch to decide which menu to go to
    switch(inq.select) {
        case 'View All Departments': {
            const departments = await getAllFromTable('departments');
            console.table(departments);
            mainMenu();
            break;
        }
        case 'View All Employees': {
            const employees = await getAllFromTable('employees');
            console.table(employees);
            mainMenu();
            break;
        }
        case 'View All Roles': {
            const roles = await getAllFromTable('roles');
            console.table(roles);
            mainMenu();
            break;
        }
        case 'Add A Department': {
            const inq = await inquirer.prompt([
                {
                    type: 'input',
                    message: 'Enter the name of the new department: ',
                    name: 'depName'
                }
            ]);
            try {
                await addToTable('departments', 'name', `"${inq.depName}"`);
                console.log(`${inq.depName} added to departments`);
            } catch {
                console.log(`Error adding ${inq.depName} to departments`);
            };
            mainMenu();
            break;
        }
        case 'Add A Role': {
            const departments = await getAllFromTable('departments');
            const departmentNames = departments.map(dep => dep.name);
            const inq = await inquirer.prompt([
                {
                    type: 'input',
                    message: 'Enter the name of the new role: ',
                    name: 'roleName'
                },
                {
                    type: 'input',
                    message: 'Enter the salary of the new role($$/year): ',
                    name: 'roleSalary',
                    validate: sal => isNaN(sal) ? "Salary must be a number." : true
                },
                {
                    type: 'list',
                    message: 'Select the department for the new role: ',
                    name: 'roleDepartment',
                    choices: departmentNames
                }
            ]);
            const departmentId = departments.filter(dep => dep.name === inq.roleDepartment);
            try {
                await addToTable('roles', 'title, salary, department_id', `"${inq.roleName}", ${parseInt(inq.roleSalary)}, ${departmentId[0].id}`);
                console.log(`${inq.roleName} added to roles`);
            } catch {
                console.log(`Error adding ${inq.roleName} to roles`);
            };
            mainMenu();
            break;
        }
        case 'Add An Employee': {
            const roles = await getAllFromTable('roles');
            const roleTitles = roles.map(role => role.title);
            const employees = await getAllFromTable('employees');
            const employeeNames = employees.map(employee => `${employee.first_name} ${employee.last_name}`)
            const inq = await inquirer.prompt([
                {
                    type: 'input',
                    message: 'Enter the first name of the employee: ',
                    name: 'empFirstName'
                },
                {
                    type: 'input',
                    message: 'Enter the last name of the employee: ',
                    name: 'empLastName'
                },
                {
                    type: 'list',
                    message: 'Select the role for the employee: ',
                    name: 'empRole',
                    choices: roleTitles
                },
                {
                    type: 'list',
                    message: 'Select the employee\'s manager: ',
                    name: 'empManager',
                    choices: employeeNames
                }
            ]);
            const roleId = roles.filter(role => role.title === inq.empRole);
            const names = inq.empManager.split(' ');
            const managerId = employees.filter(emp => emp.first_name === names[0]).filter(emp => emp.last_name === names[1]);
            try {
                await addToTable('employees', 'first_name, last_name, role_id, manager_id', `"${inq.empFirstName}", "${inq.empLastName}", ${roleId[0].id}, ${managerId[0].id}`);
                console.log(`${inq.empFirstName} ${inq.empLastName} added to employees`);
            } catch {
                console.log(`Error adding ${inq.empFirstName} ${inq.empLastName} to employees`);
            };
            mainMenu();
            break;
        }
        case 'Updated An Employee Role': {
            console.log("frick")
            mainMenu();
            break;
        }
        // default handles the Exit option as well as unexpected stuff
        default: {
            return;
        }
    }
};

mainMenu();

module.exports = mainMenu;