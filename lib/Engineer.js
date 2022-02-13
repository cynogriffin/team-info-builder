const Employee = require('./Employee');

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