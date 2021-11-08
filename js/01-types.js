// 1        //2         //3
var username = "instructor";
var password = "Letmein1234!";
var instructorId = 5;
//1 - Variable Name
//2 - Variable Type
//3 - Initialized variable value
// uninitialized TS variables
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
// untyped initialized TS variable
var greeting = "Hello";
//! Types of Types
//* Number
var age = 40;
var hex = 0xf00d;
var binary = 10;
//* String
var companyName;
companyName = "ElevenFifty Academy";
//* Boolean
var isLoggedIn = true;
var isGoldLevelUser = true;
//* Array
var studentList = ["Tom", "Tracy", "Nikaya"]; // much more common
var allScores = [100, 92, 95, 96];
//* Any
var dataFromThirdParty = "12345";
//* Void
function sayHelloToAll() {
    console.log("hello to all");
}
//* Null & Undefined
var undefinedVariable = undefined;
var nullVariable = null;
//* Tuple (Multiple)
var usernameAndID;
usernameAndID = [1, "birthday"];
//* Enum (give names to numeric values)
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
//# sourceMappingURL=01-types.js.map