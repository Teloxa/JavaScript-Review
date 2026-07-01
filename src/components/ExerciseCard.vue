<script setup>
import { computed, ref } from 'vue';
import { reverseString } from '../utils/problems';

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
const playgroundInput = ref('Aprender JavaScript');
const playgroundOutput = ref(reverseString(playgroundInput.value));
const playgroundError = ref('');

const isInteractive = computed(() => props.example.title === 'Reverse String');

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.example.code);
    copied.value = true;
    setTimeout(() => { copied.value = false; }, 2000);
  } catch (err) {
    console.error('Failed to copy code: ', err);
  }
};

const runPlayground = () => {
  const value = playgroundInput.value.trim();

  if (!value) {
    playgroundOutput.value = '';
    playgroundError.value = 'Escribe un texto para invertirlo.';
    return;
  }

  playgroundError.value = '';
  playgroundOutput.value = reverseString(value);
};

const resetPlayground = () => {
  playgroundInput.value = 'Aprender JavaScript';
  runPlayground();
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

    <section v-if="isInteractive" class="playground" aria-label="Interactive exercise">
      <label class="playground-label" for="playground-input">Try it yourself</label>
      <textarea
        id="playground-input"
        v-model="playgroundInput"
        rows="3"
        placeholder="Escribe un texto..."
        @keyup.enter.ctrl="runPlayground"
      ></textarea>

      <div class="playground-actions">
        <button class="playground-button" type="button" @click="runPlayground">Ejecutar</button>
        <button class="playground-button secondary" type="button" @click="resetPlayground">Restablecer</button>
      </div>

      <p v-if="playgroundError" class="playground-error">{{ playgroundError }}</p>
      <p v-else class="playground-result"><strong>Resultado:</strong> {{ playgroundOutput }}</p>
    </section>
    
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

.playground {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
}

.playground-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.playground textarea {
  width: 100%;
  min-height: 88px;
  resize: vertical;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.85rem;
  font: inherit;
  background: var(--bg-alt);
  color: var(--text);
  outline: none;
}

.playground textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.12);
}

.playground-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.85rem;
}

.playground-button {
  border: 1px solid var(--accent);
  background: var(--accent);
  color: white;
  border-radius: 999px;
  padding: 0.7rem 1rem;
  cursor: pointer;
  font-weight: 600;
}

.playground-button.secondary {
  background: transparent;
  color: var(--text);
  border-color: var(--border);
}

.playground-error {
  margin-top: 0.85rem;
  color: #dc2626;
  font-weight: 600;
}

.playground-result {
  margin-top: 0.85rem;
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
