const numbers = [1,25,77,-33,45];

function findPos(numArr){
    let number;
    for(number of numArr){
        console.log(number);
        numArr.pop()
        if(number < 0){    
            break;
        }
    }
    return number;
}

let myArr = findPos(numbers);