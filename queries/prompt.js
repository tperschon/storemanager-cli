// const db = require('../config/connection');
const inquirer = require('inquirer');
const { viewAllDepartments, addADepartment } = require('./departmentQueries');

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
            const data = await viewAllDepartments();
            console.log(data);
            mainMenu();
            break;
        }
        case 'View All Employees': {
            console.log("frick")
            mainMenu();
            break;
        }
        case 'View All Roles': {
            console.log("frick")
            mainMenu();
            break;
        }
        case 'Add A Department': {
            console.log("frick")
            mainMenu();
            break;
        }
        case 'Add A Role': {
            console.log("frick")
            mainMenu();
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