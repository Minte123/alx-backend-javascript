export default function getListStudentIds(ar) {
  if (Array.isArray(ar)) {
    const idAry = ar.map((obj) => obj.id);
    return idAry;
  }
  return [];
}
