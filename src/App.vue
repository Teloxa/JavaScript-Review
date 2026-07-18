<script setup>
import { ref } from 'vue';
import ExerciseCard from './components/ExerciseCard.vue';
import FloatingNav from './components/FloatingNav.vue';
import { twoSum, reverseString, isPalindrome, factorial, mergeSortedArrays, flattenArray } from './utils/problems';

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
</script>

<template>
    <main class="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
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

        <FloatingNav :examples="examples" />

        <p class="text-center text-gray-600 text-sm mt-8">You can open this view in the browser and see the results calculated in real-time.</p>

        <section class="relative overflow-hidden mt-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 sm:p-10 text-white shadow-2xl">
            <div class="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl pointer-events-none"></div>

            <div class="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div class="max-w-2xl">
                    <p class="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300 mb-4">LeetCode Problem Solving</p>
                    <h2 class="text-4xl sm:text-5xl font-black leading-tight max-w-xl">LeetCode Problem Solving</h2>
                    <p class="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
                        Review exercises, compare outputs, and open the full guide in a new window to keep studying without losing this view.
                    </p>
                </div>

                <a
                    href="https://leetcode.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                    Open LeetCode
                    
                </a>
            </div>
        </section>
    </main>
</template>
