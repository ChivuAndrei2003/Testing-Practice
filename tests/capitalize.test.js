const capitalize = require('../src/capitalize');

test('capitalize first letter of string', () => {
    expect(capitalize('andrei')).toBe('Andrei')
});