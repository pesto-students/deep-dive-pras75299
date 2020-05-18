const stream = require('stream');
const { chunkToLines } = require('../src/csv-to-json.transformers');

describe('CSV-TO-JSON(transformers)', () => {
  describe('Linefeed Test', () => {
    test('Normal linefeed test', async () => {
      const csvString = `A,A100100,2000,96,130
  A,A100200,2000,198,110`;
      const correctResult = `A,A100100,2000,96,130
  A,A100200,2000,198,110`;

      const readStream = stream.Readable.from(csvString, {
        encoding: 'utf8',
      });

      let result = '';

      for await (const line of chunkToLines(readStream)) {
        result += line;
      }
      expect(result).toEqual(correctResult);
    });
  });
});
