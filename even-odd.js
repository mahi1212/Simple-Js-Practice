// Checking weather number is even or odd

// function checkEven(number){
//     if(number % 2 == 0){
//         return "Even";
//     }else{
//         return "Odd";
//     }
// }

// let check = checkEven(25);
// console.log("Number is " + check);

// Checking weather number is odd

function isOdd(num){
    if(num % 2 != 0){
        return "Odd number";
    }
    return "Even";
}

const myNumber = isOdd(20);
console.log(myNumber);