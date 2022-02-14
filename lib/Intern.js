const Employee = require('./Employee');

// creates the Intern class that adds to the values of the Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        // get the values from the parent constructor
        super(name, id, email);

        this.school = school;
    }
    
    getSchool() {
        return this.school;
    };

    getRole() {
        return "Intern"
    };
};

module.exports = Intern;