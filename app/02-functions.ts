function addNumbers(numOne: number, numTwo: number){ 
    return numOne + numTwo;
}

addNumbers(1, 2); // this works

//addNumbers(1, 2, 3)  // this will throw errors
//addNumbers(1, 2, 3, "foo") // more errors



function sayHello(name: string) {
    return name;
}
sayHello("Matt");
//sayHello(1) // breaks - not a string



function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string) {
    console.log(someString);
    return numOne + numTwo;
}
addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, "This is optional")