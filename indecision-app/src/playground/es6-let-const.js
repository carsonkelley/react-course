var nameVar = "Carson";
var nameVar = "Mike"; //with var you can redefine variables
console.log('nameVar', nameVar);

let nameLet = "Janae";
nameLet = "Julieta";
console.log("nameLet", nameLet);

const nameConst = "Francoline";
console.log("nameConst", nameConst);

function getPetName() {
    const petName = "Hal";
    return petName;
}

const petName = getPetName();
console.log(petName);

//block level scoped

const fullName = "Carson Kelley";
let firstName;

if(fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);