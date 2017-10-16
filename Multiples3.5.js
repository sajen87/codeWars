
function solution(number) {

  if (number % 3 === 0) {

    return console.log("własciwa liczba " + number)
  }
  else if (number % 5 === 0) {
    return console.log("To tez jest liczba")
  }
  else {
    console.log("to niewlasciwa liczba")
  }
}

solution(3,10)