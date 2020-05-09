const fs = require('fs');
const stream = require('stream');
const util = require('util');
const { chunkToLines, numberLines } = require('./csv-to-json.transformers');

const pipeline = util.promisify(stream.pipeline);

const compose = (...fns) => (val) => fns.reduce((v, fn) => fn(v), val);

const readStream = fs.createReadStream('data/test1.csv', {
  encoding: 'utf8',
});

const transformedIterable = compose(chunkToLines, numberLines)(readStream);

// eslint-disable-next-line func-names
(async function () {
  const readable = stream.Readable.from(transformedIterable);
  const writable = fs.createWriteStream('data/output/test1-output.txt');
  await pipeline(readable, writable);
})();
