const mainMenu = {
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
        'Update Employee Role',
        'Exit'
    ]
};

module.exports = { mainMenu }