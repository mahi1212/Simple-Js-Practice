const loadClub = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal')
    .then(res => res.json())
    .then(data => displayClub(data.teams))
}

const displayClub = clubs => {
    console.log(clubs)
    const clubContainer = document.getElementById('club-container')
    clubContainer.textContent = ''
    for(const club of clubs){
        console.log(club)
        const div = document.createElement('div')
        div.innerHTML = `
        <h4>Name : ${club.strTeam} </h4>
        <h4>Country: ${club.strCountry}</h4>
        <h4>League: ${club.strLeague}</h4>
        <h4>Flag : </h4>
        <img width = "200px" src = "${club.strTeamBadge}">
        `
        div.classList.add('club-style')
        clubContainer.appendChild(div)
    }
}