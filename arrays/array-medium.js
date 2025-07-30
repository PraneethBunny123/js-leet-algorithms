//longest substring length with sum=k 

function longestSubstringSum(arr, target) {
    let map = new Map();
  let sum = 0;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === target) {
      maxLength = i + 1;
    }

    if (map.has(sum - target)) {
      maxLength = Math.max(maxLength, i - map.get(sum - target));
    }

    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }

  return maxLength;
}

console.log(longestSubstringSum([7, 1, 1, 2, 3, 2, 1, 7], 8))