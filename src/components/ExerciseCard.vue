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
  </article>
</template>
