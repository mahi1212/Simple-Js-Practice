const shop = {
    owner : 'Mahi',
    address : 'Rajnagar',
    type : 'Grosary'
}

const product = {
    name : 'Laptop',
    price : 100000,
    quantity : 15,
    isExpensive : true
}

const makingStringify = JSON.stringify(shop)
console.log(makingStringify)

const productStringify = JSON.stringify(product)
console.log(productStringify)

// Parse
const parseProduct = JSON.parse(productStringify)
console.log(parseProduct.isExpensive)
console.log(parseProduct.name)
