function getCount(str) {
    var vowelsCount = 0;
    var vowels = /[a||e||i||o||u]/g
    vowelsCount = str.match(vowels)
    if (vowelsCount === null){
        return 0;
    }

    return console.log(vowelsCount.length);
}

getCount("my pyx");