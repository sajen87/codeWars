let arr = solution()

let sum = arr.reduce(function (n, sum) {

  return n + sum

})

function solution(...number) {

  return number.filter(function (n) {

    if (n % 3 === 0 || n % 5 === 0) {
      return n
    }
  })
}





console.log(sum)

console.log(solution(1, 3, 5, 7, 10, 14, 30))
//
