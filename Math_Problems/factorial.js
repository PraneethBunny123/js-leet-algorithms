
//Big-O = O(n)

// let fact = (n) => {
//     let res = 1, i = 0
//     if(n === 0) {
//         return 1
//     }
//     else {
//         while(i < n) {
//             res *= (i+1)
//             i++
//         }
//     }
//     return res
// }

// let num = 5
// console.log(fact(num))


//////////////////////////////////////////////////////

// let fact = (n) => {
//     let res = 1
//     for(let i=2; i<=n; i++){
//         res *= i
//     }
//     return res
// }


// let num = 5
// console.log(fact(num))


/////////////////////////////////////////////////

//recursive

let fact = (n) => {
    
    if(n===0){
        return 1
    }
    else {
        return n*fact(n-1)
    }
}


let num = 5
console.log(fact(num))
