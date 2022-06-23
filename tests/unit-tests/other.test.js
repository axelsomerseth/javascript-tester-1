describe("other tests", () => {
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
});
