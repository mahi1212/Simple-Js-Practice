const Arr = [2,3,4,5];
var sum = 0;
for(let i = 0; i < Arr.length; i++){
    let element = Arr[i];
    sum += Arr[i];
}
console.log(sum);

// Using function
function sumOfArray(arr){
    sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

var sum = sumOfArray([1,4,6,8,9]);
console.log(sum);

