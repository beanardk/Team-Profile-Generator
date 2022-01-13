const inquirer = require('inquirer');
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

module.exports.askForTeamMember = async () => {
    let Answer = await.inquirer.prompt([
        {
            type: 'list',
            message: 'Please add a team member.\*Select complete if all members have been added.*',
            name: 'type',
            choices: ['Manager', 'Engineer', 'Intern', 'Complete']
        }
    ])

    return Answer.type;
}

module.exports.askForManager = async () => {
    let Answer = await.inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'Provide the Managers name.',
        },
        {
            type: 'input',
            name: 'ID',
            message: 'Provide the Managers ID.',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Provide the Managers email.',
        },
        {
            type: 'input',
            name: 'Office',
            message: 'Provide the Managers office number.',
        }
    ])

    return new Manager(Answer.Name, Answer.ID, Answer.Email, Answer.Office)
}

module.exports.askForEngineer = async () => {
    let Answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'Provide the Engineers name.',
        },
        {
            type: 'input',
            name: 'ID',
            message: 'Provide the Engineers ID.',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Provide the Engineers email.',
        },
        {
            type: 'input',
            name: 'Github',
            message: 'Provide the Engineers Github URL.',
        }
    ])

    return new Engineer(Answer.Name, Answer.ID, Answer.Email, Answer.Github)
}

module.exports.askForIntern = async () => {
    let Answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'Provide the Interns name.',
        },
        {
            type: 'input',
            name: 'ID',
            message: 'Provide the Interns ID.',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Provide the Interns email.',
        },
        {
            type: 'input',
            name: 'School',
            message: 'Provide the Interns school.',
        }
    ])

    return new Intern(Answer.Name, Answer.ID, Answer.Email, Answer.School)
}
