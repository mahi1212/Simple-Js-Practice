const products = [
    'Dell laptop',
    'Dell processor core i9',
    'Apple phone',
    'Samsung G12 processor',
    'LG supernova i77',
    'Samsung s20 ultra Phone',
    'Asus next generation turmox',
    'C11 Realme Phone'
]

let searchItem = 'Samsung'
const result = []

// using includes()
for(const product of products){
    if(product.toLowerCase().includes(searchItem.toLowerCase())){
        result.push(product);
    }
}
console.log(result)

// use of startswith
const searchItem2 = 'dell'
const foundFirst = []
for(let product of products){
    if(product.toLowerCase().startsWith(searchItem2.toLowerCase())){
        foundFirst.push(product)
    }
}
console.log(foundFirst)


// use of indexOf()
// const result = []
// for(let product of products){
//     if(product.toLowerCase().indexOf(searchItem.toLocaleLowerCase()) != -1){
//         result.push(product)
//     }
// }

// console.log(result)