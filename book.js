const pagesofFirst = 100;
const pagesofSecond = 200;
const pagesofThird = 300;

function properRequirments(firstCopy, secondCopy, thirdCopy){
    let firstTotal  = firstCopy * pagesofFirst;
    let secondTotal  = secondCopy * pagesofSecond;
    let thirdTotal  = thirdCopy * pagesofThird;

    return total = firstTotal + secondTotal + thirdTotal;
}

var pagesOfFirstOrder = properRequirments(1, 1, 1);
console.log( 'Pages needed : ' + pagesOfFirstOrder);