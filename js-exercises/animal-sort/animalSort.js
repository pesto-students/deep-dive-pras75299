function animalSort(arr) {
  const sortedByLegs = arr.sort(function (animalA, animalB) {
    if (animalA.numberOfLegs !== animalB.numberOfLegs) {
      return animalA.numberOfLegs - animalB.numberOfLegs;
    } else if (animalA.numberOfLegs === animalB.numberOfLegs) {
      let aAnimalName = animalA.name.toLowerCase();
      let bAnimalName = animalB.name.toLowerCase();
      return aAnimalName < bAnimalName ? -1 : aAnimalName > bAnimalName ? 1 : 0;
    }
  });

  return sortedByLegs;
}

export { animalSort };
