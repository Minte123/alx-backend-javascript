export default function updateStudentGradeByCity(studList, city, newGrades) {
  const lst = studList
    .map((obj) => ({ ...obj, grade: 'N/A' }))
    .filter((obj) => (obj.location === city))
    .map((obj) => {
      const item = { ...obj };
      newGrades.forEach((curr) => {
        if (curr.studentId === obj.id) {
          item.grade = curr.grade;
        }
      });
      return item;
    });
  return lst;
}
