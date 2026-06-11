// Practice problems with solutions and demo outputs
// 1) Two Sum - return indices of two numbers summing to target
function twoSum(nums, target) {
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

// Simple browser view for the same exercises
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const examples = [
      {
        title: 'Two Sum',
        input: 'twoSum([2,7,11,15], 9)',
        output: JSON.stringify(twoSum([2,7,11,15], 9))
      },
      {
        title: 'Reverse String',
        input: "reverseString('hello')",
        output: reverseString('hello')
      },
      {
        title: 'Palindrome',
        input: "isPalindrome('A man, a plan, a canal: Panama')",
        output: String(isPalindrome('A man, a plan, a canal: Panama'))
      },
      {
        title: 'Factorial',
        input: 'factorial(6)',
        output: String(factorial(6))
      },
      {
        title: 'Merge Sorted Arrays',
        input: 'mergeSortedArrays([1,3,5],[2,4,6])',
        output: JSON.stringify(mergeSortedArrays([1,3,5],[2,4,6]))
      },
      {
        title: 'Flatten Array',
        input: 'flattenArray([1,[2,[3,4],5],6])',
        output: JSON.stringify(flattenArray([1,[2,[3,4],5],6]))
      }
    ];

    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
      <section class="hero">
        <p class="eyebrow">JavaScript Review</p>
        <h1>Ejercicios en vista web sencilla</h1>
        <p class="subtitle">Cada tarjeta muestra el ejercicio, la entrada usada y el resultado calculado por JavaScript.</p>
      </section>
      <section class="grid">
        ${examples.map(example => `
          <article class="card">
            <h2>${example.title}</h2>
            <p><strong>Entrada:</strong> ${example.input}</p>
            <p><strong>Salida:</strong> ${example.output}</p>
          </article>
        `).join('')}
      </section>
    `;
  });
}

// Export functions for testing or reuse (Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { twoSum, reverseString, isPalindrome, factorial, mergeSortedArrays, flattenArray };
}
