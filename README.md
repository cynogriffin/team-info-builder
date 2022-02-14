[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# Team Info Builder

This project demonstrates proficiency in JavaScript, Node.js, npm inquirer, and Jest testing by building an application that produces a functional static webpage from command line prompts only. The application is meant to create an information resource for a team of developers with information stored on each team member including things like name, job title, employee ID, email address, office number, github username, and school affiliation (for interns). 

In this project, I learned how to build a functional app from the ground up using test-driven development (Jest), while furthering my skills in Node.js, HTML, CSS, npm inquirer, and JavaScript. Some challenges from this project included having a good project plan so that I could write effective tests, learning more about JavaScript classes and using them in a functional application, and bug fixing for when things didn't go according to plan.

Please feel free to use and test the application and let me know of any improvements or suggestions via my contact information in the Questions section.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)

## Installation

In order to run and use this application, you must first install Node.js as well as the npm inquirer (to run the prompts) and npm Jest (to run the tests). Both of the npm packages are included in the dependencies of this repo and can be installed with the `npm install` command once Node is installed. Once that is complete, you should be ready to run the application and easily build your team info page!

## Usage
##### [Back to Table of Contents](#table-of-contents)

To use this application, after the appropriate setup is complete, you will need to run `node index` from the command line of the repo, as seen below:

![node index in the command line](https://github.com/cynogriffin/team-info-builder/blob/main/assets/images/run%20app.PNG)

You will then be asked a series of questions to collect your information as the manager of the team. All of the information is entered into the command line. You will then be subsequently prompted for your next action where you can either choose to enter a new engineer, enter a new intern, or end the prompts and create the page with the given information. An example of the prompts can be seen below:

![node prompts to collect team information](https://github.com/cynogriffin/team-info-builder/blob/main/assets/images/prompts.PNG)

Once all the necessary information has been entered and the user chooses to create the page, a confirmation message will be pronted to the command line, and then the generated HTML file will appear in a newly created output file. An example of a generated html page made with this application can be seen here: 

![generated HTML page](https://github.com/cynogriffin/team-info-builder/blob/main/assets/images/site%20page.PNG)

Here you can view my complete video walkthrough of the usage of the application:

![video of app creating page](https://j.gifs.com/LZWLGw.gif)

## Credits
##### [Back to Table of Contents](#table-of-contents)

For this project, I mainly referenced the documentation for [node.js](https://nodejs.org/api/), especially [File System](https://nodejs.org/api/fs.html), as well as [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), specifically [inquirer](https://www.npmjs.com/package/inquirer) and [Jest](https://jestjs.io/docs/getting-started).

## Questions
##### [Back to Table of Contents](#table-of-contents)

You can view my other projects on GitHub: [cynogriffin](https://github.com/cynogriffin)

If you have any questions or comments, please feel free to contact me via email at griffinc6@gmail.com.


---
Copyright &copy; 2022 Cody Griffin. All rights reserved.

Licensed under the [GPL v3 License](https://www.gnu.org/licenses/gpl-3.0).  