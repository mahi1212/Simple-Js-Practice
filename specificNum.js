const Numbers = [10, 34, 23, 67, 242, 132, 453];

function findSpecificNum(num){
    let bigNum = [];
    for(let item of num){
        if(item > 80){
            bigNum.push(item);
        }
    }
    return bigNum;
}

let firstTry = findSpecificNum(Numbers);
console.log("Numbers greater tha 80 is : " + firstTry);