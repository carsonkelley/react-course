"use strict";

//arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

//this keyword - no longer bound

var user = {
    name: "Carson",
    cities: ["Houston", "Austin", "Broussard"],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        // console.log(this.name);
        // console.log(this.cities);
        // const that = this;
        return this.cities.map(function (city) {
            return _this.name + " has lived in " + city;
        });

        // this.cities.forEach( (city) => {
        //     console.log(this.name + " has lived in " + city);
        // });
    }
};

console.log(user.printPlacesLived());
