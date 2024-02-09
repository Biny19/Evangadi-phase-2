// alert("your JS file is connected!!");

// Question 1

function list_ofIntgers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
list_ofIntgers();

// Question 2
console.log("Question 2");
function list_ofConsecutiveIntegers(n) {
    if (typeof n !== "number") {
        console.log("Please enter a number");
    }
    else
    for (let i = n; i < n + 5; i++) {
        console.log(i + 1);
    }
}
list_ofConsecutiveIntegers(7);

// Question 3
// Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)
console.log("Question 3");
function sum_ofNext10Numbers(n) {
    if (typeof n !== "number") {
        console.log("Please enter a number");
    }
    else {
        let sum = 0;
        for (let i = n + 1; i <= n + 10; i++) {
            sum += i;
        }
        console.log(sum);
    }
}
sum_ofNext10Numbers(7);

// Question 4
// Write a function that takes an array as an argument and prints every element of the array on the
// console.
// Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44
console.log("Question 4");
function print_arrayElements(arr) {
    if (!Array.isArray(arr)) {
        console.log("Please enter an array");
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}
print_arrayElements([1, "Hello", 8, 44]);

// Question 5
// Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
// Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// Test case 2: Given the array a = ["world", 13], output should be: 2
console.log("Question 5");
function total_numberOfElements(arr) {
    if (!Array.isArray(arr)) {
        console.log("Please enter an array");
    }
    else {
        console.log(arr.length);
    }
}
total_numberOfElements([1, "Hello", 8, 44, 5, 7, "world", 10]);
total_numberOfElements(["world", 13]);

// Question 6
// Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
// Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// 3 + 0
console.log("Question 6");
function sum_ofArrayElements(arr) {
    if (!Array.isArray(arr)) {
        console.log("Please enter an array");
    }
    else {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log(sum);
    }
}
sum_ofArrayElements([5, 6, 99, 8, 76, 4, 68, 44]);
sum_ofArrayElements([3, 0]);

// Question 7
// Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102
console.log("Question 7");
function difference_betweenEvenOdd(arr) {
    if (!Array.isArray(arr)) {
        console.log("Please enter an array");
    }
    else {
        let sumEven = 0;
        let sumOdd = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sumEven += arr[i];
            }
            else {
                sumOdd += arr[i];
            }
        }
        console.log(sumEven - sumOdd);
    }
}
difference_betweenEvenOdd([5, 6, 99, 8, 76, 4, 68, 44]);

// Question 8
// Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car
console.log("Question 8");
function evenIndexes(arr) {
    if (!Array.isArray(arr)) {
        console.log("Please enter an array");
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                console.log(arr[i]);
            }
        }
    }
}
evenIndexes([5, 6, 99, 8, 76, 4, 68, 44]);
evenIndexes([11, "Sam", 3, 7, "car"]);

// Question 9
// Questions 9 and 10 are dependent on the sampleArray provided below:
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// Question 9
// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method

console.log("Question 9");
let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
function remove_lastElement(arr) {
    if (!Array.isArray(arr)) {
        console.log("Please enter an array");
    }
    else {
        arr.pop();
        arr.push(32);
        console.log(arr);
    }
}
remove_lastElement(sampleArray);

// Question 10
// Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});
console.log("Question 10");
function sort_array(arr) {
    if (!Array.isArray(arr)) {
        console.log("Please enter an array");
    }
    else {
        arr.sort(function(a, b){return a-b});
        console.log(arr);
    }
}
sort_array(sampleArray);

// Question 11
// The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.
let evangadiClass = {
lengthOfCourse: "1 Month",
website: "https://www.evangadi.com/",
isChallenging: false,
topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
students: [
{
name: "Abebe",
age: 34,
sex: "M"
},
{
name: "Kebede",
age: 44,
sex: "M"
},
{
name: "Almaz",
age: 27,
sex: "F"
},
{
name: "Challa",
age: 22,
sex: "M"
},
{
name: "Chaltu",
age: 19,
sex: "F"
}
]
}
// Question 11
// Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// console
// // Use the dot notation "." to call the property you want to change
console.log("Question 11");
evangadiClass.lengthOfCourse = "5 Month";
console.log(evangadiClass);

// Question 12
// Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// console
// // Use an array method
console.log("Question 12");
evangadiClass.topicsCovered.push("Bootstrap");
console.log(evangadiClass);

// Question 13
// Write a function that takes the "evangadiClass" object as an argument and calculates the average
// age of the class. Print the result on the console

console.log("Question 13");
function average_ageOfClass(obj) {
    if (typeof obj !== "object") {
        console.log("Please enter an object");
    }
    else {
        let sum = 0;
        for (let i = 0; i < obj.students.length; i++) {
            sum += obj.students[i].age;
        }
        console.log("the sum of Evangadi Students Age is:", sum );
        console.log("No. of Evangadi Students:", obj.students.length);
        console.log(sum / obj.students.length);
    }
}
average_ageOfClass(evangadiClass);

// Question 14
// Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console


console.log("Question 14");

function percentage_maleStudents(obj) {
    if (typeof obj !== "object") {
        console.log("Please enter an object");
    }
    else {
        let maleCount = 0;
        for (let i = 0; i < obj.students.length; i++) {
            if (obj.students[i].sex === 'M') {
                maleCount++;
            }
        }
        let percentage = (maleCount / obj.students.length) * 100;
        console.log("Percentage of male students:", percentage + "%");
    }
}
percentage_maleStudents(evangadiClass);

// Question 15
// Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// numbers (on the console) between low and high, and for each of these numbers print
// whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// "div3" directly after the number.

console.log("Question 15");
function divisible_by3(low, high) {
    if (typeof low !== "number" || typeof high !== "number") {
        console.log("Please enter a number");
    }
    else {
        for (let i = low; i <= high; i++) {
            if (i % 3 === 0) {
                console.log(i + " div3");
            }
            else {
                console.log(i);
            }
        }
    }
}
divisible_by3(1, 10);

// Question 16
// Write a function that prints in the console the numbers from 1 to 100. But for multiples of
// three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
// numbers which are multiples of both three and five print "FizzBuzz".

console.log("Question 16");
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 ===0) {
            console.log("FizzBuzz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz();

// Question 19
// An Evens number is an integer whose digits are all even. For example 2426 is an Evens
// number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
// integer argument is an Evens number. The function prints 0 otherwise.

console.log("Question 19");
function isEvens(n) {
    if (typeof n !== "number") {
        console.log("Please enter a number");
    }
    else {
        let str = n.toString();
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] % 2 === 0) {
                count++;
            }
        }
        if (count === str.length) {
            console.log(1);
        }
        else {
            console.log(0);
        }
    }
}
isEvens(2426);
isEvens(3224);
isEvens(246);

    
    






