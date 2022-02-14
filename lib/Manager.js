const Employee = require('./Employee');

// creates the Manager class that adds to the values of Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // get values from parent constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return "Manager";
    };
};

module.exports = Manager;