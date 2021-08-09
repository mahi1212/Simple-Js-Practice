function repeatString(str, num){
    newStr = "";
    while(num > 0){
        newStr += str; 
        num--;
    }
    return newStr;
}   

var first = repeatString("abc", 3);
console.log(newStr);