function escapeQuotedField(fieldText, quote) {
  let str = fieldText.trim();
  str = str.slice(1, str.length - 1);
  str = str.split(`\n`).join(`\\n`);
  return `\\"${str.split(`${quote}${quote}`).join(`\\${quote}`)}\\"`;
}

async function* csvToJsonGenerator(chunks, options) {
  let data = '';
  const delimiter = ',';
  const quote = '"';
  let num = 1;
  for await (const chunk of chunks) {
    data += chunk;
    //console.log('chunnk no. : ', num++);
    //console.log('data: ', data);
    let chunkDataArr = [];
    let rowFields = [];
    let fieldStartPosition = 0;
    let lastRowStartPosition = 0;
    let fieldEndPosition = 0;
    let isQuoteStartPresent = false;
    let isQuoteEndPresent = false;

    for (let i = 0; i < data.length; i += 1) {
      switch (data[i]) {
        case quote: {
          if (isQuoteStartPresent) {
            if (i + 1 < data.length && data[i + 1] === quote) {
              i += 1;
              fieldEndPosition += 1;
            } else {
              isQuoteEndPresent = true;
            }
          } else {
            isQuoteStartPresent = true;
          }
          fieldEndPosition += 1;
          break;
        }

        case delimiter: {
          if (!isQuoteStartPresent) {
            rowFields.push(data.slice(fieldStartPosition, fieldEndPosition));
            fieldStartPosition = fieldEndPosition + 1;
          } else if (isQuoteStartPresent && isQuoteEndPresent) {
            rowFields.push(
              escapeQuotedField(
                data.slice(fieldStartPosition, fieldEndPosition),
                quote
              )
            );
            isQuoteStartPresent = false;
            isQuoteEndPresent = false;

            fieldStartPosition = fieldEndPosition + 1;
          }
          fieldEndPosition += 1;
          break;
        }

        default: {
          if (data[i] === '\n' || data[i] === '\r\n') {
            if (
              !isQuoteStartPresent ||
              (isQuoteStartPresent && isQuoteEndPresent)
            ) {
              if (!isQuoteStartPresent) {
                rowFields.push(
                  data.slice(fieldStartPosition, fieldEndPosition)
                );
                fieldStartPosition = fieldEndPosition + 1;
              } else if (isQuoteStartPresent && isQuoteEndPresent) {
                rowFields.push(
                  escapeQuotedField(
                    data.slice(fieldStartPosition, fieldEndPosition),
                    quote
                  )
                );
                isQuoteStartPresent = false;
                isQuoteEndPresent = false;
                fieldStartPosition = fieldEndPosition + 1;
              }

              chunkDataArr.push(rowFields);
              rowFields = [];
              isQuoteStartPresent = false;
              isQuoteEndPresent = false;
              fieldStartPosition = fieldEndPosition + 1;
              lastRowStartPosition = fieldStartPosition;
            }
          }
          fieldEndPosition += 1;
        }
      }
    }
    data = data.slice(lastRowStartPosition, data.length);
    //console.log(JSON.stringify(chunkDataArr));
    //console.log('\n\n');
    yield { data: chunkDataArr, error: chunkDataArr };
  }
}

module.exports = { csvToJsonGenerator };
