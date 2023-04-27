const { Triangle, Square, Circle } = require('../lib/shapes.js');

describe('Shapes', () => {
    test('Triangle renders correctly', () => {
      const triangle = new Triangle('blue', 'ABC', 'white');
      const expectedOutput = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
      expect(triangle.render()).toEqual(expectedOutput);
    });

    test('Square renders correctly', () => {
        const square = new Square('green', 'DEF', 'white');
        const expectedOutput = '<rect x="100" y="50" width="100" height="100" fill="green" />';
        expect(square.render()).toEqual(expectedOutput);
    });
    
    test('Circle renders correctly', () => {
        const circle = new Circle('blue', 'GHI', 'white');
        const expectedOutput = '<circle cx="150" cy="100" r="50" fill="blue" />';
        expect(circle.render()).toEqual(expectedOutput);
    });
  });