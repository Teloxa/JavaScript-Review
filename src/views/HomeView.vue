<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ExerciseCard from '../components/ExerciseCard.vue'
import ConsoleChallenge from '../components/ConsoleChallenge.vue'
import FloatingNav from '../components/FloatingNav.vue'
import { twoSum, reverseString, isPalindrome, factorial, mergeSortedArrays, flattenArray } from '../utils/problems'

const currentView = ref('exercises') // 'exercises' or 'challenges'

const examples = ref([
{
    title: 'Two Sum',
    input: 'twoSum([2,7,11,15], 9)',
    output: JSON.stringify(twoSum([2, 7, 11, 15], 9)),
    code: twoSum.toString(),
},
{
    title: 'Reverse String',
    input: "reverseString('hello')",
    output: reverseString('hello'),
    code: reverseString.toString(),
},
{
    title: 'Palindrome',
    input: "isPalindrome('A man, a plan, a canal: Panama')",
    output: String(isPalindrome('A man, a plan, a canal: Panama')),
    code: isPalindrome.toString(),
},
{
    title: 'Factorial',
    input: 'factorial(6)',
    output: String(factorial(6)),
    code: factorial.toString(),
},
{
    title: 'Merge Sorted Arrays',
    input: 'mergeSortedArrays([1,3,5],[2,4,6])',
    output: JSON.stringify(mergeSortedArrays([1, 3, 5], [2, 4, 6])),
    code: mergeSortedArrays.toString(),
},
{
    title: 'Flatten Array',
    input: 'flattenArray([1,[2,[3,4],5],6])',
    output: JSON.stringify(flattenArray([1, [2, [3, 4], 5], 6])),
    code: flattenArray.toString(),
},
])

const challenges = ref([
{
    id: 1,
    title: 'FizzBuzz',
    description: 'Write a function that prints numbers from 1 to 100, but for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for multiples of both print "FizzBuzz".',
    expectedOutput: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n...',
},
{
    id: 2,
    title: 'Array Sum',
    description: 'Write a function that sums all numbers in an array.',
    expectedOutput: 'function arraySum(arr) {\n  return arr.reduce((acc, n) => acc + n, 0);\n}',
},
{
    id: 3,
    title: 'String Reversal',
    description: 'Create a function that reverses a string.',
    expectedOutput: 'function reverseString(str) {\n  return str.split(\'\').reverse().join(\'\');\n}',
},
])
</script>

<template>
<main class="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
    <!-- Exercises View -->
    <template v-if="currentView === 'exercises'">
    <section class="relative mb-8 overflow-hidden rounded-3xl border border-amber-200 bg-white/80 p-8 shadow-lg backdrop-blur-md sm:p-10">
        <div class="pointer-events-none absolute -bottom-20 -right-32 h-64 w-64 rounded-full bg-blue-100/20"></div>

        <div class="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
        <div class="lg:col-span-2">
            <p class="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">JavaScript Review</p>
            <h1 class="mb-4 max-w-xs text-3xl font-bold sm:text-4xl">Exercises in a cleaner web view</h1>
            <p class="mb-4 max-w-lg leading-relaxed text-gray-700">
            Each card shows the exercise, the input used, and the result calculated by JavaScript. The interface is designed for fast reading and better visual contrast.
            </p>

            <div class="mb-6 inline-flex items-center gap-3 rounded-full bg-blue-100/50 p-3">
            <p class="text-sm text-gray-800">View populated from the exercises file to keep logic in one place.</p>
            </div>

            <div class="flex flex-wrap gap-3" aria-label="View features">
            <span class="rounded-full border border-amber-300 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-700">Responsive design</span>
            <span class="rounded-full border border-amber-300 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-700">Hierarchical cards</span>
            <span class="rounded-full border border-amber-300 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-700">Visible output</span>
            </div>
        </div>

        <aside class="rounded-2xl border border-amber-300 bg-white/80 p-6" aria-label="Quick summary">
            <h2 class="mb-4 border-b border-amber-200 pb-3 text-sm font-bold uppercase tracking-wider text-amber-600">Summary</h2>
            <div class="space-y-3">
            <div class="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-4">
                <strong class="text-lg text-gray-900">{{ examples.length }} exercises</strong>
                <p class="mt-1 text-sm text-gray-600">Practice cases organized with direct results on screen.</p>
            </div>
            <div class="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-4">
                <strong class="text-lg text-gray-900">Pure JavaScript</strong>
                <p class="mt-1 text-sm text-gray-600">No external dependencies, so the example is easy to open and study.</p>
            </div>
            <div class="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-4">
                <strong class="text-lg text-gray-900">Fast reading</strong>
                <p class="mt-1 text-sm text-gray-600">The new design separates input and output for immediate comparison.</p>
            </div>
            </div>
        </aside>
        </div>
    </section>

    <section class="mb-8 space-y-6">
        <ExerciseCard
        v-for="(example, index) in examples"
        :key="index"
        :example="example"
        :index="index"
        :id="'exercise-' + index"
        />
    </section>

    <p class="mt-8 text-center text-sm text-gray-600">You can open this view in the browser and see the results calculated in real-time.</p>
    </template>

    <!-- Challenges View -->
    <template v-if="currentView === 'challenges'">
    <section class="relative mb-8 overflow-hidden rounded-3xl border border-blue-200 bg-white/80 p-8 shadow-lg backdrop-blur-md sm:p-10">
        <div class="pointer-events-none absolute -bottom-20 -right-32 h-64 w-64 rounded-full bg-purple-100/20"></div>

        <div class="relative z-10">
        <p class="mb-3 text-xs font-bold uppercase tracking-widest text-purple-600">Interactive Challenges</p>
        <h1 class="mb-4 text-3xl font-bold sm:text-4xl">Code Challenges</h1>
        <p class="mb-6 max-w-2xl leading-relaxed text-gray-700">
            Practice your JavaScript skills by solving interactive challenges. Write your solution and test it against the expected output.
        </p>

        <div class="inline-flex items-center gap-3 rounded-full bg-purple-100/50 p-3">
            <p class="text-sm text-gray-800">{{ challenges.length }} challenges available</p>
        </div>
        </div>
    </section>

    <section class="mb-8 space-y-8">
        <div v-for="challenge in challenges" :key="challenge.id" class="rounded-2xl border border-blue-200 bg-white/80 p-6 shadow-md sm:p-8">
        <div class="mb-6">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">{{ challenge.title }}</h2>
            <p class="text-gray-700">{{ challenge.description }}</p>
        </div>

        <ConsoleChallenge :challengeId="challenge.id" :expectedOutput="challenge.expectedOutput" />
        </div>
    </section>
    </template>

    <FloatingNav :examples="examples" :challenges="challenges" :currentView="currentView" @switchView="(view) => currentView = view" />
</main>
</template>