// import dependencies
const inquirer = require('inquirer');
const { getAllFromTable, addToTable, updateTableEntry } = require('./queries/generalQueries')
const { viewAllEmployees, addAnEmployee } = require('./queries/employeeQueries');
const { viewAllRoles } = require('./queries/roleQueries');
const p = require('./prompts/index')
// found this package to format console.table to sql table format
require('console.table');

const mainMenu = async () => {
    // prompt main menu options
    const inq = await inquirer.prompt([p.mainMenu]);
    // switch to decide which menu to go to
    // all options return to main menu except the exit, which is handled by default case
    switch(inq.select) {
        case 'View All Departments': {
            const departments = await getAllFromTable('departments');
            console.table(departments);
            mainMenu();
            break;
        }
        case 'View All Employees': {
            const employees = await viewAllEmployees();
            console.table(employees);
            mainMenu();
            break;
        }
        case 'View All Roles': {
            const roles = await viewAllRoles();
            console.table(roles);
            mainMenu();
            break;
        }
        case 'Add A Department': {
            // prompt user for the name of the department
            const inq = await inquirer.prompt([
                {
                    type: 'input',
                    message: 'Enter the name of the new department: ',
                    name: 'depName'
                }
            ]);
            // try-catch to add a department using our function and user input
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
            // first we need to get all the departments
            const departments = await getAllFromTable('departments');
            // we use the departments to make a list of the names to prompt
            const departmentNames = departments.map(dep => dep.name);
            // inquirer prompt for info
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
                    // validate to ensure the input is a number
                    validate: sal => isNaN(sal) ? "Salary must be a number." : true
                },
                {
                    type: 'list',
                    message: 'Select the department for the new role: ',
                    name: 'roleDepartment',
                    // we use the names we gleaned from departments as choices here
                    choices: departmentNames
                }
            ]);
            // find the specific department that the user chose by comparing their name choice to the list we already got
            const departmentId = departments.filter(dep => dep.name === inq.roleDepartment);
            // try-catch to use function to add to table using user input and information previously constructed from user input, need to parseInt the salary since inquirer input returns a string
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
            // get all the roles first
            const roles = await getAllFromTable('roles');
            // get the titles from the roles
            const roleTitles = roles.map(role => role.title);
            // get all the employees
            const employees = await getAllFromTable('employees');
            // get the employee names, template literal concat the first+last name
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
                    // selection of titles from existing roles
                    choices: roleTitles
                },
                {
                    type: 'list',
                    message: 'Select the employee\'s manager: ',
                    name: 'empManager',
                    // select employee as manager from employeeNames list
                    choices: ["None", ...employeeNames]
                }
            ]);
            // find the role the user chose by comparing their choice to the list of roles we already got
            const roleId = roles.filter(role => role.title === inq.empRole);
            // null value for if they choose none
            let managerId = [{ id: null}];
            // if there is a manager chosen, split the name of the chosen manager back into two variables
            if(inq.empManager !== "None") {
                const names = inq.empManager.split(' ');
                // find the manager using a double filter, first we filter out any who don't have the same first name, next we go by the same last name
                // THIS WILL BREAK WITH MULTIPLE EMPLOYEES WITH THE SAME NAME, a better solution would be to have parellel lists
                managerId = employees.filter(emp => emp.first_name === names[0]).filter(emp => emp.last_name === names[1]);
            }
            // try-catch to use our function and user input to insert into table
            try {
                await addToTable('employees', 'first_name, last_name, role_id, manager_id', `"${inq.empFirstName}", "${inq.empLastName}", ${roleId[0].id}, ${managerId[0].id}`);
                console.log(`${inq.empFirstName} ${inq.empLastName} added to employees`);
            } catch {
                console.log(`Error adding ${inq.empFirstName} ${inq.empLastName} to employees`);
            };
            mainMenu();
            break;
        }
        case 'Update Employee Role': {
            // get a list of employees
            const employees = await getAllFromTable('employees');
            // get a list of roles
            const roles = await getAllFromTable('roles');
            const inq = await inquirer.prompt([
                {
                    type: 'list',
                    message: 'Please select the employee whose role you wish to update: ',
                    name: 'employeeName',
                    // feed the employee names in as choices
                    choices: employees.map(employee => `${employee.first_name} ${employee.last_name}`)
                },
                {
                    type: 'list',
                    message: 'Please select the new role for the employee: ',
                    name: 'employeeRole',
                    // feed the role titles in as choices
                    choices: roles.map(role => role.title)
                }
            ]);
            // split the picked name back into a 2-name format
            const names = inq.employeeName.split(' ');
            // find the picked employee from the list by name using a double filter
            const pickedEmployee = employees.filter(emp => emp.first_name === names[0]).filter(emp => emp.last_name === names[1]);
            // find the picked role from the list by title
            const pickedRole = roles.filter(role => role.title === inq.employeeRole);
            // try-catch to update the table of the employee by id using user input information
            try {
                await updateTableEntry('employees', ['role_id'], [pickedRole[0].id], pickedEmployee[0].id);
                console.log(`${inq.employeeName}'s role updated to ${inq.employeeRole}`);
            } catch {
                console.log('Error changing employee role');
            }
            mainMenu();
            break;
        }
        // default handles the Exit option as well as unexpected stuff
        default: {
            process.exit(0);
        }
    }
};

mainMenu();

module.exports = mainMenu;