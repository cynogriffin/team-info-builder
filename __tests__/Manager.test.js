const Manager = require('../lib/Manager');

const manager = new Manager('cody', '5', 'griffinc6@gmail.com', '123');

it('should get the costructor values for Manager', () => {
    expect(manager.name).toBe('cody');
    expect(manager.id).toBe('5');
    expect(manager.email).toBe('griffinc6@gmail.com');
    expect(manager.officeNumber).toBe('123');
});

it('should get the name from getName()', () => {
    expect(manager.getName()).toBe('cody');
});

it('should get the id from getId()', () => {
    expect(manager.getId()).toBe('5');
});

it('should get the email from getEmail()', () => {
    expect(manager.getEmail).toBe('griffinc6@gmail.com');
});

it('should get the office number from getOfficeNumber()', () => {
    expect(manager.getOfficeNumber).toBe('123');
});

it('should get the role from getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});