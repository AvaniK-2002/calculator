
// Import the calculator functions
const { add, subtract, multiply, divide } = require('./calculator');

// Unit tests for addition
test('Adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
});

// Unit tests for subtraction
test('Subtracts two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
});

// Unit tests for multiplication
test('Multiplies two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
});

// Unit tests for division
test('Divides two numbers correctly', () => {
    expect(divide(6, 2)).toBe(3);
});

test('Handles division by zero', () => {
    expect(divide(5, 0)).toBe('Error');
});
