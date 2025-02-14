console.log("Homework 3");

class Academy {
  constructor(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = subjects.length * 10;
  }

  printStudents() {
    console.log(`Students in Academy: ${this.students.join(", ")}.`);
  }

  printSubjects() {
    console.log(`Subjects in Academy: ${this.subjects.join(", ")}`);
  }
}

const academy = new Academy(
  "Qinshift Academy", 
  ["John Doe", "Jane Doe", "Bob Bobsky", "Will Smith"], 
  ["Math", " History", " Science", " Biology"], 
  new Date("2024-10-15"),
  new Date("2025-10-15")
);

academy.printStudents();
academy.printSubjects();

class Subject {
  constructor(title, isElective, academy, students) {
    this.title = title;
    this.isElective = isElective;
    this.numberOfClasses = 10;
    this.academy = academy;
    this.students = students;
  }

  overrideClasses(newNumberOfClasses) {
    if (newNumberOfClasses >= 3) {
      this.numberOfClasses = newNumberOfClasses;
    } else {
      console.log("The number of classes cannot be smaller than 3");
    }
  }
}

const subjectMath = new Subject("Math", false, academy, ["John Doe", "Jane Doe", "Bob Bobsky", "Will Smith"]);
const subjectHistory = new Subject("History", true ,academy, ["John Doe", "Jane Doe", "Bob Bobsky", "Will Smith"]);

subjectMath.overrideClasses(15);

console.log(subjectMath.numberOfClasses);

class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
  }

  startAcademy(academy) {
    this.academy = academy;
    academy.students.push(`${this.firstName} ${this.lastName}`);
  }

  startSubject(subject) {
    if (this.academy && this.academy.subjects.includes(subject.title)) {
      if (this.currentSubject !== null) {
        this.completedSubjects.push(this.currentSubject);
      }

      this.currentSubject = subject;

      subject.students.push(`${this.firstName} ${this.lastName}`);
    } else {
      console.log("Student must be enrolled in an academy, and the subject must exist in the academy.");
    }
  }
}

const student = new Student("Flamur", "Avdyli", 17);

student.startAcademy(academy);
student.startSubject(subjectMath);

academy.printStudents();
console.log(subjectMath.students);

console.log(student.currentSubject);