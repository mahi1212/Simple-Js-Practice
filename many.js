function printManyTimes(str){
    const sentence = str + " is cool";
    for(var i = 0; i < str.length; i+= 2){
        console.log(sentence);
    }
}

printManyTimes('FreeCodeCamp');
