const product1 = {
    name : 'Table',
    height : '16cm',
    weight : '5kg',
    isClean : false,
    price : 3500
}

const keys = Object.keys(product1)
// console.log(keys)

const values = Object.values(product1)
// console.log(values)

const entris = Object.entries(product1)
// console.log(entris ,'It returns an array')

delete product1.isClean
// console.log(product1)

Object.seal(product1)
product1.name = 'Kutta'
// product1.ghash = 'sdasd'
// notun kisu add ba minus hoy na
// but chng hoy
console.log(product1)

Object.freeze(product1)
product1.name = 'Final'
console.log(product1)
product1.ghash = 'fsgrg'
// freeze marle kunu chng hoy na
