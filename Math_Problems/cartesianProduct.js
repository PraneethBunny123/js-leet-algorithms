
//Big O = O(mn), where m and n are lengths of arrays

function cartesianProduct(arr1, arr2) {
    let newArr = []
    for(let i of arr1) {
        for(let j of arr2){
            newArr.push([i, j])
        }
    }
    return newArr
}


let arr1 = [1,2], arr2 = [3,4,5]
console.log(cartesianProduct(arr1, arr2));

