const student = {
    name: 'Mahinur Rahman',
    id: 160,
    isRich : true,
    major : 'CSE',
    subjects : ['Math', 'Eco', 'Data Structure'],
    bestMate : {
        name : 'Sumaiya Oishee',
        id : 161,
        money : 5000,
        major : 'CSE',
        treatDE : function(expense) {
            this.money = this.money - expense
            return this.money
        },
        checkFokir: function(remaining){
            if(remaining <= 4000){
                console.log('Yes fokir', this.name)
            }
            else{
                console.log('Na fokir nay', this.name)
            }
        }
    }, 
    takeExam: function(){
        console.log(this.name,'is on exam')
    }
}
student.takeExam()
const remaining = student.bestMate.treatDE(1200)
console.log('Money remainng to oishee is:' , remaining)
student.bestMate.checkFokir(remaining)