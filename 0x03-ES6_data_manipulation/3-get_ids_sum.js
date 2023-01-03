export default function getStudentIdsSum(studList) {
  const sum = studList.reduce((total, obj) => total + obj.id, 0);
  return sum;
}
