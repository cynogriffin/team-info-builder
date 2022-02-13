const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateSite = require('./src/generate-site');
const path = require('path');

const outputDir = path.resolve(__dirname, 'output');
const outputPath = path.join(outputDir, 'team.html');

const team = [];

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID.',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter your office number.',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                };
            }
        },
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.office);

        team.push(manager);

        menuPrompt();
    })
};

const menuPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select the next action you would like to take:',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
        }
    ])
    .then(choice => {
        switch (choice.menu) {
            case 'Add an engineer':
                engineerPrompt();
                break;
            case 'Add an intern':
                internPrompt();
                break;
            default:
                buildTeam();
        };
    });
};

