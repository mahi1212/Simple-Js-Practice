const myDream = {
    name : 'Sr React Developer',
    salary : 250000,
    isReach : true,
    place = {
        country: 'Canada',
        city: 'Calegry',
        naturalBeauty : true
    },
    tergetSalary : [180000, 240000, 400000, 550000],
    expenceCalculate : function(){
        console.log(this.salary)
    }
}

const checkSalary = myDream.expenceCalculate()
