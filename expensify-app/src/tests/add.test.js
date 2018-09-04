const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test("should generate amicable greeting from name", () => {
    expect(generateGreeting("Bono")).toBe("Hello Bono!");
});

test("should generate amicable greeting from no name", () => {
    expect(generateGreeting()).toBe("Hello Anonymous!");
});