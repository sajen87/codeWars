function sortArray(array) {
  var findOdd = array.map(function(x) {
    return x % 0 !== 0;
  })
  console.log(findOdd)
  }



sortArray([5, 3, 2, 8, 1, 4])

