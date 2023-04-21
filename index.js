const inquirer = require("inquirer");
const jest = require("jest");
const fs = require('fs')

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log(`File ${fileName} was created`);
    });
}


function init() {
    const questions = [
        "Question 1",
        "Question 2",
    ];

    inquirer.prompt([
        {
            type: 'input',
            name: 'Question 1',
            message: questions[0]
        },
        {
            type: 'list',
            name: 'Question 2',
            message: questions[1],
            choices: [{ name: 'None', value: '' }, 'List 1', 'List 2',]
        },
    ]).then((answers) => {

        console.log(answers);
        writeToFile('logo.svg', data);

    });
}

init();
