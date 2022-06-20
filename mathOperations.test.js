const operations = require("./mathOperations");

test("adds 1 + 2 to equal 3", () => {
  // Arrange (Given)
  const a = 1;
  const b = 2;

  // Act (When)
  const answer = operations.addition(a, b);

  // Assert (Then)
  expect(answer).toBe(3);
});

test("substracts 2 - 1 to equal 1", () => {
  // Arrange
  const a = 2;
  const b = 1;

  // Act
  const answer = operations.substact(a, b);

  // Assert
  expect(answer).toBe(1);
});

test("multiplies 2 * 2 to equal 4", () => {
  // Arrange
  const a = 2;
  const b = 2;

  // Act
  const answer = operations.multiply(a, b);

  // Assert
  expect(answer).toBe(4);
});

test("divides 2 / 2 to equal 1", () => {
  // Arrange
  const a = 2;
  const b = 2;

  // Act
  const answer = operations.divide(a, b);

  // Assert
  expect(answer).toBe(1);
});

test("compare two similar arrays", () => {
  const a = [1, 2, 3, 4];
  const b = [1, 2, 3, 4];

  expect(a).toEqual(b);
});

test("compare two similar objects", () => {
  const a = { name: "John", lastName: "Doer" };
  const b = { name: "John", lastName: "Doer" };

  expect(a).toEqual(b);
});

test("assert null or notNull values", () => {
  expect(null).toBeNull();
  expect("").not.toBeNull();
});

test("assert undefined values", () => {
  expect(undefined).toBeUndefined();
  expect(operations.squareRoot).toBeUndefined();
  expect(null).not.toBeUndefined();
  expect(false).toBeDefined();
});

test("should assert truthy or falsy values", () => {
  expect("").toBeFalsy();
  expect(0).toBeFalsy();
  expect(null).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect("0").toBeTruthy();
});
