function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + "!";
}
var user = {
    firstName: 'Not',
    lastName: 'Henry'
};
document.body.innerHTML = "<h1> " + greeter(user) + " </h1>";
