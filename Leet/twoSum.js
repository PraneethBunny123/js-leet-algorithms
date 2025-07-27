var twoSum = function(nums, target) {
    let mp = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        
        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }
        
        mp.set(nums[i], i)
    }
};

// var twoSum = function(nums, target) {
//     for(let i=0; i<nums.length; i++){
//         let element = nums[i]
//         let j = i+1
//         for(let j=i+1; j<nums.length; j++){
//             if(element+nums[j] === target){
//                 return [i,j]
//             }
//         }
//     }
// };

let nums = [1, 2, 3, 4, 5]
let target = 3


console.log(twoSum(nums, target));
