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

}

let s = "ababcbacadefegdehijhklij"
