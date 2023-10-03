const { isInvalidEmail, isEmptyPayload } = require("./validator");

test("valid email", () => {
  const payload = {
    name: "test name",
    email: "test.email@example.com",
    interests: "testing",
  };

  const result = isInvalidEmail(payload);
  expect(result).toBe(false);
});

test("invalid email", () => {
  const payload = {
    name: "test name",
    email: "test.email",
    interests: "testing",
  };

  const result = isInvalidEmail(payload);
  expect(result).toBe(true);
});

test("empty payload", () => {
  const testPayload = {};
  const result = isEmptyPayload(testPayload);
  expect(result).toBe(true);
});

test("non-empty payload", () => {
  const testPayload = {
    name: "test name",
    email: "test.email@example.com",
    interests: "testing",
  };
  const result = isEmptyPayload(testPayload);
  expect(result).toBe(false);
});
