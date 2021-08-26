const numbers = [10, 20, 34, 45, 656, 45]

const findBigNum = numbers.filter(num => num > 20)
console.log(`Found number is : ${findBigNum}`)

const students = [
    {name : 'Mahinur Rahman', age : 20, id : 160},
    {name : 'Sumaiya Oishee', age : 21, id : 161},
    {name : 'ASM Rayat', age : 22, id : 162},
    {name : 'Masum', age : 20, id : 167}
]

const webDeveloper = students.filter(student => student.id < 163)
console.log(webDeveloper)