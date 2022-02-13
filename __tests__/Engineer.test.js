const Engineer = require('../lib/Engineer');

const engineer = new Engineer('cody', '5', 'griffinc6@gmail.com', 'cynogriffin');

it('should get the constructor values for Engineer', () => {
    expect(engineer.name).toBe('cody');
    expect(engineer.id).toBe('5');
    expect(engineer.email).toBe('griffinc6@gmail.com');
    expect(engineer.github).toBe('cynogriffin');
});

it('should get the name from getName()', () => {
    expect(engineer.getName()).toBe('cody');
});

it('should get the id from getId()', () => {
    expect(engineer.getId()).toBe('5');
});

it('should get the email from getEmail()', () => {
    expect(engineer.getEmail()).toBe('griffinc6@gmail.com');
});

it('should get the github username from getGithub()', () => {
    expect(engineer.getGithub()).toBe('cynogriffin');
});

it('should get the role from getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});