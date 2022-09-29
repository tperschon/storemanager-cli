// const db = require('../config/connection');
const inquirer = require('inquirer');
const { getAllFromTable, addToTable, updateTableEntry } = require('./queries/index')
require('console.table');

const mainMenu = async () => {
    // prompt main menu options
    const inq = await inquirer.prompt([
    {
        type: 'list',
        message: 'What wouldd you like to do?',
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
            console.log(departmentNames)
            // const inq = await inquirer.prompt([
            //     {
            //         type: 'input',
            //         message: 'Enter the name of the new role: ',
            //         name: 'roleName'
            //     },
            //     {
            //         type: 'input',
            //         message: 'Enter the salary of the new role: ',
            //         name: 'roleSalary',
            //     }

            // ]);
            // try {
            //     await addToTable('departments', 'name', inq.depName);
            //     console.log(`${inq.depName} added to departments`);
            // } catch {
            //     console.log(`Error adding ${inq.depName} to departments`);
            // };
            // mainMenu();
            break;
        }
        case 'Add An Employee': {
            console.log("frick")
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