const {server, app} = require("./server");
const request = require("supertest");

test("test request with valid payload", async function () {
  const testPayload = {
    name: "test name",
    email: "test.email@example.com",
    interests: "testing",
  };
  const response = await request(app).post("/update-profile").send(testPayload);

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty("info");
  expect(response.body.info).toBe("updated user profile successfully");

  server.close();
});

test("test request with invalid payload", async function () {
    const testPayload = {};
    const response = await request(app).post("/update-profile").send(testPayload);
  
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("empty payload. Couldn't update user profile");
  
    server.close();
  });