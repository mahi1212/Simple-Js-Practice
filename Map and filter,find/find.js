const students = [
    {name : 'Mahinur Rahman', age : 20, id : 160},
    {name : 'Sumaiya Oishee', age : 21, id : 161},
    {name : 'ASM Rayat', age : 22, id : 162},
    {name : 'Masum', age : 20, id : 167}
]

const chuttoStudent = students.find(student => student.age < 21)
console.log(chuttoStudent)
// Find only return one element if the condition get matced multiple times 
// it returns only the first element that is found

