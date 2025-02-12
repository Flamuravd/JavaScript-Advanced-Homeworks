console.log("Homework 2");

const fetchPostsAsync = async () => {
  try {
    const res = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json");

    console.log(res);

    const data = await res.json();

    // 1. Show the average age and average grade of all students combined
    const age = data.reduce((acc, student) => acc + student.age, 0);
    const grade = data.reduce((acc, student) => acc + student.grade, 0);

    const averageAge = age / data.length;
    const averageGrade = grade / data.length;

    document.querySelector("#averageAgeAndGrade").innerHTML = `1. Average Age: ${averageAge} and Average Grade: ${averageGrade}`;
    console.log(`Average Age: ${averageAge} and Average Grade: ${averageGrade}`);

    // 2. Show the number of students that are over 60 and the number of students that are under 30 years old
    const studentsOver60 = data.filter(student => student.age > 60).length;
    const studentsUnder30 = data.filter(student => student.age < 30).length;

    document.querySelector("#studentsOver60AndUnder30").innerHTML = `2. Students Over 60: ${studentsOver60} and Students Under 30: ${studentsUnder30}`;

    console.log(`Students Over 60: ${studentsOver60}`);
    console.log(`Students Under 30: ${studentsUnder30}`);

    // 3. Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above
    const studentsInfo = data
    .filter(student => student.age > 30 && student.averageGrade >= 4)
    .map(student => `${student.firstName} ${student.lastName}, City: ${student.city}`);

    document.querySelector("#studentsInfo").innerHTML = studentsInfo.map(student => `<li>${student}</li>`).join("");

    console.log(`First name, last name and city of the students that are over 30 and have an average grade of 4 and above:`, studentsInfo);

    // 4. Find the student named Arthur Cadore and display all of his information
    const studentArthurCadore = data.filter(student => student.firstName.startsWith("Arthur") && student.lastName.startsWith("Cadore"));

    document.querySelector("#studentArthurCadore").innerHTML = studentArthurCadore
    .map(student => `<p>4. ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.averageGrade}</p>`)
    .join("");

    console.log(studentArthurCadore);

    // 5. Find the oldest and youngest student and display their information on the screen
    const oldestStudent = data.reduce((oldest, student) => student.age > oldest.age ? student : oldest, data[0]);
    const youngestStudent = data.reduce((youngest, student) => student.age < youngest.age ? student : youngest, data[0]);

    console.log("Oldest student:", oldestStudent);
    console.log("Youngest student:", youngestStudent);

    document.querySelector("#oldestStudent").innerHTML = `Oldest: ${oldestStudent.firstName} ${oldestStudent.lastName}, Age: ${oldestStudent.age}`;
    document.querySelector("#youngestStudent").innerHTML = `Youngest: ${youngestStudent.firstName} ${youngestStudent.lastName}, Age: ${youngestStudent.age}`;


    // 6. Show a list of the full names of students that have a last name longer than 8 characters
    const lastNameLongerThan8Characters = data.filter(student => student.lastName.length > 8);

    document.querySelector("#lastNameLongerThan8Characters").innerHTML = lastNameLongerThan8Characters.map(student => `<li>${student.firstName} ${student.lastName}</li>`).join("");

    console.log(`Students with last name longer than 8 characters:`, lastNameLongerThan8Characters);

    // 7. Show a list of the top 10 best students by average grade
    const top10BestStudents = [...data]
    .sort((a, b) => b.averageGrade - a.averageGrade)
    .slice(0, 10);

    document.querySelector("#top10BestStudents").innerHTML = top10BestStudents.map(student =>`<li>${student.firstName} ${student.lastName}</li>`).join("");

    console.log(`Top 10 best students by average grade: `,top10BestStudents);

    // 8. Show on the screen if some users have an average grade of 1 or if all users are adults ( above 18)
    const averageGrade1 = data.some(student => student.averageGrade === 1);
    const allAdults = data.every(student => student.age > 18);

    document.querySelector("#averageGrade1OrAllAdults").innerHTML = 
    averageGrade1 ? "Some students have an average grade of 1." : "No students have an average grade of 1.";
  
    document.querySelector("#averageGrade1OrAllAdults").innerHTML += 
    allAdults ? "<br>All students are adults." : "<br>Not all students are adults.";

    console.log({ averageGrade1, allAdults });
  } catch (err) {
    console.log("This is the error:", err);
  }
};

fetchPostsAsync();