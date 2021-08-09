// calculation of simple interest
function simpleInterest(p, r, t){
    var simInt = p * (r / 100)* t;
    return simInt;
}
let principleAmount = 1000;
let rate = 5;
let time = 2;
console.log();
console.log("Priciple is : "+ principleAmount + "$");
console.log("Rate is : "+ rate + "%");
console.log("Time is : "+ time + " years");
let result = simpleInterest(principleAmount, rate, time);
console.log("Interest is : " + result);
