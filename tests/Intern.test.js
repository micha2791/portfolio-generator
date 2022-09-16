const Employee = require('../lib/Employee');
const Manager = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Joe');
});

test('gets intern name', () => {
    const name = 'Joe';
    const intern = new Intern(name);
    expect(intern.getName()).toBe(name);
});

test('gets intern id', () => {
    const id = 3;
    const intern = new Intern('Joe', id);
    expect(intern.getId()).toBe(id);
});

test('gets intern email', () => {
    const email = 'joe3@gmail.com';
    const intern = new Intern('Joe', 3, email);
    expect(intern.getEmail()).toBe(email);
});

test('gets intern role', () => {
    const role = 'Intern';
    const intern = new Intern('Joe');
    expect(intern.getRole()).toBe(role);
});

test('gets intern school', () => {
    const school = 'USF';
    const intern = new Intern('Joe');
    expect(intern.getSchool()).toBe(school);
});


