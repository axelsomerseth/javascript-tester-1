const request = require("supertest");
const { StatusCodes } = require("http-status-codes");

const BASE_URL = "localhost:3000";

describe("Integration tests with jest + supertest + localhost (express)", () => {
  test("GET /greeting without query parameters", async () => {
    const response = await request(BASE_URL).get("/greeting");
    expect(response.statusCode).toBe(StatusCodes.OK);
    expect(response.text).toBe("Hello Guest!");
  });

  test("GET /greeting?name=[SOME_NAME]", async () => {
    const name = "Axel";
    const response = await request(BASE_URL).get("/greeting?name=" + name);
    expect(response.statusCode).toBe(StatusCodes.OK);
    expect(response.text).toBe("Hello Axel!");
  });
});
