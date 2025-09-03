const caesarCipher = require("../src/caesarCipher");
test("caesarCipher encoding test", () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test("caesarCipher decoding test (decrypt=true)", () => {
  expect(caesarCipher('Khoor, Zruog!', 3, true)).toBe('Hello, World!');
});

test("caesarCipher handles negative and zero shift", () => {
  expect(caesarCipher('abc', -3)).toBe('xyz');
  expect(caesarCipher('Hello', 0)).toBe('Hello');
});
