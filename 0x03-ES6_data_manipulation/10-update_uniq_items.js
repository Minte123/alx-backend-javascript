export default function updateUniqueItems(mp) {
  let myMap = new Map();
  if (!(mp instanceof Map)) {
    throw Error('Cannot process');
  } else {
    myMap = mp;
    for (const [key, value] of myMap) {
      if (value === 1) {
        myMap.set(key, 100);
      }
    }
    return myMap;
  }
}
