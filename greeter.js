var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + ". " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + "!";
}
var user = new Student(prompt('What is your First Name?'), prompt('Middle Initial?'), prompt('Last Name?'));
document.body.innerHTML = "<h1> " + greeter(user) + " </h1>";
