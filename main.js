// Assginment 1: 
// Using javascript answers the folllowing questions :

//1- ** Create a function that takes the age in years and returns the age in days.
let convertAge = (age=Number)=>{
    const year = 365.24;
    let daysAge = age * year;
    console.log(daysAge);
}
convertAge(30)

//2- ** Create a function that takes an array of numbers and returns the smallest number in the set.

let getSmallestNum = (...numbers)=>{
  let num = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (num < numbers[i]){
        num = num
    }
    else{
        num = numbers[i]
    }

        
    }
    console.log(num);
    
  }
getSmallestNum(4,5,6,7,8,9,5,20,30,40,2)

// 3- ** Create a function that takes any non-negative number as an array and return it with its digits in descending order. Descending order is when you sort from highest to lowest.

let sortNumber = (...numbers)=>{
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i+1; j < numbers.length; j++) {
                if (numbers[i]<numbers[j]) {
                    let temp = numbers[i];
                    numbers[i]= numbers[j];
                    numbers[j]= temp;
                }
            }
        }
        console.log(numbers);
}
sortNumber(10,50,30,1,40,22)

// 4- ** Create a function that takes an array of numbers and returns the average of this numbers.
let averageNum = (...numbers)=>{
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum +numbers[i];
        console.log(sum);
    }
    let average = sum / numbers.length;
    console.log(average);
    
    
}
averageNum(10,3,45,45)

//5- ** what is the output of 
// console.log( [ ]  == [ ] )
// console.log( { } == { } )
// And explain your answer

//answer 5- objects and arrays  are assigned and compared by reference, not by value. This means that when you compare two , you are actually comparing the references
//answer 5- Comparing by reference means refers to the same location in memory.

//6- ** what is the output of this code with explaination

// function main() {
//   console.log("A");
//   setTimeout(function print() {
//     console.log("B");
//   }, 0);
//   console.log("C");
// }
// main();
//6- answer is A - C - B  because setTime is Asynchronous and take time so js engine send it to another stake to wait for synchronous code 


// 7- ** what is the output of this code with explaination
// var num = 8;
// var num = 10;
// console.log(num);
//7 answer is 10 because before es6 with var you can assigne value to tha same varible many times ; 

// 8- ** what is the output of this code with explaination
// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = 'Ayush';
//   let age = 21;
// }
// sayHi();

//8- the answer is undefined because of the hoisting law in js ;