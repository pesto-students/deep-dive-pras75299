const { createWriteStream, createReadStream } = require('fs');
const { Transform } = require('stream');

const jsonToCsv = (filePaths) => {
  return new Promise((resolve) => {
    const readCsv = createReadStream(filePaths.fileIn, { encoding: 'utf-8' });
    const transform = new Transform({
      transform: function (chunk, _, callBack) {
        const dataRows = chunk
          .toString()
          .replace(/("\w{1,}":)|[\r\n\s{[\]]/g, '')
          .replace(/},|}/g, '\n');

        callBack(null, dataRows);
      },
    });

    const writeCsv = createWriteStream(filePaths.fileOut);

    writeCsv.on('open', () => writeCsv.write(`\n`));
    writeCsv.on('close', () => resolve());

    readCsv.pipe(transform).pipe(writeCsv);
  });
};

module.exports = jsonToCsv;
