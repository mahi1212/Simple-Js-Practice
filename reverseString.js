let comment = "Hello World";

// function reverseString(text){
//     let reverse = '';
//     for(const letter of text){
//         reverse = letter + reverse;
//     }
//     return reverse;
// }

function reverseString(comment){
    let reverse = '';
    for(var i = 0; i < comment.length; i++){
        reverse = comment[i] + reverse;
    }
    return reverse;
}

console.log(reverseString(comment));