const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddy(data))
}

const displayBuddy = (obj) =>{
    console.log(obj)
    const buddies = obj.results
    const div = document.getElementById('buddy')
    for(const buddy of buddies){
        const p = document.createElement('p')
        p.innerText = `Name : ${buddy.name.first} ${buddy.name.last}
        Email : ${buddy.email}`
        div.append(p)
    }
}
