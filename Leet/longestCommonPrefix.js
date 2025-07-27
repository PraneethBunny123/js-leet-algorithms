// var longestCommonPrefix = function(strs) {
//     if(!strs.length) return ''
//     let longerstCommonPrefix = ''
//     for(let i=0; i< strs[0].length; i++) {
//         let char = strs[0][i]
//         if(!char) return ''
//         if(strs.every(str => str[i] === char)) {
//             longerstCommonPrefix+=char
//         } else break
//     }
//     return longerstCommonPrefix
// };

// console.log(longestCommonPrefix(['flowers', 'flow', 'flight']));


// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) return ""; 
    
//     let prefix = strs[0];
    
//     for (let i = 1; i < strs.length; i++) {
//         while (strs[i].indexOf(prefix) !== 0) {
//             prefix = prefix.slice(0, -1);
//             if (prefix === "") return ""; 
//         }
//     }
    
//     return prefix;
// };

// console.log(longestCommonPrefix(['flowers', 'flow', 'flight']));

let str = 'flow'
console.log(str.indexOf('flower'))
str.slice(0, -1)
console.log(str);
