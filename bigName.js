
const Names = ['Shahi', 'Kishan', 'Oishee', 'Rafi', 'Shezan'];

function bigNameOfFriend(Arr){
    // let len = 0;
    // let longest;
    // for(let i = 0; i < Arr.length; i++){
    //     if(Arr[i].length > len){
    //         len = Arr[i].length;
    //         longest = Arr[i];
    //     }
    // }
    // return longest;
    let longest = '';
    for(let item of Arr){
        if(item.length > longest.length){
            longest = item;
        }
    }
    return longest;
}

const firstTry = bigNameOfFriend(Names);
console.log(firstTry + ". It is a : " +typeof firstTry);