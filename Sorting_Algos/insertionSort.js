
//Big-O = O(n^2)

function insertionSort(arr) {

    for(let i=1; i<arr.length; i++) {
        let nti = arr[i]
        let j = i-1
        while (j>=0 && arr[j] > nti) {
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = nti
    }
    return arr

}


let arr = [-2, -6, 6, 2, 0]
console.log(insertionSort(arr));
