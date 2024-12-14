//----- JS LOOPS -----
//Question 1 : Sum of the numbers From 1 till N (use for)


function sumUpToN(n) {
  let sum = 0;
  i = 1;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumUpToN(10)); 

//Question 2: Calculate N factorial ( use for)


function factorial(n) {
  let result = 1 ;
  for( let i = 1; i<=n; i++) {
   result *= i
}
return result;
}
console.log(factorial(5));

// Question 3 : Find the even numbers from 1 till N 


function ciftSayilar(n){
  let count = 0
  for(let i = 1; i<=n; i++){
    if(i % 2 === 0){
      count++;
    }
  }
  return count;
}
console.log(ciftSayilar(10));

//Question 4: Find prime numbers till N which was input by user


// Question 5 : The sum of the numbers up to N that are divisible by 3 


function bolme(n){
  let sum = 0
  for(let i = 0; i<=n; i++){
    if(i % 3 === 0){
      sum += i;
    }

  }
  return sum
}
console.log(bolme(10))

// Question 7 : Find of the numbers up to N which are divisible by 5 (use for)

function divideIT(n){
  for(let i =1; i<=n; i++){
   if(i % 5 === 0){
    console.log(i);
   }
  }
}
divideIT(20);

// Question 8: Sum of numbers up to N till 1 that are square of them

function kareTop(n){
let sum = 0
for(let i = 1 ; i<=n; i++){
  sum += i * i;
}
return sum
}
console.log(kareTop(3));

// Question 9: Find the FizzBuzz Up to the numbers that user inputted(use for)

//! FizzBuzz : numbers are divisible by both 3 and 5 //
//! Buzz : Numbers only divisible by 3 //
//! Fizz : Numbers only divisible by 5//

function fizzBuzz(n){
  for(let i =1; i<=n; i++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
    } else if ( i % 3 === 0){
     console.log("Fizz");
    }
     else if(i % 5 === 0){
    console.log("Buzz");
  }else {
    console.log(i);
  }
}
}
fizzBuzz(15); 
// Question 10: By getting a number between 1 and 10 playing a guessing game (use do while)
 

