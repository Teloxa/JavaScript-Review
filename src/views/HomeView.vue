<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ExerciseCard from '../components/ExerciseCard.vue'
import FloatingNav from '../components/FloatingNav.vue'
import { twoSum, reverseString, isPalindrome, factorial, mergeSortedArrays, flattenArray } from '../utils/problems'

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
</script>

<template>
  <main class="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
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

    <FloatingNav :examples="examples" />

    <p class="mt-8 text-center text-sm text-gray-600">You can open this view in the browser and see the results calculated in real-time.</p>

    <!-- <section class="relative mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-2xl sm:p-10">
      <div class="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl"></div>

      <div class="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-2xl">
          <p class="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">LeetCode Problem Solving</p>
          <h2 class="max-w-xl text-4xl font-black leading-tight sm:text-5xl">LeetCode Problem Solving</h2>
          <p class="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Review exercises, compare outputs, and open the full guide in a new window to keep studying without losing this view.
          </p>
        </div>

        <RouterLink
          to="/leetcode"
          class="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-cyan-300"
        >
          Open LeetCode
        </RouterLink>
      </div>
    </section> -->
  </main>
</template>