function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    const postContainer = document.getElementById('posts')
    for(const post of posts){
        const div = document.createElement('div')
        div.classList.add('post-style')
        div.innerHTML = `
        <h3>New Title : ${post.title}</h3>
        <p> ${post.body}</p>
        `
        postContainer.append(div)
    }
}

loadPost()

function addApost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title : 'My New Post',
            body : 'this is description',
            id: 1
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(res => res.json())
    .then(data => console.log('successful'))
}

addApost()