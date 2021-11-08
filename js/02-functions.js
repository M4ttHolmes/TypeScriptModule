function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
addNumbers(1, 2); // this works
//addNumbers(1, 2, 3)  // this will throw errors
//addNumbers(1, 2, 3, "foo") // more errors
function sayHello(name) {
    return name;
}
sayHello("Matt");
//sayHello(1) // breaks - not a string
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, "This is optional");
//# sourceMappingURL=02-functions.js.map