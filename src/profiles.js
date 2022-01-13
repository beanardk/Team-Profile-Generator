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

module.exports.askForManager = async () {
    
}