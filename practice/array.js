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