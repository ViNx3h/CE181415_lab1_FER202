class Person {
    //Initialize constructor with 2 params
    constructor(name, age) {
        // Initialize instance variables: name and age
        this.name = name;

        this.age = age;

    }

    sayHello() {
        //Method to greet, prints a message including name and age
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);

    }

}
// Create an instance of the Person class with name "John" and age 25
const person = new Person("John", 25);
// Call the sayHello method of the person object, which prints a greeting
person.sayHello();