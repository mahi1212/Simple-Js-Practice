function largestOfFour(arr) {
    let result = [];
    for(let i = 0; i< arr.length; i++){
        let largest = arr[i][0];
        for(let j = 1; j < arr.length; j++){
            if(arr[i][j] > largest){
              largest = arr[i][j];
            }
        }
      result[i] = largest; 
    }
    return console.log(result);;
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
