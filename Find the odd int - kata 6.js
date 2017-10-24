function findOdd(A) {
  A.filter(function(currentValue, index, arr){
    return console.log(currentValue, index);
  })

}

findOdd([1,1,1,1,1,1,10,1,1,1,1])