const numbers = [10, 30, 20, 40]

// Sorting numbers
const sortNumbers = numbers.sort((a, b) => {
    return a - b
})
console.log(sortNumbers)

// Make double
const makeDouble = sortNumbers.map(num => num * 2)
console.log(makeDouble)

const products = [
    {name : 'Bottle' , price :20, height: '20cm'},
    {name : 'Watch' , price :200, height: '10cm'},
    {name : 'Mobile' , price :20000, height: '10cm'},
    {name : 'Table' , price :3500, height: '400cm'}
]
// Find price of every element
const productPrice = products.map(prd => prd.price)
console.log(productPrice)