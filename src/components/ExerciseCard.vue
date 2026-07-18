<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  example: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
});

const formattedIndex = computed(() => String(props.index + 1).padStart(2, '0'));
const copied = ref(false);

const copyTextFallback = (text) => {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return true;
  } catch (e) {
    document.body.removeChild(textarea);
    return false;
  }
};

const copyCode = async () => {
  const text = props.example.code || '';
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const ok = copyTextFallback(text);
      if (!ok) throw new Error('Fallback copy failed');
    }
    copied.value = true;
    setTimeout(() => { copied.value = false; }, 2000);
  } catch (err) {
    console.error('Failed to copy code: ', err);
  }
};
</script>

<template>
  <article class="relative overflow-hidden bg-white border border-amber-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-amber-500"></div>
    
    <div class="flex items-center justify-between gap-3 mb-4">
      <h2 class="text-xl font-bold text-gray-900">{{ example.title }}</h2>
      <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">{{ formattedIndex }}</span>
    </div>
    
    <div class="space-y-3 mb-6">
      <p class="text-sm">
        <strong class="text-amber-600">Input</strong> 
        <code class="block mt-2 p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 overflow-x-auto text-xs whitespace-pre-wrap break-words">{{ example.input }}</code>
      </p>
      
      <p class="text-sm bg-gradient-to-br from-amber-50 to-white p-3 rounded-lg">
        <strong class="text-amber-600">Output</strong> 
        <code class="block mt-2 p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 overflow-x-auto text-xs whitespace-pre-wrap break-words">{{ example.output }}</code>
      </p>
    </div>
    
    <details class="group border-t border-amber-200 pt-4">
      <summary class="cursor-pointer font-semibold text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-2">
        <span class="inline-block transition-transform group-open:rotate-90">></span>
        View Code
      </summary>
      <div class="relative mt-4 rounded-lg bg-gray-900 p-4">
        <button 
          class="absolute top-3 right-3 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
          :class="copied ? 'bg-green-600 hover:bg-green-500' : ''"
          @click="copyCode" 
          :title="copied ? 'Copied!' : 'Copy to clipboard'"
          :aria-pressed="copied"
          :aria-label="copied ? 'Code copied' : 'Copy code to clipboard'"
        >
          <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>
        <pre class="text-gray-100 text-xs overflow-x-auto"><code>{{ example.code }}</code></pre>
        <span class="sr-only" aria-live="polite">{{ copied ? 'Copied code to clipboard' : '' }}</span>
      </div>
    </details>
  </article>
</template>
