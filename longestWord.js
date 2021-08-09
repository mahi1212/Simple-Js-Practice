function findLongestWordLength(str){
    let words = str.split(' ');
    let longest = 0;
    for(let i = 0; i< words.length; i++){
        if(words[i].length > longest){
            longest = words[i].length;
        }
    }
    return longest;
}

const sentence = "Hi I'm Mahinur Rahman, and a professional web developer";
let word = findLongestWordLength(sentence);
console.log(word);