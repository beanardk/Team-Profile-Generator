const GenerateHTML = require('./src/generateHTML');
const Profile = require('./src/profiles')
const fs = require('fs')

let Template = GenerateHTML.createTemplate()

let document = Template.document
let profiles = document.getElementById("team-profiles")
let Manager;

const TeamMember = async () => {
    let Type = await Profile.askForTeamMember()

    switch(Type) {
        case "Manager":
            Manager = await Profile.askForManager()
            GenerateHTML.addManager(document, profiles, Manager)
            TeamMember()
        break;

        case "Engineer":
            let Engineer = await Profile.askForEngineer()
            GenerateHTML.addEngineer(document, profiles, Engineer)
            TeamMember()
        break;

        case "Intern":
            let Intern = await Profile.askForIntern()
            GenerateHTML.addIntern(document, profiles, Intern)
            TeamMember()
        break;

        case "Complete":
            GenerateHTML.writeHTML(Template.dom, Manager)
        break;
    }
}

TeamMember()

