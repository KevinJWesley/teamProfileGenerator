const inquirer = require("inquirer");
const fs = require("fs");

// questions to first prompt manager
const questions = [
  {
    type: "input",
    message: "What is the name of the team manager?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is your employee ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "office",
  },
  {
    type: "input",
    message: "",
    name: "",
  },
];

// function to start questions
function init() {
  inquirer.prompt(questions).then(() => {
    writeToFile("index.html");
  });
}

init();
