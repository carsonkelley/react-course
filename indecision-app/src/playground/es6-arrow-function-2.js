//arguments object - no longer bound with arrow functions

const add =  (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));


//this keyword - no longer bound

const user = {
    name: "Carson",
    cities: ["Houston", "Austin", "Broussard"],
    printPlacesLived() {
        // console.log(this.name);
        // console.log(this.cities);
        // const that = this;
        return this.cities.map((city) => this.name + " has lived in " + city );

        // this.cities.forEach( (city) => {
        //     console.log(this.name + " has lived in " + city);
        // });
    }
};

console.log(user.printPlacesLived());


//Challenge area

const multiplier = {
    numbers: [1, 3, 8],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());