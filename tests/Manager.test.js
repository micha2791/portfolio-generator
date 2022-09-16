const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Jane');
});

test('gets manager name', () => {
    const name = 'Jane';
    const manager = new Manager(name);
    expect(manager.getName()).toBe(name);
});

test('gets manager id', () => {
    const id = 2;
    const manager = new Manager('Jane', id);
    expect(manager.getId()).toBe(id);
});

test('gets manager email', () => {
    const email = 'jane2@gmail.com';
    const manager = new Manager('Jane', 2, email);
    expect(manager.getEmail()).toBe(email);
});

test('gets manager role', () => {
    const role = 'Manager';
    const manager = new Manager('Jane');
    expect(manager.getRole()).toBe(role);
});

test('gets manager office number', () => {
    const officeNumber = 1;
    const manager = new Manager('Jane');
    expect(manager.getOfficeNumber()).toBe(officeNumber);
});



