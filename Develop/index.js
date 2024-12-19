// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import {writeFile} from 'fs/promises';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions.'
    },
    {
        type: "list",
        name: "license",
        message: 'What license does your project have?',
        choices: ["GPL", "Apache", "MIT", "MPL", "Unlicense", "No license"]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What contributions have been made to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests have you run on your project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
];
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, 'utf8');
}

// TODO: Create a function to initialize app
function init() {}
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        const markdown = generateMarkdown(data);
        writeToFile('README.md', markdown);
    });

// Function call to initialize app
init();
