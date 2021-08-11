const products = [
    { name : 'Watch', price : 2000},
    { name : 'Mouse', price : 400},
    { name : 'Speaker', price : 4700},
    { name : 'Mobile', price : 30000}
]

function filterPrice(products, searchText){
    const showProduct = [];
    for(let product of products){
        if(product.price <= searchText){
            continue;
        }
        showProduct.push(product.name);
    }
    return showProduct;
}

const foundElement = filterPrice(products, 2000)
console.log(foundElement);