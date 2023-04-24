const inquirer = require("inquirer");
const fs = require('fs')
const { Triangle, Square, Circle } = require('./lib/shapes.js');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log(`File ${fileName} was created`);
    });
}


function init() {
    const questions = [
        "Enter text for your shape:",
        "Enter a color for your text (keyword or hexidecimal):",
        "Select a shape:",
        "Enter a color for your shape (keyword or hexidecimal):",
    ];

    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'textColor',
            message: questions[1]
        },
        {
            type: 'list',
            name: 'shape',
            message: questions[2],
            choices: ['Triangle', 'Square', 'Circle',]
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: questions[3]
        },
    ]).then((answers) => {

        console.log(answers);
        writeToFile('logo.svg', data);

    });
}

init();
