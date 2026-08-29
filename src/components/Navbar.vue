<script setup>
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const isMobileMenuOpen = ref(false)
const route = useRoute()

const solutionLinks = [
  { label: 'Two Sum', to: { path: '/', hash: '#exercise-0' } },
  { label: 'Reverse String', to: { path: '/', hash: '#exercise-1' } },
  { label: 'Palindrome', to: { path: '/', hash: '#exercise-2' } },
  { label: 'Factorial', to: { path: '/', hash: '#exercise-3' } },
  { label: 'Merge Sorted Arrays', to: { path: '/', hash: '#exercise-4' } },
  { label: 'Flatten Array', to: { path: '/', hash: '#exercise-5' } },
]

const isActive = (targetPath) => route.path === targetPath
const mobileMenuLabel = computed(() => (isMobileMenuOpen.value ? 'Close menu' : 'Open menu'))

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/70 bg-white/80 backdrop-blur-xl">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
      <RouterLink to="/" class="group flex items-center gap-3" @click="closeMobileMenu">
        <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/20 transition-transform group-hover:-translate-y-0.5">
          JS
        </span>
        <div>
          <p class="text-sm font-semibold text-slate-500">JavaScript Review</p>
          <p class="text-base font-bold text-slate-950">Navigation navabar</p>
        </div>
      </RouterLink>

      <nav class="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
        <div class="group relative">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-950/20"
          >
            Soluctions
            <span aria-hidden="true">▾</span>
          </button>

          <div class="invisible absolute left-0 top-full pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
            <div class="w-64 overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-950/10">
              <RouterLink
                v-for="link in solutionLinks"
                :key="link.label"
                :to="link.to"
                class="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-amber-50 hover:text-slate-950"
              >
                {{ link.label }}
              </RouterLink>
            </div>
          </div>
        </div>

        <RouterLink
          to="/leetcode"
          class="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition"
          :class="isActive('/leetcode') ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'"
        >
          LeetCode
        </RouterLink>
      </nav>

      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm lg:hidden"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        :aria-expanded="isMobileMenuOpen"
        aria-controls="mobile-navigation"
      >
        <span>{{ mobileMenuLabel }}</span>
        <span aria-hidden="true">☰</span>
      </button>
    </div>

    <div v-show="isMobileMenuOpen" id="mobile-navigation" class="border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-xl lg:hidden">
      <div class="mx-auto flex max-w-6xl flex-col gap-4">
        <div class="rounded-3xl border border-slate-200 bg-slate-50 p-3">
          <p class="px-3 pb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Solutions</p>
          <div class="grid gap-2">
            <RouterLink
              v-for="link in solutionLinks"
              :key="link.label"
              :to="link.to"
              class="rounded-2xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-950"
              @click="closeMobileMenu"
            >
              {{ link.label }}
            </RouterLink>
          </div>
        </div>

        <RouterLink
          to="/leetcode"
          class="rounded-3xl border border-slate-200 bg-slate-950 px-4 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          @click="closeMobileMenu"
        >
          LeetCode
        </RouterLink>
      </div>
    </div>
  </header>
</template>