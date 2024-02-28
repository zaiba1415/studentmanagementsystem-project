import inquirer from "inquirer";
class Student {
    constructor(studentID, firstname, lastname, age) {
        this.studentID = studentID;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    getfullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}
class StudentManagementSystem {
    constructor() {
        this.students = [];
    }
    addstudent(student) {
        this.students.push(student);
        console.log(`Student ${student.getfullname()} added`);
    }
    viewstudents() {
        console.log("Students");
        this.students.forEach((student) => {
            console.log(`Name ${student.getfullname()}`);
        });
    }
}
async function managestudent() {
    const studentSystem = new StudentManagementSystem();
    while (true) {
        const actionchoice = await inquirer.prompt({
            type: "list",
            name: "selectedaction",
            message: "Select an action",
            choices: ["addstudent", "viewstudent", "exit"]
        });
        switch (actionchoice.selectedaction) {
            case "addstudent":
                const studentInput = await inquirer.prompt([{
                        type: "input",
                        name: "studentID",
                        message: "Enter studentID"
                    },
                    {
                        type: "input",
                        name: "firstname",
                        message: "Enter your first name"
                    },
                    {
                        type: "input",
                        name: "lastname",
                        message: "Enter your lastname"
                    },
                    {
                        type: "input",
                        name: "age",
                        message: "Enter your age"
                    }
                ]);
                const newstudent = new Student(studentInput.studentID, studentInput.firstname, studentInput.lastname, parseInt(studentInput.age));
                studentSystem.addstudent(newstudent);
                break;
            case "viewstudent":
                studentSystem.viewstudents();
                break;
            case "exit":
                console.log("Good bye");
        }
    }
}
managestudent();