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

const engineerPrompt = () => {
    console.log(`
    ============
    Add Engineer
    ============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name for the engineer.',
            validate: engName => {
                if (engName) {
                    return true;
                } else {
                    console.log('Please enter the name!');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Enter the engineer's ID.",
            validate: engId => {
                if (engId) {
                    return true;
                } else {
                    console.log('Please enter the ID number!');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter their email address.',
            validate: engEmail => {
                if (engEmail) {
                    return true;
                } else {
                    console.log('Please enter the email address!');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter their GitHub username.',
            validate: githubName => {
                if (githubName) {
                    return true;
                } else {
                    console.log('Please enter the GitHub username!');
                    return false;
                };
            }
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
        
        team.push(engineer);

        menuPrompt();
    });
};

const internPrompt = () => {
    console.log(`
    ==========
    Add Intern
    ==========
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the intern.',
            validate: intName => {
                if (intName) {
                    return true;
                } else {
                    console.log('Please enter their name!');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter their employee ID.',
            validate: intId => {
                if (intId) {
                    return true;
                } else {
                    console.log('Please enter their ID!');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter their email address.',
            validate: intEmail => {
                if (intEmail) {
                    return true;
                } else {
                    console.log('Please enter their email!');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter their school.',
            validate: intSchool => {
                if (intSchool) {
                    return true;
                } else {
                    console.log('Please enter their school!');
                    return false;
                };
            }
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);

        team.push(intern);

        menuPrompt();
    });
};

const buildTeam = () => {
    console.log(`
    ===================
    Your team is ready!
    ===================
    `);

    // create output directory if it doesn't exist already
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
    };
    fs.writeFileSync(outputPath, generateSite(team), 'utf-8');
};

// begins the manager prompts to start the app
managerPrompt();