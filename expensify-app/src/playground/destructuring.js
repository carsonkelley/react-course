// const person = {
//     name: 'Carson',
//     age: 26,
//     location: {
//         city: 'Houston',
//         temp: 93
//     }
// };

// const {name:firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);


// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

const book = {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    publisher: {
        name: 'Farrar, Straus and Giroux'
    }
};

const { name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName); //valid publisher name, or self-published if nothing