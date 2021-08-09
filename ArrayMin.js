const numbersArray = [10,20,50,34];

function findMin(numbers){
    let minNumber = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element < minNumber){
            minNumber = element;
        }
    }
    return minNumber;
}

const myMin = findMin(numbersArray);
console.log(myMin);
