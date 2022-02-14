const Employee = require('./Employee');

// creates the Engineer class that adds to the values of the Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // get the values from the parent constructor
        super(name, id, email);
        
        this.github = github;
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return "Engineer";
    };
}

module.exports = Engineer;