const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

const questions = [
	{
		type: 'input',
		message: 'Provide a title for your project:',
		name: 'Title',
		default: 'Project Title',
	},
	{
		type: 'input',
		message: 'URL or relative path to image file:',
		name: 'ImagePath',
		default: './assets/images/example-project.gif',
	},
	{
		type: 'input',
		message: 'Give a description of your project:',
		name: 'Description',
		default: 'Description.',
	},
	{
		type: 'input',
		message: 'What are the steps to install?:',
		name: 'Installation',
		default: 'npm i',
	},
	{
		type: 'input',
		message: 'What is your project is used for?:',
		name: 'Usage',
		default: 'Usage',
	},
	{
		type: 'input',
		message: 'What command should be run for test(s)?:',
		name: 'Test',
		default: 'test',
	},
	{
		type: 'checkbox',
		message: 'What license is needed?:',
		name: 'License',
		choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
		default: 'MIT',
	},
	{
		type: 'input',
		message: 'How can others contribute?:',
		name: 'Contributing',
		default: 'Contributing',
	},
	{ type: 'input', message: 'Who are the collaborators?:', name: 'Credits', default: 'Credits' },
];

inquirer.prompt(questions).then(function (data) {
	writeToFile('README.md', data);
});

function writeToFile(filename, data) {
	try {
		const response = JSON.stringify(data);
		const markdown = generateMarkdown(response);
		fs.writeFileSync(filename, markdown, function () {
			console.log('success!');
		});
	} catch (err) {
		console.error(err);
	}
}
