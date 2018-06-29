"use strict";

function square(x) {
    return x * x;
}

// const squareArrow = (x) => {
//     return x * x;
// };

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(square(8));
console.log(squareArrow(4));
