<script setup>
import { computed } from 'vue';

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
      <pre><code>{{ example.code }}</code></pre>
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
.code-details pre {
  margin: 0;
  padding: 1rem;
  overflow-x: auto;
  font-size: 0.85rem;
}
</style>
