const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = obj =>{
    const quoteContainer = document.getElementById('quote')
    quoteContainer.innerText = obj.quote
    
}