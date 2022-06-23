const request = require("supertest");
const { StatusCodes } = require("http-status-codes");

const JSON_PLACEHOLDER_BASE_URL = "https://jsonplaceholder.typicode.com";

describe.skip("Integration tests with jest + supertest + jsonplaceholder", () => {
  test("Test GET /posts - Promise example", () => {
    request(JSON_PLACEHOLDER_BASE_URL)
      .get("/posts/1")
      .then((response) => {
        expect(response.statusCode).toBe(StatusCodes.OK);
        expect(response.body).toBeDefined();
        expect(response.body.id).toBe(1);
      });
  });

  test("Test GET /posts/1 - async/await example", async () => {
    const response = await request(JSON_PLACEHOLDER_BASE_URL).get("/posts/1");
    expect(response.statusCode).toBe(StatusCodes.OK);
    expect(response.body).toBeDefined();
    expect(response.body.id).toBe(1);
  });

  test("Test GET /posts", async () => {
    const response = await request(JSON_PLACEHOLDER_BASE_URL).get("/posts");
    expect(response.statusCode).toBe(StatusCodes.OK);
    expect(response.body).toBeDefined();
    expect(response.body).toBeInstanceOf(Array);
  });

  test("Test GET /comments?postId=[POST_ID]", async () => {
    const response = await request(JSON_PLACEHOLDER_BASE_URL).get(
      "/comments?postId=1"
    );
    expect(response.statusCode).toBe(StatusCodes.OK);
    expect(response.body).toBeInstanceOf(Array);
  });

  test("Test POST /posts", async () => {
    const newPost = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    const response = await request(JSON_PLACEHOLDER_BASE_URL)
      .post("/posts")
      .send(newPost);
    expect(response.statusCode).toBe(StatusCodes.CREATED);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.id).toBeTruthy();
    expect(response.body.title).toBe(newPost.title);
  });

  test("Test PUT	/posts/1", async () => {
    const post = {
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    };
    const response = await request(JSON_PLACEHOLDER_BASE_URL)
      .put("/posts/1")
      .send(post);
    expect(response.statusCode).toBe(StatusCodes.OK);
    expect(response.body).toBeDefined();
    expect(response.body).toEqual(post);
  });

  test("Test PATCH	/posts/1", async () => {
    const post = {
      title: "foo foo",
    };
    const response = await request(JSON_PLACEHOLDER_BASE_URL)
      .patch("/posts/1")
      .send(post);
    expect(response.statusCode).toBe(StatusCodes.OK);
    expect(response.body).toBeDefined();
    expect(response.body.title).toEqual(post.title);
  });

  test("Test DELETE /posts/1", async () => {
    const response = await request(JSON_PLACEHOLDER_BASE_URL).delete(
      "/posts/1"
    );
    expect(response.statusCode).toBe(StatusCodes.OK);
  });
});
