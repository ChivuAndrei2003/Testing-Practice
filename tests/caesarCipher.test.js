const caesarCipher = require("../src/caesarCipher");

test("caesarCipher encoding test", () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
