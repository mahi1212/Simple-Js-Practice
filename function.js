// Creating a function
function addNumbers(num1,num2){
    console.log(num1+num2);
}

for(var i = 0; i < 5; i++){
    console.log(i);
    if(i == 3){
        console.log("This is no three");
    }
}

function substactNum(num1, num2){
    return Math.abs(num1 - num2);
}

addNumbers(10,20);
var diffrence = substactNum(10,20);
console.log('Diffrence between two number is : '+  diffrence);
