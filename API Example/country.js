const loadCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const displayCountry = countries => {
    // console.log(countries)
    const section = document.getElementById('country')
    
    countries.forEach(country => {
        const div = document.createElement('div')
        div.innerHTML = `<h2>${country.name}</h2>
        <p>Capital : ${country.capital}</p>
        <button onclick ="callByName('${country.name}')">Details</button>
        `
        div.classList.add('style')
        section.append(div)
    })
}

const callByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    console.log(country)
    const countryDetails = document.getElementById('country-details')
    countryDetails.innerHTML = `
    <h2>${country.name}</h2>
    <p>Population : ${country.population}</p>
    <img width = "300px" src="${country.flag}">
    `
}

    // Making for of loop 
    // for(const country of countries){
    //     const heading = document.createElement('h3')
    //     heading.innerText = country.name
    //     const p = document.createElement('p')
    //     p.innerText = country.capital
    //     div.append(heading)
    //     div.append(p)
    //     // const li = document.createElement('li')
    //     // li.innerText = country.name
    //     // const name = li.innerText
    
    //     // if(name[0] == 'B'){ to specify starting
    //     //     div.append(li)
    //     // }
    //     // div.append(li)
    // }
