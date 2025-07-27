// function climbingStairCase (n) {
//     if(n<2) {
//         return 1
//     }else {
//         return climbingStairCase(n-1)+climbingStairCase(n-2)
//     }
// }

// let steps = 5
// console.log(climbingStairCase(steps));

////////////////////////////////////////////////////////////////////


function climbingStairCase (n) {
    let arr = [1, 2]
    for(let i=2; i<n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }

    return arr[n-1]
}

let steps = 5
console.log(climbingStairCase(steps));
