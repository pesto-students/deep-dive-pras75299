function updateObject(index, valueToReplace, arr) {
  const arrayToUpdate = arr;

  if (arrayToUpdate.length < 1) {
    arrayToUpdate.push(valueToReplace);
  } else if (index < 0) {
    arrayToUpdate[arrayToUpdate.length - 1] = valueToReplace;
  } else {
    arrayToUpdate[index] = valueToReplace;
  }

  return arrayToUpdate;
}

export { updateObject };
