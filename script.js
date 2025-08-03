// console.log("Hello World!");

// var name = "John";
// console.log(name);

// var colleageTeam = "Footbaall";
// var collegeNumber = 8;
// console.log(collegeNumber);

// var isRegistered = true;
// console.log(isRegistered);

// var work;
// console.log(work);

// work = "Full Stack Developer";
// console.log(work);

// console.log(name + " " + collegeNumber);

// var colleageName, hasCourse;

// colleageName = "MHSSCE";
// hasCourse = true;

// console.log(
//   colleageName + " has 35 courses. Does it have a course? " + hasCourse
// );

// collegeNumber = "Eleven";
// console.log(collegeNumber);

// colleageTeam = "Soccer";
// console.log(colleageTeam);

// alert(colleageTeam);

// var age = prompt("What is your age?");
// console.log("Your age is " + age + " years old.");

//* Basic Operators
// var totalDistance, distanceJohn, distanceMessi;
// totalDistance = 20;

// distanceJohn = totalDistance - 12;
// console.log(distanceJohn);
// distanceMessi = totalDistance - 7;
// console.log(distanceMessi);
// console.log(distanceMessi * 2);
// console.log(distanceMessi / 2);

// // logical operators
// var distanceToCollege, distanceToHome;

// distanceToCollege = 8;
// distanceToHome = 12;

// var isClose = distanceToHome > distanceToCollege;
// console.log(isClose);

// // Boolean
// var isLoggedIn = true;

// // Logical Operators
// var a, b;
// (a = 15), (b = 11);
// console.log(a > b || !(b != "11" && a == "15"));

//* Conditional Statements
// var grade;
// grade = 42;

// if (grade < 40) {
//   console.log("You can't go to next semester.");
// } else if (grade >= 40 && grade < 45) {
//   console.log("You can go to next semester, but you can't enter the exam.");
// } else {
//   console.log("You can go to next semester.");
// }

// var age;
// age = 19;

// if (age < 18) {
//   console.log("You can't enter the cafe.");
// } else if (age < 23) {
//   console.log("You can enter the cafe, but you can't order alcohol.");
// } else {
//   console.log("You can enter the cafe and order alcohol.");
// }

// // Ternary Operator
// var grade = 80;

// grade < 45
//   ? console.log("You can't can't go to next semester.")
//   : console.log("You can go to next semester.");

// var result = grade < 45 ? "Failure" : "Success";
// console.log(result);

// if (grade < 45) {
//   console.log("Failure");
// } else {
//   console.log("Success");
// }

// // Switch Statement
// var day;
// day = "Monday";

// switch (day) {
//   case "Saturday":
//     console.log("I like Saturdays.");
//     break;
//   case "Monday":
//     console.log("I don't like Mondays.");
//     break;
//   case "Friday":
//     console.log("I really like Fridays.");
//     break;
//   default:
//     console.log("I don't Know this day.");
//     break;
// }

// var grade = 40;

// switch (true) {
//   case grade < 40:
//     console.log("You can't go to next semester.");
//     break;
//   case grade >= 40 && grade < 45:
//     console.log("You can go to next semester, but you can't enter the exam.");
//     break;
//   default:
//     console.log("You can go to next semester.");
//     break;
// }

/*
Alex, Sara and Nancy are in the same class.
In math class, Alex's grades are 90, 80, 95.
Sara's grades are 89,76,98
Nancy's grades are 42,98,83

1.Calculate the average score for each student, then save that value into a variable.
2. Find the highest average and then console log the student who has the highest average.
3. Averages may be the same.
*/

// var gradeAlex = (90 + 80 + 95) / 3;
// var gradeSara = (89 + 76 + 98) / 3;
// var gradeNancy = (42 + 98 + 83) / 3;

// console.log("Alex average grade:", gradeAlex);
// console.log("Sara average grade:", gradeSara);
// console.log("Nancy average grade:", gradeNancy);

// if (gradeAlex > gradeSara && gradeAlex > gradeNancy) {
//   console.log("Alex has the highest grade.", gradeAlex);
// } else if (gradeSara > gradeAlex && gradeSara > gradeNancy) {
//   console.log("Sara has the highest grade.", gradeSara);
// } else if (gradeNancy > gradeAlex && gradeNancy > gradeSara) {
//   console.log("Nancy has the highest grade.", gradeNancy);
// } else {
//   console.log("Maybe there average is same.");
// }

//* Loops
// // while loop
// var number = 1;

// while (number <= 10) {
//   console.log(number);
//   number++;
// }

/*
1. Print even numbers from 132 to 148 on the console
2. Print numbers between 25 and 100, divisible by 7, to the console
*/
// var number = 132;

// while (number <= 148) {
//   if (number % 2 === 0) {
//     console.log(number);
//   }
//   number++;
// }

// console.log("Number divisible by 7.");

// var num = 25;

// while (num <= 100) {
//   if (num % 7 === 0) {
//     console.log(num);
//   }
//   num++;
// }

// // for loop
// for (var num = 1; num <= 10; num++) {
//   console.log(num);
// }

/*
1. Print odd numbers from 132 to 148 on the console
2. Print numbers between 25 and 100, divisible by both 7 and 5, to the console
*/

// for (var number = 132; number <= 148; number++) {
//   if (number % 2 !== 0) {
//     console.log(number);
//   }
// }

// console.log("Numbers divisible by both 7 and 5.");

// for (var num = 25; num <= 100; num++) {
//   if (num % 7 === 0 && num % 5 === 0) {
//     console.log(num);
//   }
// }

// Continue and Break
/*
1. Check the numbers from 1 to 10 and just print the numbers that can be divided by 2 on the console
2. Check the numbers from 1 to 10 and just print the first number that can be divided by 2 on the console
*/

// console.log("Continue Statement");

// for (var i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) continue;
//   console.log(i);
// }

// console.log("Break Statement");
// for (var i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//     break;
//   }
// }

//* Functions
// function greet() {
//   console.log("Hello, Wolrd!");
// }

// greet();

// // function with parameters
// function sayHi(name) {
//   console.log("Hi," + " " + name);
// }

// sayHi("Eren");
// sayHi("Mikasa");

// function cube(num) {
//   console.log(num * num * num);
// }

// cube(3);
// cube(37);

// function bmi(length, weight) {
//   console.log(weight / (length * length));
// }

// bmi(1.85, 68);

// // function return
// function cube(num) {
//   return num * num * num;
// }

// var result = cube(7);

// console.log("The cube of 7 is: ", result);

// function calculateAge(birthYear) {
//   return 2025 - birthYear;
// }

// var age = calculateAge(1999);

// console.log("Your age is: ", age);

// function enterCafe(age) {
//   if (age < 18) {
//     return "You can't enter the cafe.";
//   }
//   return "You can enter the cafe.";
// }

// var cafe = enterCafe(17);

// console.log(cafe);

// // function expression and declaration
// /// function declaration
// function calculateAge(birthYear) {
//   return 2025 - birthYear;
// }

// // function expression
// var calculateAge = function (birthYear) {
//   return 2025 - birthYear;
// };

// var age = calculateAge(1999);
// console.log(age);

// calculateAge = "Mike";
// console.log(calculateAge);

// var Age = calculateAge(2000);

/*
1. Create a function called 'subtraction', this function takes two arguments X and Y, then subtracts one of these arguments from the other and returns the result. Then console log the result.

2. Declare a function called 'is Odd', this function is gonna take one argument and it is gonna check if that argument is an 'odd number', then it needs to return a Boolean and console that.

3. Declare a function called 'addition', it is gonna take one argument, then it needs to sum up all numbers from 1 to that argument and return the total value. Then you need to console log that total.
*/

// function subtraction(x, y) {
//   return y - x;
// }

// var result = subtraction(25, 454);
// console.log(result);

// var isOdd = function (num) {
//   if (num % 2 !== 0) {
//     return true;
//   }
//   return false;
// };

// console.log(isOdd(9));

// var addition = function (num) {
//   var res = 0;
//   for (var i = 1; i <= num; i++) {
//     res += i;
//   }
//   return res;
// };

// var addResult = addition(9);
// console.log(addResult);

// // Function Scope
// function sayName() {
//   var name = "Eren";
//   console.log(name);
// }

// sayName();
// console.log(name);

// var name = "Mikasa";
// console.log(name);
// sayName();

// var count = 57;
// console.log(count);

// function writeCount() {
//   console.log(count);
// }

// writeCount();

// function sayHi() {
//   var myWord = "Hi there!";
//   console.log(yourWord);
//   sayBye();

//   function sayBye() {
//     var yourWord = "Bye!";
//     console.log(myWord);
//   }
// }

// sayHi();

// var sentence = "Hello, World!";

// function saySentence() {
//   var sentence = "Bye, Bye!";
//   console.log(sentence);
// }

// saySentence();
// console.log(sentence);

// function writeNumber() {
//   var myx = 26;
//   console.log(myx);
// }

// function doSomething() {
//   console.log(myx);
// }

// writeNumber();
// doSomething();

//* Arrays
// var students = ["Eren", "Mikasa", "Armin", "Levi"];

// console.log(students);
// console.log(students[0]);

// students[0] = "Hange";
// console.log(students);

// students[4] = "Jean";
// console.log(students);

// students[7] = "Sasha";
// console.log(students);

// var titans = [];
// var titans = new Array();

// var commonData = ["Eren", 18, true, null];
// commonData[1];

// var cars = ["Rolls Royce", "BMW", "Mercedes", "Audi"];
// var cars_length = cars.length;
// console.log(cars_length);

// //? Array Methods
// var students = ["Eren", "Mikasa", "Armin", "Levi"];

// // push method
// students.push("Hange");
// console.log(students);

// // pop method
// students.pop();
// console.log(students);

// var removedStudent = students.pop();
// console.log(removedStudent);
// console.log(students);

// // unshift method, adds an element to the beginning of the array
// var titans = ["Attack", "Jaw", "Armored"];
// titans.unshift("Colossal");
// console.log(titans);

// // shift method, removes the first element of the array
// titans.shift();
// console.log(titans);

// // indexOf
// console.log(students.indexOf("Mikasa"));

// // slice method
// var friends = ["Jean", "Sasha", "Connie", "Historia"];
// var closeFriends = friends.slice(1, 3);
// console.log(friends);
// console.log(closeFriends);

// var otherFriends = friends.slice();
// console.log(otherFriends);

/*
var books = ['Harry Potter', 'Hobbit', 'Hunger Games', 'Little Prince'];
1) Access the last, and the second last element of the books array using the length of the array and print it to the console

var films = [
  [' hobbit1', 'hobbit2', 'hobbit3'],
  ['matrix1', 'matrix2', 'matrix3'],
  ['godFather1', 'godFather2', 'godFather3']
]
2) Print the godFather2 film from the films array to the console
*/

var books = ["Harry Potter", "Hobbit", "Hunger Games", "Little Prince"];
var lastBook = books.length;
console.log(books[lastBook - 1]);
console.log(books[lastBook - 2]);

var films = [
  [" hobbit1", "hobbit2", "hobbit3"],
  ["matrix1", "matrix2", "matrix3"],
  ["godFather1", "godFather2", "godFather3"],
];
console.log(films[2][1]);
