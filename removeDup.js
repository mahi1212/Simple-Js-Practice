const names = ['one', 'two', 'three', 'one', 'four', 'two'];

function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        let element = names[i];
        if(unique.indexOf(element) == -1){
            unique.push(element);
            console.log(element);
        }
    }
    return unique;
}

let myUniqeArray = removeDuplicate(names);
console.log(myUniqeArray);