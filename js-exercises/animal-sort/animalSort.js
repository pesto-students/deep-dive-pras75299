function animalSort(arr) {
  const sortedByLegs = arr.sort(function (a, b) {
    if (a.numberOfLegs !== b.numberOfLegs) {
      return a.numberOfLegs - b.numberOfLegs;
    } else if (a.numberOfLegs === b.numberOfLegs) {
      let aAnimalName = a.name.toLowerCase();
      let bAnimalName = b.name.toLowerCase();
      return aAnimalName < bAnimalName ? -1 : aAnimalName > bAnimalName ? 1 : 0;
    }
  });

  return sortedByLegs;
}

export { animalSort };
