
class Person {
    constructor(name = "Anonymous") {
        this.name = name;
    }
    getGreeting() {
        return `Hi, I am ${this.name}.`;
    }
}

const me = new Person('Carson Kelley');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());