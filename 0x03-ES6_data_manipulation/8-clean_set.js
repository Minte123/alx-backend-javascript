export default function cleanSet(set, startString) {
  let str = '';
  if (startString && typeof startString === 'string') {
    for (const item of set) {
      if ((typeof item === 'string') && item.startsWith(startString)) {
        if (str === '') {
          str = str.concat(item.substring(startString.length));
        } else {
          str = str.concat('-', item.substring(startString.length));
        }
      }
    }
    return str;
  }
  return '';
}
