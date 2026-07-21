// JavaScript quick examples for learning purposes

// 1) Variables and data types
const firstName = 'Alice';
let age = 25;
const isStudent = true;
console.log('Name:', firstName, 'Age:', age, 'Student?', isStudent);

// 2) Functions (declaration and arrow)
function greet(person) {
	return `Hello, ${person}!`;
}
const greetArrow = person => `Hi, ${person}!`;
console.log(greet(firstName));
console.log(greetArrow('Bob'));

// 3) Arrays and common methods
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('numbers:', numbers, 'squares:', squares, 'evens:', evens, 'sum:', sum);

// 4) Objects and destructuring
const user = { id: 1, username: 'coder', profile: { email: 'coder@example.com' } };
const { username, profile: { email } } = user;
console.log('Username:', username, 'Email:', email);

// 4.1) Spread/Rest operators, Optional Chaining, Nullish Coalescing
const updatedUser = { ...user, role: 'admin' }; // Spread operator
const { id, ...restDetails } = updatedUser; // Rest operator
console.log('Updated User:', updatedUser, 'Rest Details:', restDetails);

const userCity = user.profile?.address?.city ?? 'Unknown City'; // Optional Chaining & Nullish Coalescing
console.log('User City:', userCity);

// 5) Asynchronous: promises and async/await (simulated)
function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function demoAsync() {
	console.log('Waiting 500ms...');
	await wait(500);
	console.log('Done waiting.');
}
void demoAsync();

// 6) Error handling
try {
	JSON.parse('invalid json');
} catch (err) {
	console.error('Caught error:', err.message);
}

// 7) DOM (runs in browser) - example commented out
/*
const btn = document.createElement('button');
btn.textContent = 'Click me';
btn.addEventListener('click', () => alert('Button clicked'));
document.body.appendChild(btn);
*/

// 8) Small exercise: fizzbuzz function
function fizzBuzz(n) {
	for (let i = 1; i <= n; i++) {
		let out = '';
		if (i % 3 === 0) out += 'Fizz';
		if (i % 5 === 0) out += 'Buzz';
		console.log(out || i);
	}
}
fizzBuzz(15);

// 9) Modules (Node.js example) - commented
// export function add(a, b) { return a + b }

// 10) Useful tips:
// - Use === for comparison
// - Prefer const, then let
// - Keep functions small and pure when possible

