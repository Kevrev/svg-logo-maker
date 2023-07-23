# Logo Generator

## Description

This application utilizes Node.js and the Inquirer package to prompt the user with questions. Based on the answers to these prompts, an SVG file will be generated based on those responses. The following is a list of the prompts that the user will be asked:
   <br> - `Enter text for your shape` 
   <br> - `Enter a color for your text (keyword or hexidecimal)`
   <br> - `Select a shape`
   <br> - `Enter a color for your shape (keyword or hexidecimal)`
<br> The SVG image will be generated in the `logo.svg` file in the directory. 


## Usage

This application runs in the terminal so users will have to download the repository. It also requires users to have [Node.js](https://nodejs.org/en) installed. Once a user has installed Node, navigate to a terminal within the directory of the application. Install the Inquirer package by running the following command in the terminal: `npm install inquirer`. Users may addtionally install jest to run tests to debug the application by running the following command in the terminal: `npm install jest`.

Once the Inquirer package is installed, run the application by running the following command in the terminal: `node index.js`. The application will give users a number of prompts in sequential order. Once all of the prompts are answered, the application will generate a logo file called `logo.svg` in the directory. This file will contain the user's answers to the prompts in an already formatted README file. 

Users can access the deployed GitHub pages site and browse through the different pages. The navbar at the top hosts the links to each page.

![Screenshot](/assets/images/screenshot.jpg)

Link to the deployed website itself:

https://github.com/Kevrev/svg-logo-maker

A video walkthrough of the application:

[insert video link here]

## Technology Used

- [Node.js](https://nodejs.org/en)

- [Inquirer.js](https://www.npmjs.com/package/inquirer)

- [Jest](https://jestjs.io/)

## Credits

