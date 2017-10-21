const numbers = [1, 3, 5, 7, 10, 14, 30]

const threeFive = numbers.filter(function(n){

    if(n % 3 === 0 || n % 5 === 0){
      return n;
    }
    else {
      console.log("zla liczba")
    }
  })


const sum = threeFive.reduce(function (n, sum) {

    return n + sum


})

console.log(sum)



// function solution(...number) {
//
//   const threeFive = number.filter(function (n) {
//     if (n % 3 === 0 || n % 5 === 0) {
//       return n;
//     }
//
//   })
//
//   const sum = threeFive.reduce(function (n, sum) {
//
//     return n + sum
//
//
//   })
// }
//
// solution(1, 3, 5, 7, 10, 14, 30)
//
