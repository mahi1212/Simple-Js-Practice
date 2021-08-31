const order1 = {
    weight : 100,
    price : '400$'
}
const order2 = {
    price : '400$',
    weight : 100
}

const compareObject = (first, sec) =>{
    if(Object.keys(order1).length !== Object.keys(order2).length){
        return false
    }
    for(const prop in first){
        if(first[prop] !== sec[prop]){
            return false
        }
        else{
            return true
        }
    }
}
let showOutput = compareObject(order1, order2)
console.log(showOutput)
