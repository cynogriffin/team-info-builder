const Employee = require('../lib/Employee');

const employee = new Employee('cody', '5', 'griffinc6@gmail.com');

it('should retrieve the values from the constructor of Employee', () => {
    expect(employee.name).toBe('cody');
    expect(employee.id).toBe('5');
    expect(employee.email).toBe('griffinc6@gmail.com');
});

it('should get the name from getName()', () => {
    expect(employee.getName()).toBe('cody');
});

it('should get id from getId()', () => {
    expect(employee.getId()).toBe('5');
});

it('should get email from getEmail()', () => {
    expect(employee.getEmail()).toBe('griffinc6@gmail.com');
});

it('should get the role from getRole()', () => {
    expect(employee.getRole).toBe('Employee');
});