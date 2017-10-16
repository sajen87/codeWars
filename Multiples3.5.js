var numbers = [1, 3, 5, 7, 10, 14, 30]
var newNumbers;


function solution(newNumbers) {
  var newNumbers = numbers.filter(function(i){
    return (i % 3 === 0 || i % 5 === 0)
  })

}
