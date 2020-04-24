function updateObject(index, replacementValue, arr) {
  const arrayToUpdate = [...arr];

  if (arrayToUpdate.length < 1) {
    arrayToUpdate.push(replacementValue);
  } else if (index < 0) {
    arrayToUpdate[arrayToUpdate.length - 1] = replacementValue;
  } else {
    arrayToUpdate[index] = replacementValue;
  }

  return arrayToUpdate;
}

export { updateObject };
