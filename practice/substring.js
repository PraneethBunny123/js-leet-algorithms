// Given a string s, find the length of the longest substring without duplicate characters.

// sliding window

// function lengthOfLongestSubstring(s) {
//     let longestStr = 0
//     let set = new Set()

//     let left = 0;
//     let right = 0;

//     while(right < s.length) {
//         let letter = s[right]
//         if(!set.has(letter)) {
//             set.add(letter)
//             longestStr = Math.max(longestStr, set.size)
//             right++
//         } else {
//             set.delete(s[left])
//             left++
//         }
//     }

//     return longestStr
// }

// let s = 'abcdebbskndksjgdnag'
// console.log(lengthOfLongestSubstring(s))

//////////////////////////////////////////////////////////////

// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. For example, the string "ababcc" can be partitioned into ["abab", "cc"], but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.

// partition labels

function partitionLabels(s) {

    let lastIndex = {}
    let res = []

    for(let i=0; i<s.length; i++) {
        lastIndex[s[i]] = i
    }

    let start = 0;
    let end = 0;

    for(let i=0; i<s.length; i++) {
        start = start+1
        end = Math.max(end, lastIndex[s[i]])

        if(i === end) {
            res.push(start)
            start = 0
        }

    }

    return res
}

let s = "eccbbbbdec"

console.log(partitionLabels(s))
