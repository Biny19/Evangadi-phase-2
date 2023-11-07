// Question 1
// Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]
// Test 3: getOnlyEvens([1, 3, 5]) prints []
console.log("Question 1");
function getOnlyEvens(arr) {
    if (!Array.isArray(arr)) {
        console.log('Input is not an array');
    }
    
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && i % 2 == 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(getOnlyEvens([1, 2, 3, 6, 4, 8]));
console.log(getOnlyEvens([0, 1, 2, 3, 4]));
console.log(getOnlyEvens([1, 3, 5]));

// Question 2
// Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// Test 1: reverseCompare(72) prints "ok" because 72 > 27
// reverseCompare(23) prints "Not ok", because 23 is not greater than 32

console.log("Question 2");
function reverseCompare(n) {
    if (n < 10 || n > 99) {
        console.log('Input is not a two-digit number');
    }
    let numStr = n.toString();
    let reverseNumStr = numStr.split('').reverse().join('');
    if (numStr > reverseNumStr) {
        console.log('Ok');
    } else {
        console.log('Not ok');
    }
}
reverseCompare(72);
reverseCompare(23);

// Question 3
// Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
//  Test 1: returnFactorial(5) outputs 120
//  Test 2: returnFactorial(6) outputs 720
//  Test 3: returnFactorial(0) outputs 1
console.log("Question 3");
function returnFactorial(n) {
    if (n < 0) {
        console.log('Input is not a positive integer');
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(returnFactorial(5));
console.log(returnFactorial(6));
console.log(returnFactorial(0));

// Question 4(Meera array)
// A Meera array is defined to be an array containing only numbers as its elements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
// array of numbered elements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
//    Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *2 is 10
//    Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
//    Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3*2 is -6

console.log("Question 4");
function checkMeeraArray(arr) {
    if (!Array.isArray(arr)) {
        console.log('Input is not an array');
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] * 2)) {
            console.log('I am NOT a Meera array');
            return;
        }
    }
    console.log('I am a Meera array');
}
checkMeeraArray([10, 4, 0, 5]);
checkMeeraArray([7, 4, 9]);
checkMeeraArray([1, -6, 4, -3]);

// Question 5(Dual array)
// Define a Dual array to be an array where every value occurs exactly twice. For example,
// {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// Otherwise it returns 0.

console.log("Question 5");
function isDual(arr) {
    if (!Array.isArray(arr)) {
        console.log('Input is not an array');
    }
    let newArr = arr.sort();
    for (let i = 0; i < newArr.length; i += 2) {
        if (newArr[i] != newArr[i + 1]) {
            return 0;
        }
    }
    return 1;
}
console.log(isDual([1, 2, 1, 3, 3, 2]));
console.log(isDual([2, 5, 2, 5, 5]));
console.log(isDual([3, 1, 1, 2, 2]));

// Question 6
// Write a function that takes the number of seconds and returns the digital format clock
// time as a string. Time should be counted from 00:00:00.
//    Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45 secs.
//     digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
//     digitalClock(87000) as "00:10:00" It's 00:10 next day.
//     digitalClock(0) as "00:00:00"

console.log("Question 6");
function digitalClock(seconds) {
    if (seconds < 0) {
        console.log('Input is not a positive integer');
    }
    let hours = Math.floor(seconds / 3600)%24;
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${hours}:${mins}:${secs}`;
}
console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));
console.log(digitalClock(0));

