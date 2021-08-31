const billgates = {
    name : 'Bill',
    age: 45,
    money: 4500,
    helpPoor : function(exp, tax){
        this.money = this.money - exp - tax
        return this.money
    }
}

const jeffBose = {
    name : 'Jeff',
    age : 55,
    money : 5500
}

// call() er jonno  comma use kore likhte hoy
const jeffDonation = billgates.helpPoor.call(jeffBose, 500, 0)
console.log(jeffDonation)

// apply() er jonno array er maje comma use kore likhte hoy
const usingAppy = billgates.helpPoor.apply(jeffBose, [300, 30])
console.log(usingAppy)
