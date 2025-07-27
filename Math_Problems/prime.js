
//Big-O = O(n)

// let prime = (n)  => {
//     let count = 0
//     for(let i=1; i<=n; i++){
//         if(n%i === 0){
//             count += 1
            
//         }
//     }
//     return count === 2 ? 'prime' : 'not'
// }

// let num = 127
// console.log(prime(num));

////////////////////////////////////////////////////

//Big-O = O(sqrt(n))

let prime = (n)  => {
    let count = 0
    for(let i=1; i<= Math.sqrt(n); i++){
        if(n%i === 0){
            count += 1
            
        }
    }
    return count === 1 ? 'prime' : 'not'
}

let num = 12
console.log(prime(num));
