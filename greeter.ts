interface Person {
  firstName: string;
  lastName: string;
}

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = `${firstName} ${middleInitial}. ${lastName}`;
    }
}

function greeter(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}!`;
}

let user = new Student (prompt('What is your First Name?'), prompt('Middle Initial?'), prompt('Last Name?'));


document.body.innerHTML = `<h1> ${greeter(user)} </h1>`;