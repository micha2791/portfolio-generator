const Employee = require('.lib/Employee');
const Engineer = require('.lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Jane');
});

test('gets engineer name', () => {
    const name = 'Jane';
    const engineer = new Engineer(name);
    expect(engineer.getName()).toBe(name);
});

test('gets engineer id', () => {
    const id = 2;
    const engineer = new Engineer('Jane', id);
    expect(engineer.getId()).toBe(id);
});

test('gets engineer email', () => {
    const email = 'jane2@gmail.com';
    const engineer = new Engineer('Jane', 2, email);
    expect(engineer.getEmail()).toBe(email);
});

test('gets engineer role', () => {
    const role = 'Engineer';
    const engineer = new Engineer('Jane');
    expect(engineer.getRole()).toBe(role);
});

test('gets engineer github', () => {
    const github = 'jane2';
    const engineer = new Engineer('Jane');
    expect(engineer.getGithub()).toBe(github);
});


