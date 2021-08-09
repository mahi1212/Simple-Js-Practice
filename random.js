

function generateRandomNumber(){
    return Math.floor(Math.random() * 2);
}


for(let i =0; i < 10; i++){
    console.log(generateRandomNumber());
}