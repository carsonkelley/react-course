const person = {
    name: 'Carson',
    age: 26,
    location: {
        city: 'Houston',
        temp: 93
    }
};

const {name:firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}.`);


const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}

