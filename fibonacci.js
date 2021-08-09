// Create function for fibonacci series with ERROR Handling
function myFiboSeries(num){
    if(typeof num != 'number'){
        return 'Please enter a number';
    }
    
    if(num < 2 ){
        return 'Please enter a positive number grater than two';
    }

    let fib = [0, 1];
    for(let i = 2; i < num; i++){
       fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

let lastNumber = 10;
console.log("Last number of the series: " + lastNumber);
let series = myFiboSeries(lastNumber);
console.log(series);
