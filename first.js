var mergeTwoLists = function(list1, list2) {
    for(let i=0; i< list1.length; i++) {
        list2.push(list1[i])
    }
    return quick(list2)
    

};

let quick = function(list2) {

    if(list2.length < 2){
        return list2
    }
    let p = list2[list2.length - 1]
    let left = [], right = []
    for(let i=0; i<list2.length-1; i++) {
        if(list2[i] < p) {
            left.push(list2[i])
        }else {
            right.push(list2[i])
        }
    }
    
    return [...quick(left), p, ...quick(right)]

}

console.log(mergeTwoLists([1,2,4], [1,3,4]));
