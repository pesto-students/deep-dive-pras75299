const server = require('http').createServer();
const jsonToCSV = require('./src/json-to-csv');

server.on('request', (req, res) => {
  res.end('Hello World\n');
});
process.stdout.write('Server listening to localhost:8000');
server.listen(8000);

const mainJsonToCsvFn = () => {
  const csvFiles = [];
  for (let i = 1; i < 2; i += 1) {
    csvFiles.push(
      jsonToCSV({
        fileIn: `./data/1.json`,
        fileOut: `./data/1.csv`,
      })
    );
    Promise.all(csvFiles)
      .then()
      .catch((err) => console.log(err.message));
  }
};
mainJsonToCsvFn();
