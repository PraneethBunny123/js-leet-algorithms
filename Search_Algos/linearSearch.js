//Big-O = O(log(n))

const linearSearch = (ar, t) => {
    for(let i of ar){
        if(i === t){
            return ar.indexOf(i)
        }
    }
    return -1
    
}

let arr = [2,3,6,4,9]
const t = 9
console.log(linearSearch(arr, t));
