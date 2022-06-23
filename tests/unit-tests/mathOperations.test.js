const operations = require("../../source/mathOperations");

describe("my calculator", () => {
  test("should add 1 + 2 to equal 3", () => {
    // Arrange (Given)
    const a = 1;
    const b = 2;

    // Act (When)
    const answer = operations.addition(a, b);

    // Assert (Then)
    expect(answer).toBe(3);
  });

  test("should substract 2 - 1 to equal 1", () => {
    // Arrange
    const a = 2;
    const b = 1;

    // Act
    const answer = operations.substact(a, b);

    // Assert
    expect(answer).toBe(1);
  });

  test("should multiply 2 * 2 to equal 4", () => {
    // Arrange
    const a = 2;
    const b = 2;

    // Act
    const answer = operations.multiply(a, b);

    // Assert
    expect(answer).toBe(4);
  });

  test("should divide 2 / 2 to equal 1", () => {
    // Arrange
    const a = 2;
    const b = 2;

    // Act
    const answer = operations.divide(a, b);

    // Assert
    expect(answer).toBe(1);
  });

  test.failing("should not have square root method", () => {
    expect(operations.squareRoot).toBeDefined();
  });

  test.todo("must have exponentiation method");
});
