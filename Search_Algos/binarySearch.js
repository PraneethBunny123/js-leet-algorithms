
//Big-O = O(log(n))

// const binarySearch = (ar, t) => {
//     let leftIndex = 0, rightIndex = ar.length -1


//     while(leftIndex <= rightIndex) {
//         let midIndex = Math.floor((leftIndex+rightIndex)/2)
//         if(ar[midIndex] === t) {
//             return midIndex
//         }
//         else if(t > ar[midIndex]) {
//             leftIndex = midIndex + 1
//         }
//         else{
//             rightIndex = midIndex - 1
//         }
//     }
//     return -1

// }

// let arr = [2,4,6,7,9]
// const t = 9

// console.log(binarySearch(arr, t));

///////////////////////////////////////////////////////////////

//Recursive

const binarySearch = (arr, t) => {
    return search(arr, t, 0, arr.length-1)
}

const search = (ar, t, leftIndex, rightIndex) => {

    let midIndex = Math.floor((leftIndex+rightIndex)/2)

    if(t===ar[midIndex]){
        return midIndex
    }
    if(t < arr[midIndex]){
        return search(arr, t, leftIndex, midIndex-1)
    }
    else {
        return search(arr, t, midIndex+1, rightIndex)
    }

}

let arr = [2,4,6,7,9]
const t = 6

console.log(binarySearch(arr, t));
