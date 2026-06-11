// Practice problems with solutions and demo outputs
// 1) Two Sum - return indices of two numbers summing to target
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return null;
}

// 2) Reverse a string
function reverseString(s) {
  return s.split('').reverse().join('');
}

// 3) Palindrome check (ignore non-alphanumeric, case-insensitive)
function isPalindrome(s) {
  const cleaned = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

// 4) Factorial (iterative)
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) return undefined;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

// 5) Merge two sorted arrays into one sorted array
function mergeSortedArrays(a, b) {
  const res = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) res.push(a[i++]); else res.push(b[j++]);
  }
  while (i < a.length) res.push(a[i++]);
  while (j < b.length) res.push(b[j++]);
  return res;
}

// 6) Flatten an array of nested arrays (recursive)
function flattenArray(arr) {
  return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flattenArray(cur) : cur), []);
}

// Demo outputs
console.log('twoSum([2,7,11,15], 9) ->', twoSum([2,7,11,15], 9));
console.log("reverseString('hello') ->", reverseString('hello'));
console.log("isPalindrome('A man, a plan, a canal: Panama') ->", isPalindrome('A man, a plan, a canal: Panama'));
console.log('factorial(6) ->', factorial(6));
console.log('mergeSortedArrays([1,3,5],[2,4,6]) ->', mergeSortedArrays([1,3,5],[2,4,6]));
console.log('flattenArray([1,[2,[3,4],5],6]) ->', flattenArray([1,[2,[3,4],5],6]));

// Export functions for testing or reuse (Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { twoSum, reverseString, isPalindrome, factorial, mergeSortedArrays, flattenArray };
}
