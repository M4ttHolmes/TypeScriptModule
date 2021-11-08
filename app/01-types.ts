
    // 1        //2         //3
let username: string = "instructor";
let password: string = "Letmein1234!";
let instructorId: number = 5;

//1 - Variable Name
//2 - Variable Type
//3 - Initialized variable value

// uninitialized TS variables
let phoneNumber: string;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

// untyped initialized TS variable
let greeting = "Hello"

//! Types of Types

//* Number
let age: number = 40;
let hex: number = 0xf00d;
let binary: number = 0b1010;

//* String
let companyName: string;
companyName = "ElevenFifty Academy"

//* Boolean
let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

//* Array
let studentList: string[] = ["Tom", "Tracy", "Nikaya"] // much more common
let allScores: Array<number> = [100, 92, 95, 96];

//* Any
let dataFromThirdParty: any = "12345";

//* Void
function sayHelloToAll() : void {
    console.log("hello to all");
}

//* Null & Undefined
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

//* Tuple (Multiple)
let usernameAndID: [number, string];
usernameAndID = [1, "birthday"];

//* Enum (give names to numeric values)
enum WeaponType { Sword, Saber, Spear }
let weapon: WeaponType = WeaponType.Sword
