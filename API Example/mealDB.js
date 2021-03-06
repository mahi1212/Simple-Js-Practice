const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    searchField.value = ''
    // console.log(searchText)

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = ''
    for(const meal of meals){
        // console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card" onclick="loadMealDetails(${meal.idMeal})">
            <img src="${meal.strMealThumb}" class="w-50 mx-auto card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
        </div>
        `
        searchResult.append(div)
    }
}

const loadMealDetails = mealId => {
    // console.log(mealId)
    // https:// dite vule jai bar bar 
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
    console.log(meal)
    const mealDetails = document.getElementById('meal-details')
    mealDetails.textContent = ''
    const div = document.createElement('div')
    div.classList.add('card')

    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Watch Youtube</a>
    </div>
    `
    mealDetails.append(div)
}

