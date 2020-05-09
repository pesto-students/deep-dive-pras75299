async function* chunkToLines(chunkIterable) {
  let previous = '';
  for await (const chunk of chunkIterable) {
    previous += chunk;
    while (true) {
      const eolIndex = previous.indexOf('\n');
      if (eolIndex < 0) break;

      // line includes the EOL
      const line = previous.slice(0, eolIndex + 1);
      yield line;
      previous = previous.slice(eolIndex + 1);
    }
  }
  if (previous.length > 0) {
    yield previous;
  }
}

async function* numberLines(lineIterable) {
  let lineNumber = 1;
  for await (const line of lineIterable) {
    // yield line.split(',');
    yield `${lineNumber} ${line}`;
    lineNumber += 1;
  }
}

module.exports = { chunkToLines, numberLines };
