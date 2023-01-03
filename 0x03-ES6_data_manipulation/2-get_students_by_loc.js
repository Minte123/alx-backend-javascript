export default function getStudentsByLocation(studList, city) {
  const data = studList.filter((obj) => (obj.location === city));
  return data;
}
