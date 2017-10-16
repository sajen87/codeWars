

function findOdd(A) {

    return A.filter(function(arr){
        console.log( arr%2)
    });
}

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);