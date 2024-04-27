const student = {
   firstName: "Felicity",
   lastName: "Zitha",
   studentNumber: 9,
   subjects: ["English", "Afrikaans", "Physical Science", "engineering Graphic Design", "Mathematics", "Computer Applications & Technology",
"Life Orientation"]
};
// Add the following properties/keys with their relevant values:
// firstName (1)
// lastName (1)
// studentNumber - (can be any random number) (1)
// subjects - (should be an array of at least 6 subjects) (6)
console.log(student);

// Add a function in your object to log an introduction with a list of subjects formatted where each subject will display on a new line. (3)
console.log(`Hello, my name is ${student.firstName} ${student.lastName}. My favorite subjects are:
${student.subjects[0]}
${student.subjects[5]}
${student.subjects[6]}
   `);

// Add a function to change the studentNumber. (3)
student.studentNumber = student.studentNumber + 241809;
student.newStudentNumber = student.studentNumber;
console.log(student);

// Add a function to delete the new student number. (3)
delete student.newStudentNumber;
console.log(student);

// Add a function to add a new property to the object. (any property that you choose) (3)
student.email = "felicitycrema@gmail'com";
console.log(student);








// Ensure that all functions are called to produce your results as per the brief above. (2)
// Zip your repo and submit your project on time (2)


// Due 28 Apr