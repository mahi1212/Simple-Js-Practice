// function showNameEmail(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displayDetails(data))
// }

// function displayDetails(data){
//     const UL = document.getElementById('list')
//     for(const user of data){
//         const li = document.createElement('li')
//         li.innerText = `Name ${user.name} 
//         Email : ${user.email}`
//         UL.append(li)
//     }
// }

function showNameEmail(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => findDetails(data))
}

function findDetails(data){
    const ul = document.getElementById('list')
    for(const users of data){
        const li = document.createElement('li')
        li.innerText = `Name is : ${users.name}
        email is : ${users.email}`
        ul.append(li)
    }
}