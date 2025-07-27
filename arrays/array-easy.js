// find second smallest and second largest element in an array //////////////////////

function secondSmallest(arr) {
    let min = Infinity
    let secondMin = Infinity
    for(let i=0; i<arr.length; i++) {
        if(arr[i] < min) {
            secondMin = min
            min = arr[i]
        } else if(arr[i] < secondMin && arr[i] !== min) {
            secondMin = arr[i]
        }
    }
    return secondMin
}

function secondLargest(arr) {
    let max = -Infinity
    let secondMax = -Infinity
    for(let i=0; i< arr.length; i++) {
        if(arr[i] > max) {
            secondMax = max
            max = arr[i]
        } else if(arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i]
        }
    }
    return secondMax
}

function smallest(arr) {
    let min = Infinity
    for(let i=0; i<arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

let arr = [3, 1, 4, 7, 7, 6, 0, 5, 1, 2]
console.log(secondSmallest(arr))
console.log(secondLargest(arr))
console.log(smallest(arr))

///////////////////////////////////////////////////////////////////////////