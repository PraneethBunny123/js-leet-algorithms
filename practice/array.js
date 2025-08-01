// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

//product of array except self

function productExceptSelf(nums) {
    let res = []
    let start = 1

    for(let i=0; i<nums.length; i++) {
        res.push(start)
        start = start*nums[i]
    }

    let revStart = 1

    for(let i=nums.length-1; i>=0; i--) {
        res[i] = res[i] * revStart
        revStart = revStart*nums[i]
    }
    return res
}

let nums = [4,2,3,4]
// console.log(productExceptSelf(nums))

///////////////////////////////////////////////////////////////////

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// merge sorted arrays

function mergeSortedArrays(...args) {
    let first = m-1;
    let second = n-1
    let i = num1.length-1

    while(second >= 0) {
        let fval = num1[first]
        let sval = num2[second]

        if(fval < sval) {
            num1[i] = sval
            i--
            second--
        } else {
            num1[i] = fval
            i--
            first--
        }
    }
    return num1
}

let num1 = [1,2,3,0,0,0]
let num2 = [2,5,6]
let m = 3
let n = 3

// console.log(mergeSortedArrays(num1, num2, m, m))

///////////////////////////////////////////////////////////

// walmart karat

// You are given an array of student ID and subject pairs. Your task is to:

// Generate all unique pairs of student IDs (e.g., "5,4", "5,3", etc.)

// For each pair, check if the two students have a common course

// Return a mapping where each key is a pair (as a string, e.g., "5,4") and the value is the common subject (or an empty string if none)

function pairUp(arr) {
    const subMap = {}

    for(let [id, subject] of arr) {
        if(!subMap[id]) {
            subMap[id] = []
        }
        subMap[id].push(subject)
    }


    const ids = Object.keys(subMap)
    let res = {}

    for(let i=0; i<ids.length; i++) {
        for(let j=i+1; j<ids.length; j++) {
            const id1 = ids[i]
            const id2 = ids[j]
            const pairUps = `${id1}, ${id2}`

            // console.log(pairUps)

            const subject1 = subMap[id1]
            const subject2 = subMap[id2]

            // console.log(subject1, subject2)
            const common = subject1.filter(sub => subject2.includes(sub))
            console.log(common)

            res[pairUps] = common
        }
    }
    

    return res
}

const arr = [
    ["5", "maths"],
    ["3", "english"],
    ["7", "maths"],
    ["4", "maths"],
    ["3", "physics"],
    ["5", "social"]
];

console.log(pairUp(arr))

