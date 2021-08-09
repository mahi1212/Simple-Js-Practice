// CelToFar
function CelciousToFar(cel){
    let faren = (cel * (9 / 5) + 32);
    return faren;
}

console.log("Temperature is farenheit is : " + CelciousToFar(50));