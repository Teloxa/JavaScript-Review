<script setup>
import { ref } from 'vue';
import ExerciseCard from './components/ExerciseCard.vue';
import ConsoleChallenge from './components/ConsoleChallenge.vue';
import FloatingNav from './components/FloatingNav.vue';
import { twoSum, reverseString, isPalindrome, factorial, mergeSortedArrays, flattenArray } from './utils/problems';

const currentView = ref('exercises'); // 'exercises' or 'challenges'

const examples = ref([
    {
        title: 'Two Sum',
        input: 'twoSum([2,7,11,15], 9)',
        output: JSON.stringify(twoSum([2, 7, 11, 15], 9)),
        code: twoSum.toString()
    },
    {
        title: 'Reverse String',
        input: "reverseString('hello')",
        output: reverseString('hello'),
        code: reverseString.toString()
    },
    {
        title: 'Palindrome',
        input: "isPalindrome('A man, a plan, a canal: Panama')",
        output: String(isPalindrome('A man, a plan, a canal: Panama')),
        code: isPalindrome.toString()
    },
    {
        title: 'Factorial',
        input: 'factorial(6)',
        output: String(factorial(6)),
        code: factorial.toString()
    },
    {
        title: 'Merge Sorted Arrays',
        input: 'mergeSortedArrays([1,3,5],[2,4,6])',
        output: JSON.stringify(mergeSortedArrays([1, 3, 5], [2, 4, 6])),
        code: mergeSortedArrays.toString()
    },
    {
        title: 'Flatten Array',
        input: 'flattenArray([1,[2,[3,4],5],6])',
        output: JSON.stringify(flattenArray([1, [2, [3, 4], 5], 6])),
        code: flattenArray.toString()
    }
]);

const challenges = ref([
    {
        id: 1,
        title: 'FizzBuzz',
        description: 'Write a function that prints numbers from 1 to 100, but for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for multiples of both print "FizzBuzz".',
        expectedOutput: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n...'
    },
    {
        id: 2,
        title: 'Array Sum',
        description: 'Write a function that sums all numbers in an array.',
        expectedOutput: 'function arraySum(arr) {\n  return arr.reduce((acc, n) => acc + n, 0);\n}'
    },
    {
        id: 3,
        title: 'String Reversal',
        description: 'Create a function that reverses a string.',
        expectedOutput: 'function reverseString(str) {\n  return str.split(\'\').reverse().join(\'\');\n}'
    }
]);
</script>

<template>
    <main class="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <!-- Exercises View -->
        <template v-if="currentView === 'exercises'">
            <section class="relative overflow-hidden bg-white/80 border border-amber-200 rounded-3xl p-8 sm:p-10 shadow-lg backdrop-blur-md mb-8">
                <div class="absolute -bottom-20 -right-32 w-64 h-64 bg-blue-100/20 rounded-full pointer-events-none"></div>
                
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
                    <div class="lg:col-span-2">
                        <p class="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">JavaScript Review</p>
                        <h1 class="text-3xl sm:text-4xl font-bold mb-4 max-w-xs">Exercises in a cleaner web view</h1>
                        <p class="text-gray-700 mb-4 max-w-lg leading-relaxed">Each card shows the exercise, the input used, and the result calculated by JavaScript. The interface is designed for fast reading and better visual contrast.</p>
                        
                        <div class="inline-flex items-center gap-3 p-3 rounded-full bg-blue-100/50 mb-6">
                            <p class="text-sm text-gray-800">View populated from the exercises file to keep logic in one place.</p>
                        </div>
                        
                        <div class="flex flex-wrap gap-3" aria-label="View features">
                            <span class="px-4 py-2 rounded-full bg-white/70 border border-amber-300 text-gray-700 text-sm font-semibold">Responsive design</span>
                            <span class="px-4 py-2 rounded-full bg-white/70 border border-amber-300 text-gray-700 text-sm font-semibold">Hierarchical cards</span>
                            <span class="px-4 py-2 rounded-full bg-white/70 border border-amber-300 text-gray-700 text-sm font-semibold">Visible output</span>
                        </div>
                    </div>
                    
                    <aside class="bg-white/80 border border-amber-300 rounded-2xl p-6" aria-label="Quick summary">
                        <h2 class="text-sm font-bold uppercase tracking-wider text-amber-600 mb-4 pb-3 border-b border-amber-200">Summary</h2>
                        <div class="space-y-3">
                            <div class="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-200">
                                <strong class="text-lg text-gray-900">{{ examples.length }} exercises</strong>
                                <p class="text-sm text-gray-600 mt-1">Practice cases organized with direct results on screen.</p>
                            </div>
                            <div class="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-200">
                                <strong class="text-lg text-gray-900">Pure JavaScript</strong>
                                <p class="text-sm text-gray-600 mt-1">No external dependencies, so the example is easy to open and study.</p>
                            </div>
                            <div class="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-200">
                                <strong class="text-lg text-gray-900">Fast reading</strong>
                                <p class="text-sm text-gray-600 mt-1">The new design separates input and output for immediate comparison.</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <section class="space-y-6 mb-8">
                <ExerciseCard 
                    v-for="(example, index) in examples" 
                    :key="index" 
                    :example="example" 
                    :index="index" 
                    :id="'exercise-' + index"
                />
            </section>

            <p class="text-center text-gray-600 text-sm mt-8">You can open this view in the browser and see the results calculated in real-time.</p>
        </template>

        <!-- Challenges View -->
        <template v-if="currentView === 'challenges'">
            <section class="relative overflow-hidden bg-white/80 border border-blue-200 rounded-3xl p-8 sm:p-10 shadow-lg backdrop-blur-md mb-8">
                <div class="absolute -bottom-20 -right-32 w-64 h-64 bg-purple-100/20 rounded-full pointer-events-none"></div>
                
                <div class="relative z-10">
                    <p class="text-xs font-bold uppercase tracking-widest text-purple-600 mb-3">Interactive Challenges</p>
                    <h1 class="text-3xl sm:text-4xl font-bold mb-4">Code Challenges</h1>
                    <p class="text-gray-700 mb-6 max-w-2xl leading-relaxed">Practice your JavaScript skills by solving interactive challenges. Write your solution and test it against the expected output.</p>
                    
                    <div class="inline-flex items-center gap-3 p-3 rounded-full bg-purple-100/50">
                        <p class="text-sm text-gray-800">{{ challenges.length }} challenges available</p>
                    </div>
                </div>
            </section>

            <section class="space-y-8 mb-8">
                <div v-for="challenge in challenges" :key="challenge.id" class="bg-white/80 border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-md">
                    <div class="mb-6">
                        <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ challenge.title }}</h2>
                        <p class="text-gray-700 mb-4">{{ challenge.description }}</p>
                    </div>
                    
                    <ConsoleChallenge 
                        :challengeId="challenge.id"
                        :expectedOutput="challenge.expectedOutput"
                    />
                </div>
            </section>
        </template>

        <FloatingNav 
            :examples="examples" 
            :challenges="challenges"
            :currentView="currentView"
            @switchView="(view) => currentView = view"
        />
    </main>
</template>
