[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Table of Contents

[Description](#Description)

[Installation](#Installation)

[Usage](#Usage)

[Contributing](#Contributing)

[Questions](#Questions)

# Description
```
An employee information reading and tracking application utilizing the command-line interface.
```
- Demonstrates CRUD operations using a CLI and the mysql2 package
- Prints all requests in a nicely formatted tabled response
# Installation
```
If you don't already have node.js, install node.js
If you don't already have mysql installed, this also must be installed
Navigate to the project directory via a command line interface such as bash, powershell, or zshell
```
```
Use the command 'npm install' to install dependencies from the package.json with version control from package-lock.json
Still using the CLI, navigate to the db folder within the project folder
Use the command 'mysql -u <user> -p' whereas <user> refers to the user you're logging into mysql with, entering your password into the CLI prompt
Use the command 'source schema.sql' to create the database. If the database already exists, it will be dropped(deleted) and created fresh
Optionally, use the command 'source seeds.sql' to seed the database so you can get a handle on the operations before using it.
Exit mysql using the command 'exit' and then navigate up a level to the root folder of the project with 'cd ../'
```
# Usage
```
Use a command line interface to navigate to the project folder
To start the application, run the command 'npm start'
Each menu option is self-descriptive as to its purpose, and it input prompts will be displayed as necessary.
```
# Contributing
If you would like to contribute to the project, it can be found here: [storemanager-cli](https://github.com/tperschon/storemanager-cli)
# Questions
If you have any questions, I can be reached via: [Github](github.com/tperschon) and [E-Mail](timperschon@gmail.com)
