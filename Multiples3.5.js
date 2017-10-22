function solution(...number) {

  let threeFive = number.filter(function (n) {

    if (n % 3 === 0 || n % 5 === 0) {

      return n;

    }

  }).reduce(function (m, sum) {
    return m + sum;
  })

  return threeFive
}

console.log(solution(1,2,3,4,5,6,7,8,9))