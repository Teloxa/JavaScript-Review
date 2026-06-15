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
        <button class="copy-btn" @click="copyCode">
          {{ copied ? 'Copied!' : 'Copy' }}
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
  padding: 4px 8px;
  font-size: 0.75rem;
  background: rgba(0, 0, 0, 0.05);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
.copy-btn:hover {
  background: rgba(0, 0, 0, 0.1);
}
.code-details pre {
  margin: 0;
  padding: 2.5rem 1rem 1rem 1rem;
  overflow-x: hidden;
  white-space: pre-wrap;
  font-size: 0.85rem;
}
</style>
