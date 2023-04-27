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
            message: questions[0],
            validate: function (input) {
                if (input.length > 3) {
                    return "Please enter a maximum of 3 characters.";
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: questions[1],
            validate: function(input) {
                const validColorOrHex = /^#?([0-9a-fA-F]{3}){1,2}$|^[a-z]+$/i.test(input);
                if (validColorOrHex) {
                  return true;
                } else {
                  return 'Please enter a valid color name or hexadecimal code.';
                }
              }
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
            message: questions[3],
            validate: function(input) {
                const validColorOrHex = /^#?([0-9a-fA-F]{3}){1,2}$|^[a-z]+$/i.test(input);
                if (validColorOrHex) {
                  return true;
                } else {
                  return 'Please enter a valid color name or hexadecimal code.';
                }
              }
        },
    ]).then((answers) => {

        let outputShape = ''
        switch (answers.shape) {
            case 'Triangle':
                outputShape = new Triangle(`${answers.shapeColor}`, `${answers.text}`, `${answers.textColor}`);
                break;
            case 'Square':
                outputShape = new Square(`${answers.shapeColor}`, `${answers.text}`, `${answers.textColor}`);
                break;
            case 'Circle':
                outputShape = new Circle(`${answers.shapeColor}`, `${answers.text}`, `${answers.textColor}`);
                break;
            default:
                console.log('Invalid shape selected');
        }
        
        const svgTemplate = `<svg width="300" height="200">
        ${outputShape.render()}
        <text x="150" y="100" font-size="24" text-anchor="middle" fill="${outputShape.fontColor}">${outputShape.text}</text>
        </svg>`

        console.log(svgTemplate);
        writeToFile('logo.svg', svgTemplate);

    });
}

init();
