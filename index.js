//Number 1 Question
//Create a function that will be able to convert figures from Fahrenheit to Celsius.
function farenHeight(ferNumber) {
  let firstCalculation = ferNumber - 32;
  let secondCalculation = (firstCalculation * 5) / 9;
  console.log("This is the final result", Math.round(secondCalculation));
}
farenHeight(98.8);

//Number 2 Question
//Create a function that will calculate the average of numbers in an array.
function averageNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let finalResult = sum / array.length;
  console.log(Math.round(finalResult));
}
averageNumbers([1, 2, 3, 4, 5, 6, 7, 8, 10, 12]);

//Number 3 Question
//Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
function divisibleNumbers(n, x, y) {
  let divideX = n % x;
  let divideY = n % y;
  if (divideX == 0) {
    console.log("Number divisible by X ");
  } else if (divideY == 0) {
    console.log("Number divisible by Y ");
  } else if (divideX != 0 && divideY != 0) {
    console.log("Number not divisible by either X or Y");
  }
}
divisibleNumbers(10, 2, 3);

//Number 4 Question
//Create a function that will output the first 100 prime numbers.
function isPrime(num) {
  if(num < 2) return false;
  for (var i = 2; i < num; i++) {
      if(num % i == 0) 
          return false;
  }
  return true;
  
}
for(var i = 2; i < 100; i++){
  if(isPrime(i)) console.log(i);
}

//Number 5 Question
//Create a function that will return a boolean specifying if a number is a prime number.
function booleanPrime(num) {
  for(let l = 2; l < num; l++){
    if (num % l == 0) {
    return console.log(false);
  } else {
    return console.log(true);
  }

  }
  
}
booleanPrime(11);


//Number 6 Question
//Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
function arrayOfNumbers(numbers) {
  const arr = numbers.filter((num) => num > 0);
  console.log(arr);
}
arrayOfNumbers([1, -2, 3, 4, -5, 6]);


//Number 7 Question
//Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".
function fizzBuzz(){
    for(let k = 1; k <= 100; k++){
        if(k % 3 == 0 && k % 5 == 0){
            console.log("FizzBuzz");
        }else if(k % 3 == 0){
            console.log("Fizz");
        }else if(k % 5  == 0){
            console.log("Buzz");
        }else{
            console.log(k);
        }
    }

}
fizzBuzz()

//Number 8 Question
//The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
//It must start with a hash symbol, #.
//Ignore all spaces in the input.
//All words must have their first letter capitalized.
//If the final result is going to be longer than 140 characters, it should return false.
//If the input or result is an empty string, it should return false.

function hashTag(){
  let string = prompt("Enter Your hashtag words... ");


//If the input or the result is an empty string it must return false
 
  if(string === ''){
    return false
        
    }


//If the final result is longer than 140 chars it must return false.
 
  if(string.length > 140) {
    return false
    }

//All words must have their first letter capitalized.
    const stringWithCamelCase = string
        .split(' ') 
        .map(string => string.charAt(0).toUpperCase()+string.slice(1))
        .join('');


//It must start with a hashtag (#).
    const stringWithHashtag = `#${stringWithCamelCase}`;
    document.getElementById("hash").innerHTML = "Your hashtag is " + stringWithHashtag;

}
hashTag()


