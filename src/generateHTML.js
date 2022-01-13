const { JSDOM } = require('jsdom')
const fs = require('fs')
const Template = fs.readFileSync("./dist/index.html")

module.exports.createTemplate = () => {
    const dom = new JSDOM(Template);
    const document = dom.window.document;

    return { dom, document }
}

module.exports.addManager = (document, Profiles, Manager) => {
    let CardDiv = document.createElement("div")
    CardDiv.classList.add("card", "m-3")

    let CardHeader = document.createElement("div")
    CardHeader.classList.add("card-header", "text-white", "bg-primary")

    let CardHeaderH1 = document.createElement("h1")
    CardHeaderH1.textContent = Manager.getName()

    let CardHeaderH5 = document.createElement("h5")
    CardHeaderH5.textContent = `☕ ${Manager.getRole()}`

    CardHeader.appendChild(CardHeaderH1)
    CardHeader.appendChild(CardHeaderH5)
    CardDiv.appendChild(CardHeader)

    let CardBody = document.createElement("div")
    CardBody.classList.add("card-body", "bg-light")

    let CardUl = document.createElement("ul")
    CardUl.classList.add("list-group", "list-group-flush")

    let ManagerID = document.createElement("li")
    ManagerID.classList.add("list-group-item", "my-2")
    ManagerID.textContent = `ID: ${Manager.getId()}`

    let ManagerEmail = document.createElement("li")
    ManagerEmail.classList.add("list-group-item", "my-2")
    ManagerEmail.textContent = `Email: ${Manager.getEmail()}`

    let ManagerOfficeNumber = document.createElement("li")
    ManagerOfficeNumber.classList.add("list-group-item", "my-2")
    ManagerOfficeNumber.textContent = `Office Number: ${Manager.getOfficeNumber()}`

    CardUl.appendChild(ManagerID)
    CardUl.appendChild(ManagerEmail)
    CardUl.appendChild(ManagerOfficeNumber)
    CardBody.appendChild(CardUl)
    CardDiv.appendChild(CardBody)

    Profiles.appendChild(CardDiv)
    return Profiles
}

module.exports.addEngineer = (document, Profiles, Engineer) => {
    let CardDiv = document.createElement("div")
    CardDiv.classList.add("card", "m-3")

    let CardHeader = document.createElement("div")
    CardHeader.classList.add("card-header", "text-white", "bg-primary")

    let CardHeaderH1 = document.createElement("h1")
    CardHeaderH1.textContent = Engineer.getName()

    let CardHeaderH5 = document.createElement("h5")
    CardHeaderH5.textContent = `👓 ${Engineer.getRole()}`

    CardHeader.appendChild(CardHeaderH1)
    CardHeader.appendChild(CardHeaderH5)
    CardDiv.appendChild(CardHeader)

    let CardBody = document.createElement("div")
    CardBody.classList.add("card-body", "bg-light")

    let CardUl = document.createElement("ul")
    CardUl.classList.add("list-group", "list-group-flush")

    let EngineerID = document.createElement("li")
    EngineerID.classList.add("list-group-item", "my-2")
    EngineerID.textContent = `ID: ${Engineer.getId()}`

    let EngineerEmail = document.createElement("li")
    EngineerEmail.classList.add("list-group-item", "my-2")
    EngineerEmail.textContent = `Email: ${Engineer.getEmail()}`

    let EngineerGithub = document.createElement("li")
    EngineerGithub.classList.add("list-group-item", "my-2")
    EngineerGithub.innerHTML = `Github: <a href="${Engineer.getGithub()}">${Engineer.getName()}</a>`

    CardUl.appendChild(EngineerID)
    CardUl.appendChild(EngineerEmail)
    CardUl.appendChild(EngineerGithub)
    CardBody.appendChild(CardUl)
    CardDiv.appendChild(CardBody)

    Profiles.appendChild(CardDiv)
    return Profiles
}

module.exports.addIntern = (document, Profiles, Intern) => {
    let CardDiv = document.createElement("div")
    CardDiv.classList.add("card", "m-3")

    let CardHeader = document.createElement("div")
    CardHeader.classList.add("card-header", "text-white", "bg-primary")

    let CardHeaderH1 = document.createElement("h1")
    CardHeaderH1.textContent = Intern.getName()

    let CardHeaderH5 = document.createElement("h5")
    CardHeaderH5.textContent = `📖 ${Intern.getRole()}`

    CardHeader.appendChild(CardHeaderH1)
    CardHeader.appendChild(CardHeaderH5)
    CardDiv.appendChild(CardHeader)

    let CardBody = document.createElement("div")
    CardBody.classList.add("card-body", "bg-light")

    let CardUl = document.createElement("ul")
    CardUl.classList.add("list-group", "list-group-flush")

    let InternID = document.createElement("li")
    InternID.classList.add("list-group-item", "my-2")
    InternID.textContent = `ID: ${Intern.getId()}`

    let InternEmail = document.createElement("li")
    InternEmail.classList.add("list-group-item", "my-2")
    InternEmail.textContent = `Email: ${Intern.getEmail()}`

    let InternSchool = document.createElement("li")
    InternSchool.classList.add("list-group-item", "my-2")
    InternSchool.textContent = `School: ${Intern.getSchool()}`

    CardUl.appendChild(InternID)
    CardUl.appendChild(InternEmail)
    CardUl.appendChild(InternSchool)
    CardBody.appendChild(CardUl)
    CardDiv.appendChild(CardBody)

    Profiles.appendChild(CardDiv)
    return Profiles
}


module.exports.writeHTML = async (dom, Manager) => {
    if(!Manager) return console.log("You must provide a manager. Please try again.")


    fs.writeFileSync(`./dist/${Manager.getName()}-${Manager.getOfficeNumber()}.html`, dom.serialize())
    console.log("Successfully Generated Team Page")
}