// Practice problems with solutions
// 1) Two Sum - return indices of two numbers summing to target
export function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        // Save the current value so we can find its pair in O(1) time later.
        const complement = target - nums[i];
        if (map.has(complement)) return [map.get(complement), i];
        map.set(nums[i], i);
    }
    return null;
}

// 2) Reverse a string
export function reverseString(s) {
    return s.split('').reverse().join('');
}

// 3) Palindrome check (ignore non-alphanumeric, case-insensitive)
export function isPalindrome(s) {
    const cleaned = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

// 4) Factorial (iterative)
export function factorial(n) {
    if (!Number.isInteger(n) || n < 0) return undefined;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}

// 5) Merge two sorted arrays into one sorted array
export function mergeSortedArrays(a, b) {
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
export function flattenArray(arr) {
    return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flattenArray(cur) : cur), []);
}
