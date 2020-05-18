const { getOutputPath } = require('../src/csv-to-json');

describe('CSV-TO-JSON', () => {
  describe('Output path generation Test', () => {
    test('Error Path Test', async () => {
      expect(getOutputPath('data/test1.csv').error).toBe(
        'data/output/test1-errors.txt'
      );

      expect(getOutputPath('data/test1').error).toBe(
        'data/output/test1-errors.txt'
      );
    });

    test('Json Path Test', async () => {
      expect(getOutputPath('data/test1.csv').json).toBe(
        'data/output/test1-output.json'
      );
      expect(getOutputPath('data/test1').json).toBe(
        'data/output/test1-output.json'
      );
    });
  });
});
