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
console.log(productExceptSelf(nums))

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

console.log(mergeSortedArrays(num1, num2, m, m))