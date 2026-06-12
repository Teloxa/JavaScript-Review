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
    // Construimos una lista de ejemplos para separar la lógica de los ejercicios de la vista.
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

    // La plantilla HTML usa clases semánticas para que el CSS pueda dar una presentación más clara.
    app.innerHTML = `
      <section class="hero">
        <div class="hero-layout">
          <div>
            <p class="eyebrow">JavaScript Review</p>
            <h1>Ejercicios en una vista web más limpia</h1>
            <p class="subtitle">Cada tarjeta muestra el ejercicio, la entrada usada y el resultado calculado por JavaScript. La interfaz está pensada para leer rápido y con mejor contraste visual.</p>
            <p class="hero-note">Vista alimentada desde el archivo de ejercicios para mantener la lógica en un solo lugar.</p>
            <div class="chips" aria-label="Características de la vista">
              <span class="chip">Diseño responsivo</span>
              <span class="chip">Tarjetas con jerarquía</span>
              <span class="chip">Salida visible</span>
            </div>
          </div>
          <aside class="hero-panel" aria-label="Resumen rápido">
            <h2>Resumen</h2>
            <div class="stack">
              <div class="stat">
                <strong>${examples.length} ejercicios</strong>
                <span>Casos de práctica organizados con resultado directo en pantalla.</span>
              </div>
              <div class="stat">
                <strong>JavaScript puro</strong>
                <span>Sin dependencias externas, para que el ejemplo sea fácil de abrir y estudiar.</span>
              </div>
              <div class="stat">
                <strong>Lectura rápida</strong>
                <span>El nuevo diseño separa entrada y salida para que la comparación sea inmediata.</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section class="grid">
        ${examples.map((example, index) => `
          <article class="card">
            <div class="card-header">
              <h2>${example.title}</h2>
              <span class="card-badge">${String(index + 1).padStart(2, '0')}</span>
            </div>
            <p><strong>Entrada</strong><code>${example.input}</code></p>
            <p class="result"><strong>Salida</strong><code>${example.output}</code></p>
          </article>
        `).join('')}
      </section>
      <p class="footer-note">Puedes abrir esta vista en el navegador y ver los resultados calculados al momento.</p>
    `;
  });
}

// Export functions for testing or reuse (Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { twoSum, reverseString, isPalindrome, factorial, mergeSortedArrays, flattenArray };
}
