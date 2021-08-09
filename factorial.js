// var factorial = 1;
// for(let i = 1; i <= 5; i++){
//     factorial = factorial * i;
// }
// console.log(factorial);

function getFactorial(num){
    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial = factorial * i;
    }
    return factorial;
}

let fistResult = getFactorial(5);
console.log(fistResult);