const Intern = require('../lib/Intern');

const intern = new Intern('cody', '5', 'griffinc6@gmail.com', 'MSU');

it('should get the constructor values for Intern', () => {
    expect(intern.name).toBe('cody');
    expect(intern.id).toBe('5');
    expect(intern.email).toBe('griffinc6@gmail.com');
    expect(intern.school).toBe('MSU');
});

it('should get the name from getName()', () => {
    expect(intern.getName()).toBe('cody');
});

it('should get the id from getId()', () => {
    expect(intern.getId()).toBe('5');
});

it('should get the email from getEmail()', () => {
    expect(intern.getEmail()).toBe('griffinc6@gmail.com');
});

it('should get the school name from getSchool()', () => {
    expect(intern.getSchool()).toBe('MSU');
});

it('should get the role from getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});