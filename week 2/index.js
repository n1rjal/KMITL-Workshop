// // Comments are the things that you write that doesn't get executed
// // <- This is a single line comment

// /*
// This will be multiline comment
//  */

// // number types
// // number type holds values float and integer as well
// let number1 = 12;
// let number2 = 14;
// let number3 = 14.21212;

// console.log(typeof number1);
// console.log(typeof number2);
// console.log(typeof number3);

// let addition = number1 + number2 + number3;
// let subtraction = number1 - number2 - number3;
// let multiplication = number1 * number2 * number3;
// let division = number1 / number2 / number3;
// let modDivision = 5 % 3;

// console.log("A = ", addition);
// console.log("S = ", subtraction);
// console.log("M = ", multiplication);
// console.log("D = ", division);
// console.log("R = ", modDivision);

// let name = "Ram Bahadur";
// let worksAt = "Police Officer";
// console.log("name = ", name);
// console.log("worksAt = ", worksAt);
// console.log("Length of ram bahadur's name = ", name.length);

// console.log("Name before replacing ", name);
// name = name.replace("Ram", "Nirjal");
// console.log("Name after replacing ", name);

// let nameInCapital = name.toUpperCase();
// console.log("NAME IN CAPITAL LETTER ", nameInCapital);

// let fruits = "Banana, Apple, PineApple";
// console.log(fruits.split(","));

// let _3GreaterThan4 = 3 > 4;
// console.log(_3GreaterThan4);

// let number = 45;

// let numberLessThan90 = number < 90; // 1st statement
// let numberGreater76 = number > 76; // 2nd statement

// // and operation use && sign
// let andOperation = numberGreater76 && numberLessThan90;

// // and operation use || sign
// let orOperation = numberGreater76 || numberLessThan90;

// console.log("numberGreaterthan76", numberGreater76);
// console.log("numberLessthan90", numberLessThan90);
// console.log("And operation ", andOperation);
// console.log("Or operation ", orOperation);
// console.log("Negation or complement of numberGreaterThan76 ", !numberGreater76);

// for user username
// const userProvidedUsername = prompt("Enter your username ?");
// const correctUsername = "n1rjal";

// // for user password
// const userProvidedPassword = prompt("Enter your password");
// const correctPassword = "test12345";

// const userNameMatches = correctUsername === userProvidedUsername;
// const passwordMatches = correctPassword === userProvidedPassword;

// const shallUserPass = userNameMatches && passwordMatches;

// console.log("Username matches = ", userNameMatches);
// console.log("Password matches = ", passwordMatches);

// if (shallUserPass) {
//   alert("User is welcome");
// } else {
//   alert("User is not welcome");
// }

// const hourOfTime = 23;

// if (hourOfTime < 10) {
//   console.log("Güten Morgen"); // Good morning in german
// } else if (hourOfTime > 10 && hourOfTime < 18) {
//   console.log("Güten Tag"); // Good afternoon in german
// } else {
//   console.log("Güten Natch"); // good night in german
// }

// translator that translates
// numbers in english to spanish
// number will be from 1 to 5
// let number = prompt("Enter a number");
// number = parseInt(number);
// let numberInSpanish = "";

// if (number === 1) {
//   numberInSpanish = "Uno"; // 1 in epanyol
// } else if (number === 2) {
//   numberInSpanish = "Dos"; // 2 in espanyol
// } else if (number === 3) {
//   numberInSpanish = "Tres"; // 3 in espanyol
// } else if (number === 4) {
//   numberInSpanish = "Quatros"; // 4 in espanyol
// } else if (number === 5) {
//   numberInSpanish = "Seis"; // 5 in espanyol
// } else {
//   numberInSpanish = "irreconocible"; // unrecognizable number in espanyol
// }

// alert("Number " + number + " in spanish is " + numberInSpanish);

// Assignment
// make a translator of numbers in english langugae
// i.e. 1,2,3,4 or 5 to Thai langugae

// // declaring the function
// function giveTitle(name) {
//   const randomNumber = Math.random();
//   if (randomNumber < 0.5) {
//     name = "Mr " + name;
//     return name;
//   } else {
//     name = "Mrs " + name;
//     return name;
//   }
// }

// const names = ["Nirjal", "Paudel", "ram", "hari"];
// let sum = 0;
// for (let i = 0; i < names.length; i = i + 1) {
//   // block of code that will run while the value
//   // i is less than or equal to 10
//   const name = names[i];
//   const nameWithTitle = giveTitle(name);
//   console.log(nameWithTitle);
//   // calling the function
// }

// // object car
// const myCar = {
//   name: "Maruti 800",
//   model: "Hyndai",
//   color: "Black",
//   fuel: 2,
//   drive: function (distanceToDrive) {
//     if (distanceToDrive > 40) {
//       console.log("Can't drive that distance");
//     } else {
//       console.log("Can drive that distance");
//     }
//   },
// };

// myCar.drive(80);
// myCar.drive(20);

// follows principle of DRY -> Don't repeat yourself
class FourWheeler {
  fuel = 10;

  constructor(mileage, name, weight, color) {
    this.mileage = mileage;
    this.name = name;
    this.weight = weight;
    this.color = color;
  }

  drive(distanceToDrive) {
    console.log("Fuel: " + this.fuel);
    const maxTravelDistance = this.mileage * this.fuel;
    if (maxTravelDistance < distanceToDrive) {
      console.log("Distance cannot be travelled without refuelling car");
    } else {
      console.log("Distance can be travelled without refuelling car");
    }
  }

  addFuel(fuelToAdd) {
    this.fuel = this.fuel + fuelToAdd;
  }
}

class Bus extends FourWheeler {
  horn() {
    console.log(this.name + " horns");
  }
}

class Jeep extends FourWheeler {}

const bus1 = new Bus(25, "Car1", 450, "Yellow");
console.log(bus1);
bus1.horn();
