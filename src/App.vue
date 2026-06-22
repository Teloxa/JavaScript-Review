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
    <main class="page">
        <section class="hero">
            <div class="hero-layout">
                <div>
                    <p class="eyebrow">JavaScript Review</p>
                    <h1>Exercises in a cleaner web view</h1>
                    <p class="subtitle">Each card shows the exercise, the input used, and the result calculated by
                        JavaScript. The interface is designed for fast reading and better visual contrast.</p>
                    <p class="hero-note">View populated from the exercises file to keep logic in one place.</p>
                    <div class="chips" aria-label="View features">
                        <span class="chip">Responsive design</span>
                        <span class="chip">Hierarchical cards</span>
                        <span class="chip">Visible output</span>
                    </div>
                </div>
                <aside class="hero-panel" aria-label="Quick summary">
                    <h2>Summary</h2>
                    <div class="stack">
                        <div class="stat">
                            <strong>{{ examples.length }} exercises</strong>
                            <span>Practice cases organized with direct results on screen.</span>
                        </div>
                        <div class="stat">
                            <strong>Pure JavaScript</strong>
                            <span>No external dependencies, so the example is easy to open and study.</span>
                        </div>
                        <div class="stat">
                            <strong>Fast reading</strong>
                            <span>The new design separates input and output for immediate comparison.</span>
                        </div>
                    </div>
                </aside>
            </div>
        </section>

        <section class="grid">
            <ExerciseCard 
                v-for="(example, index) in examples" 
                :key="index" 
                :example="example" 
                :index="index" 
                :id="'exercise-' + index"
            />
        </section>

        <FloatingNav :examples="examples" />

        <p class="footer-note">You can open this view in the browser and see the results calculated in real-time.</p>
    </main>
</template>
