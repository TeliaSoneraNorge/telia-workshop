class Animal {
  constructor(name = 'Honey Badger') {
    this.name = name;
  }

  sayName() {
    return `Animal name is: ${this.name}`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  sayBarg() {
    console.log('bargin....!');
  }
}

const dog = new Dog('Fido');
const animal = new Animal();

console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(dog.name, dog.sayBarg);
console.log(animal.name, animal.sayName);
