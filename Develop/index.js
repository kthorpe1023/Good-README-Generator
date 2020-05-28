const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// console.log(inquirer)

const questions = [
    {type: "input", message: "Provide the title for your project:", name: "Title"},
    {type: "input", message: "Give a description of your project:", name: "Description"},
    {type: "input", message: "What installations are needed:", name: "Installations"},
    {type: "input", message: "What is your project is used for:", name: "Usage"},
    {type: "checkbox", message: "What license is neeeded:", name: "License", choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]},
    {type: "input", message: "What command should be run run tests:", name: "Test"},
    {type: "input", message: "Who were the contributors:", name: "Contributors"}

];
// console.log(questions)
inquirer.prompt(questions)
.then(function(data){

    // console.log(data)
    // response.push(data);
    // console.log(response)
    writeToFile("README.md", data)

})


// const responseStr = response.join("\n");






function writeToFile(filename, data) {
    try{
        console.log(data + "line 37");
        const response = JSON.stringify(data)
        const markdown = generateMarkdown(response)
        fs.writeFileSync(filename, markdown)
        console.log('success!')
    } catch (err) {
        console.error(err)
    }
// console.log(responseStr)
}


function init() {

}

init();
