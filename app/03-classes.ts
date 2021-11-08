class Person {
    firstName: string;
    lastName: string;

    sayHello() {
        console.log("Hello", this.firstName);
    }
}

let user: Person = new Person();

user.firstName = "Matt"
user.lastName = "Holmes"
user.sayHello();


class Game {
    constructor(name: string, maker: string) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}
let battleship: Game = new Game("Battleship", "Hasbro");

class GameWithoutConstructor {
    gameName: string;
    gameMaker: string;
}
let monopoly: GameWithoutConstructor = new GameWithoutConstructor();
monopoly.gameName = "Monopoly";
monopoly.gameMaker = "Hasbro";



class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;   
}

let myCar: Automobile = new Automobile();
let myBike: Motorcycle = new Motorcycle();

myCar.isSelfDriving = false;
myCar.topSpeed = 200
myCar.make = "Toyota"
myBike.easyToDoWheelie = true
myBike.topSpeed = 180;


// class Store {
//     constructor(name: string, city: string) {
//         this.name = name;
//         this.city = city;
//     }
//     name: string;
//     city: string;
// }
// let ikea = new Store("IKEA", "Fishers");


class Store {
    constructor(public name: string, public city: string) {}
}
let ikea: Store = new Store("IKEA", "Fishers")



class Employee extends Person {
    private _salary: number;
    getSalary(): string {
        return this._salary.toString();
    }
    setSalary(newSalary: number) {
        this._salary = newSalary
    }
}
let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0 // this breaks
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is: ", salaryResult);