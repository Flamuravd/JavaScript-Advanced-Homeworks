console.log("Homework 1");

fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
  .then(res => res.json())
  .then(data => {
    const studentsWithHighGrades = data.filter(student => student.averageGrade > 3);
    console.log("Students with an average grade higher than 3:", studentsWithHighGrades);

    const femaleStudentsWithHighGrade5 = data
      .filter(student => student.gender === "Female" && student.averageGrade === 5)
      .map(student => student.firstName);
      console.log("Female students with an average grade of 5:", femaleStudentsWithHighGrade5);

    const maleStudentsInSkopjeOver18 = data
      .filter(student => student.gender === "Male" && student.city === "Skopje" && student.age > 18)
      .map(student => `${student.firstName} ${student.lastName}`);
      console.log("Male students in Skopje over 18:", maleStudentsInSkopjeOver18);

    const femaleStudentsOver24 = data.filter(student => student.gender === "Female" && student.age > 24);
    const averageGradeFemaleOver24 = femaleStudentsOver24.reduce((sum, student) => sum + student.averageGrade, 0) / femaleStudentsOver24.length;
    console.log("Average grade of female students over 24:", averageGradeFemaleOver24);

    const maleStudentsBGradeOver2 = data
      .filter(student => student.gender === "Male" && student.firstName.startsWith("B") && student.averageGrade > 2);
      console.log("Male students with name starting with B and average grade over 2:", maleStudentsBGradeOver2);
  });