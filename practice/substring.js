// Given a string s, find the length of the longest substring without duplicate characters.

// sliding window

function lengthOfLongestSubstring(s) {
    let longestStr = 0
    let set = new Set()

    let left = 0;
    let right = 0;

    while(right < s.length) {
        let letter = s[right]
        if(!set.has(letter)) {
            set.add(letter)
            longestStr = Math.max(longestStr, set.size)
            right++
        } else {
            set.delete(s[left])
            left++
        }
    }

    return longestStr
}

let s = 'abcdebbskndksjgdnag'
console.log(lengthOfLongestSubstring(s))

