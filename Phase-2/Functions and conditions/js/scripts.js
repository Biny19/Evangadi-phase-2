// alert("your JS file is connected!!");
//question 1

function myFirst() {
    console.log("Hello");
}
myFirst();

//question 2

function mySecond(y) {
    console.log(y);
}
mySecond("how are you John");

//question 3

function myThird(x) {
    mySecond(x);
}
 myThird("Hi John");
 myThird(32);

    //question 4

function myFourth(x=[2, 4, 6, 8, 10]) {
    console.log(x[0]);
}
myFourth();

//question 5

function myFifth(x=[]) {
    let y = x[0] + x[1];
    console.log(y);
}
myFifth([5, 6]);

//question 6

function minutesToSeconds(minutes) {
    // Validate input type
    if (typeof minutes !== "number" || !Number.isInteger(minutes)) {
        return("Input must be an integer number.");
    }
  
    // Convert minutes to seconds
    return minutes * 60;
  }
  const seconds = minutesToSeconds(6);
    console.log(seconds);

//question 7

function increment(number) {
    // Validate input type
    if (typeof number !== "number") {
      return("Input must be a number.");
    }
  
    // Increment the number
    return number + 1;
  }
    const result = increment(6);
    console.log(result);
  
//question 8

function calculateTriangleArea(base, height) {
    // Validate input types
    if (typeof base !== "number" || typeof height !== "number") {
      return("Inputs must be numbers.");
    }
  
    // Calculate the triangle area
    return (base * height) / 2;
  }
    const area = calculateTriangleArea(6, 7);
    console.log(area);  
  
//question 9

function countAnimalLegs(chickenCount, cowCount, pigCount) {
    // Validate input types
    if (typeof chickenCount !== "number" || typeof cowCount !== "number" || typeof pigCount !== "number") {
      return("Inputs must be numbers.");
    }
  if (!Number.isInteger(chickenCount) || !Number.isInteger(cowCount) || !Number.isInteger(pigCount)) {
    return("Inputs must be whole numbers.");
    }
    // Calculate the total number of legs
    const totalLegs = chickenCount * 2 + cowCount * 4 + pigCount * 4;
  
    // Return the total number of legs
    return totalLegs;
  }
    const legs = countAnimalLegs(2, 3, 5);
    console.log(legs);

//question 10

function tripleFirstElement(array) {
    // Validate input type
    if (!Array.isArray(array) || array.length !== 2) {
      return("Input must be an array of two numbers.");
    }
  
    // Get the first element of the array
    const firstElement = array[0];
  
    // Triple the first element
    const tripledFirstElement = firstElement * 3;
  
    // Return the tripled first element
    return tripledFirstElement;
  }
    const tripled = tripleFirstElement([10, 2]);
    console.log(tripled);
  