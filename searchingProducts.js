const products = [
    { name : 'Samsung s20', price : 20000},
    { name : 'Iphone 12mini', price : 120000},
    { name : 'Iphone X', price : 110000},
    { name : 'Dell laptop', price : 40000},
    { name : 'Asus laptop', price : 60000},
    { name : 'Mouse', price : 500}
]

function findProduct(products, searchString){
    const matched = [];
    for(let product of products){
        if(product.name.indexOf(searchString) != -1){
            matched.push(product.name);
        }
    }
    return matched;
}

const foundResult = findProduct(products, 'Iphone');
console.log(foundResult);