interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}!`;
}

let user = {
  firstName: 'Not',
  lastName: 'Henry'
};

document.body.innerHTML = `<h1> ${greeter(user)} </h1>`;