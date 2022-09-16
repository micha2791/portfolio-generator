const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require('path');
const jest = require('jest');


const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
            when: (answers) => answers.role === 'Manager',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github?',
            when: (answers) => answers.role === 'Engineer',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school?',
            when: (answers) => answers.role === 'Intern',
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false,
        },
    ]);

const promptTeam = (teamData) => {
    console.log(`
    =================
    Add a New Employee
    =================
    `);
    if (!teamData.employees) {
        teamData.employees = [];
    }
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the employee name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the employee id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the employee email?',
            },
            {
                type: 'list',
                name: 'role',
                message: 'What is the employee role?',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the employee office number?',
                when: (answers) => answers.role === 'Manager',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the employee github?',
                when: (answers) => answers.role === 'Engineer',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the employee school?',
                when: (answers) => answers.role === 'Intern',
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add another employee?',
                default: false,
            },
        ])
        .then((employeeData) => {
            teamData.employees.push(employeeData);
            if (employeeData.confirmAddEmployee) {
                return promptTeam(teamData);
            } else {
                return teamData;
            }
        });
}

const generateHTML = (answers) =>
    `

${answers.name}

${answers.id}

${answers.email}

${answers.role}

${answers.officeNumber}

${answers.github}

${answers.school}

`;

const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();

