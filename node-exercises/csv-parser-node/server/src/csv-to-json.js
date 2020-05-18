const fs = require('fs');
const path = require('path');
const stream = require('stream');
const util = require('util');
const { once } = require('events');
const { csvToJsonGenerator } = require('./csv-to-json.transformers');

const finished = util.promisify(stream.finished);

function getOutputPath(inputFilePath) {
  const directory = path.dirname(inputFilePath);
  const fileExt = path.extname(inputFilePath);
  const fileName = path.basename(inputFilePath, fileExt);

  const outputJsonPath = path.join(
    directory,
    'output',
    `${fileName}-output.json`
  );
  const outputErrorPath = path.join(
    directory,
    'output',
    `${fileName}-errors.txt`
  );

  return { json: outputJsonPath, error: outputErrorPath };
}

async function fileWriter(
  transformedChunks,
  writeJsonStream,
  writeErrorStream
) {
  for await (const chunk of transformedChunks) {
    if (!writeJsonStream.write(JSON.stringify(chunk.data))) {
      await once(writeJsonStream, 'drain');
    }
    // if (!writeErrorStream.write(chunk)) {
    //   await once(writeErrorStream, 'drain');
    // }
  }
  writeJsonStream.end();
  // writeErrorStream.end();
  // Wait until done. Throws if there are errors.
  await finished(writeJsonStream);
  // await finished(writeErrorStream);
}

async function csvToJson(inputFilePath, userOptions) {
  const outputPath = getOutputPath(inputFilePath);
  const options = {
    headers: false,
    delimiters: [',', ';', '\t'],
    detectDelimiter: true,
  };

  const readStream = fs.createReadStream(inputFilePath, {
    encoding: 'utf8',
    highWaterMark: 8192,
  });
  const writeJsonStream = fs.createWriteStream(outputPath.json);
  const writeErrorStream = fs.createWriteStream(outputPath.error);

  const transformedChunk = csvToJsonGenerator(readStream, {
    ...options,
    ...userOptions,
  });

  await fileWriter(transformedChunk, writeJsonStream, writeErrorStream);
}

module.exports = { csvToJson, getOutputPath };
