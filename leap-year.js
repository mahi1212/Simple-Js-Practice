// Checking weather a year is leap year or not 
function isLeapYear(year){
    if(year % 400 == 0 || (year % 4 == 0) && (year % 100 != 0)){
        return true;
    }
    return false;
}

const checkYear = isLeapYear(2024);
console.log(checkYear);

// Using ES6 check leap year
function isLeap(year){

    const leap = new Date(year , 1, 29).getDate() === 29;
    if(leap == true){
        return year + " is a leap year";
    }
    return "Not leap year";
}

var res = isLeap(2025);
console.log(res);