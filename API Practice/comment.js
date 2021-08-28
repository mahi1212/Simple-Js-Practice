const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}

const displayComments = comments => {
    // console.log(comments)
    const commentsContainer = document.getElementById('comments-container')
    comments.forEach(comment => {
        // console.log(comment.email)
        const div = document.createElement('div')
        div.innerHTML = `
        <h3>Email : ${comment.email}</h3>
        <p>Text : ${comment.body.slice(0,50)}</p>
        <button class ="my-btn" onclick="showDetails(${comment.id})">Show Details</button>
        `
        div.classList.add('comment-style')
        commentsContainer.append(div)
    })
}

const showDetails = id => {
    // console.log(id)
    const url =`https://jsonplaceholder.typicode.com/comments/${id}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => foundDetails(data))
}

const foundDetails = data => {
    console.log(data)
    const detailsContainer = document.getElementById('details-container')
    detailsContainer.textContent = ''
    const div = document.createElement('div')
    div.innerHTML = 
    `
    <h3>Name : ${data.name}</h3>
    <h3>ID : ${data.id}</h3>
    <h3>Email : ${data.email}</h3>
    <h3>body : ${data.body}</h3>
    `
    div.classList.add('comment-style')
    detailsContainer.classList.remove('text-center')
    detailsContainer.appendChild(div)
}