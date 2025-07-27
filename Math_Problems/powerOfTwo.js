// let powerOfTwo = (n) => {
//     return Number.isInteger(Math.log2(n)) ? '2 power' : 'not'
// }

// let num = 64
// console.log(powerOfTwo(num));


//////////////////////////////////////////////////////////////

//Big-O = O(log(n))

let powerOfTwo = (n) => {
    if(n<1)
        return 'not power'
    else{
        while(n>1){
            if(n%2 !== 0)
                return 'not power'
            n /= 2 //since input is reduced by half the time complexity is log(n)
        }
        return '2 power'
    }
}

let num = 6
console.log(powerOfTwo(num));
