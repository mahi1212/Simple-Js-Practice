const searchClub = () => {
    const searchInput = document.getElementById('search-input')
    const searchValue = searchInput.value

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchValue}`
    if(searchValue != 0){
        fetch(url)
        .then(res => res.json())
        .then(data => displayClub(data.teams))
    }
    else{
        const clubContainer = document.getElementById('club-container')
        const div = document.createElement('div')
        div.innerHTML =
        `
        <h4>Team Name : Not found </h4>
        `
        clubContainer.append(div)
    }
    
}

const displayClub = clubs => {
    console.log(clubs)
    const clubContainer = document.getElementById('club-container')
    clubContainer.textContent = ""
    for(const club of clubs){
        
        const div = document.createElement('div')
        div.innerHTML =
        `
        <h4>Team Name : ${club.strTeam}</h4>
        <h4>Country : ${club.strCountry}</h4>
        <h4>Badge : </h4>
        <img width="150px" src = "${club.strTeamBadge}">
        <h4>Type : ${club.strSport}</h4>`

        div.classList.add('club-style')
        clubContainer.append(div)
    }
}