
//Big-O = O(n)

// let fibonacci = (n) => {
//     let a = 0, b = 1, c = 0, arr = []
//     for(i=0; i<n; i++) {
//         c = a+b
//         arr.push(a)
//         a = b
//         b = c
//     }
//     return arr

// }

// let num = 7
// console.log(fibonacci(num))


/////////////////////////////////////////////////

let fibonacci = (n) => {
    let arr = [0, 1]
    if(n===1)
        return 0
    else{
        for(i=2; i<n; i++){
            arr[i] = arr[i-1] + arr[i-2]
        }
        return arr
    }
}

let num = 7
console.log(fibonacci(num))

////////////////////////////////////////////////

//recursive

// let recursiveFibonacci = (n) => {
//     if(n<2){
//         return n
//     }
//     else {
//         return recursiveFibonacci(n-1)+recursiveFibonacci(n-2)
//     }

// }

// let num = 7
// console.log(recursiveFibonacci(num))