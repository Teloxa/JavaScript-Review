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

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.example.code);
    copied.value = true;
    setTimeout(() => { copied.value = false; }, 2000);
  } catch (err) {
    console.error('Failed to copy code: ', err);
  }
};
</script>

<template>
  <article class="card">
    <div class="card-header">
      <h2>{{ example.title }}</h2>
      <span class="card-badge">{{ formattedIndex }}</span>
    </div>
    <p><strong>Input</strong><code>{{ example.input }}</code></p>
    <p class="result"><strong>Output</strong><code>{{ example.output }}</code></p>
    
    <details class="code-details">
      <summary>View Code</summary>
      <div class="code-wrapper">
        <button 
          class="copy-btn" 
          :class="{ 'is-copied': copied }"
          @click="copyCode" 
          :title="copied ? 'Copied!' : 'Copy to clipboard'"
        >
          <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>
        <pre><code>{{ example.code }}</code></pre>
      </div>
    </details>
  </article>
</template>

<style scoped>
.code-details {
  margin-top: 1rem;
  background: var(--bg-alt);
  border-radius: 4px;
  overflow: hidden;
}
.code-details summary {
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  background: var(--surface);
  border-top: 1px solid var(--border);
}
.code-wrapper {
  position: relative;
}
.copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.copy-btn:hover {
  background: var(--bg-alt);
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.08);
}
.copy-btn:active {
  transform: translateY(0);
}
.copy-btn.is-copied {
  color: #10b981;
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.1);
}
.code-details pre {
  margin: 0;
  padding: 2.5rem 1rem 1rem 1rem;
  overflow-x: hidden;
  white-space: pre-wrap;
  font-size: 0.85rem;
}
</style>
