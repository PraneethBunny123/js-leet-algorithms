
//Big-O = O(n^2)

function bubbleSort (arr) {

    let swapped
    do{
        swapped = false
        for(let i=0; i<arr.length-1; i++) {
            if(arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                swapped = true
            }
        }
    }
    while (swapped)
    return arr
    

}


let arr = [-2, -6, 6, 2, 0]
console.log(bubbleSort(arr))