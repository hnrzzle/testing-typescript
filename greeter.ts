function greeter(person: string) {
  return `Hello, ${person}!`;
}

let user = 'Not Henry';

document.body.innerHTML = greeter(user);