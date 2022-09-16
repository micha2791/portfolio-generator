const Employee = require('../lib/Employee'); 

test('creates an employee object', () => {
    const employee = new Employee('John');
});

test('gets employee name', () => {
    const name = 'John';
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test('gets employee id', () => {
    const id = 1;
    const employee = new Employee('John', id);
    expect(employee.getId()).toBe(id);
});

test('gets employee email', () => {
    const email = 'john1@gmail.com';
    const employee = new Employee('John', 1, email);
    expect(employee.getEmail()).toBe(email);
});

test('gets employee role', () => {
    const role = 'Employee';
    const employee = new Employee('John');
    expect(employee.getRole()).toBe(role);
});






