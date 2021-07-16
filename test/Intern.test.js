const Intern = require("../lib/intern");
const Employee = require("../lib/employee");
const { test } = require("@jest/globals");

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Intern(testValue);
  expect(e.getName()).toBe(testValue);
});
test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Intern("Alice", testValue);
    expect(e.getId()).toBe(testValue);
  });
test('getRole() should return "Intern"', () => {
    const testValue = "Intern";
    const e = new Intern("Alice", 1, "test@test.com", "School", testValue);
    expect(e.getRole()).toBe(testValue);
  });