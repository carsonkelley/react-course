"use strict";

var nameVar = "Carson";
var nameVar = "Mike"; //with var you can redefine variables
console.log('nameVar', nameVar);

var nameLet = "Janae";
nameLet = "Julieta";
console.log("nameLet", nameLet);

var nameConst = "Francoline";
console.log("nameConst", nameConst);

function getPetName() {
    var petName = "Hal";
    return petName;
}

var petName = getPetName();
console.log(petName);

//block level scoped

var fullName = "Carson Kelley";
var firstName = void 0;

if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);
