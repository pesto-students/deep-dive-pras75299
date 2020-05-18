const { csvToJson } = require('./src/csv-to-json');
const { jsonToCsv } = require('./src/json-to-csv');

const parser = { csvToJson, jsonToCsv };

// parser.csvToJson('data/test1.csv', { headers: true, delimiters: [','] });
parser.csvToJson('data/bigFile.csv', { headers: true, delimiter: [','] });
// parser.csvToJson('data/sample1.csv', { headers: true, delimiters: [','] });

module.exports = parser;
