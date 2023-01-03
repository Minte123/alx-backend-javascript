export default function hasValuesFromArray(set, array) {
  let flag = true;
  array.forEach((item) => {
    if (!set.has(item)) {
      flag = false;
    }
  });
  return flag;
}
