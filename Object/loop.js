const student = {
    name : 'Mahi',
    id : 160, 
    sec : 'D',
    versityName : 'LU'
}

// to get key and value FOR-IN used to loop through in Object
for(const prop in student){
    console.log(prop, student[prop])
}
for(const key in student){
    console.log(key, student[key])
}
// to get keys
for(const prop in student){
    console.log(prop)
}
// to get value
for(const value in student){
    console.log(student[value])
}

// Keys also used to get key but it return an array -- loop for of in Object.keys()
const keyOfStudent = Object.keys(student)
console.log(keyOfStudent)
for(const key of keyOfStudent){
    console.log(key)
}