const shahrukKhan = {
    name : 'Shahruk Khan',
    age : 65,
    money : 1000,
    shahrukFund : function donateMoney(expense) {
        this.money = this.money - expense
        return this.money
    }
}

const salluVai = {
    name : 'Salman Khan',
    age : 55,
    money : 2000
}

const funnyMaker = {
    name : 'Akshay kumar',
    age: 57,
    money : 1300
} 

const funnyMakerDonation = shahrukKhan.shahrukFund.bind(funnyMaker)
funnyMakerDonation(300)
console.log(funnyMaker.money)


const salluVaiDonation = shahrukKhan.shahrukFund.bind(salluVai)
salluVaiDonation(500)
console.log(salluVai)

shahrukKhan.shahrukFund(200)
console.log(shahrukKhan)