const reverseSring = require('../src/reverseString');

test('reverse string', () => {
    expect(reverseSring('now')).toBe('won');
});