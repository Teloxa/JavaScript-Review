<template>
  <div class="console-challenge">
    <div class="terminal-container">
      <div class="terminal-header">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
        <span class="title">Challenge #{{ challengeId }}</span>
      </div>

      <textarea v-model="code" class="terminal-input" placeholder="// Write your code here..." spellcheck="false"
        :disabled="state !== 'editing'"></textarea>

      <div class="terminal-actions">
        <span v-if="errorMessage" class="error-msg">{{ errorMessage }}</span>
        <button @click="handleShowResults" class="btn-primary" :disabled="state !== 'editing'">
          Show Results
        </button>
      </div>
    </div>

    <!-- Confirmation Modal / Overlay -->
    <div v-if="state === 'confirming'" class="modal-overlay">
      <div class="modal-content">
        <h3>Are you sure?</h3>
        <p>Do you want to reveal the result? It is better to attempt it at least once on your own.</p>
        <div class="modal-actions">
          <button @click="cancelReveal" class="btn-secondary">Try again</button>
          <button @click="confirmReveal" class="btn-primary">Yes, show result</button>
        </div>
      </div>
    </div>

    <!-- Revealed Result -->
    <div v-if="state === 'revealed'" class="result-container">
      <h4>Expected Output:</h4>
      <pre class="expected-output">{{ expectedOutput }}</pre>
      <button @click="resetChallenge" class="btn-secondary mt-2">Reset</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  challengeId: {
    type: [String, Number],
    required: true
  },
  expectedOutput: {
    type: String,
    required: true
  }
});

// State Management: 'editing' | 'confirming' | 'revealed'
const state = ref('editing');
const code = ref('');
const errorMessage = ref('');

// Anti-cheat Validation
const validateCode = (input) => {
  // Remove comments (single-line and multi-line) and whitespace
  const cleanCode = input.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();

  // Basic validation: at least 5 characters and some alphanumeric content
  if (cleanCode.length < 5) return false;
  if (!/[a-zA-Z0-9]/.test(cleanCode)) return false;

  return true;
};

const handleShowResults = () => {
  errorMessage.value = '';

  if (!validateCode(code.value)) {
    errorMessage.value = 'You must write a real code attempt before revealing the result.';
    return;
  }

  // If validation passes, move to the confirmation state
  state.value = 'confirming';
};

const confirmReveal = () => {
  state.value = 'revealed';
};

const cancelReveal = () => {
  state.value = 'editing';
};

const resetChallenge = () => {
  state.value = 'editing';
  code.value = '';
  errorMessage.value = '';
};
</script>

<style scoped>
.console-challenge {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.terminal-container {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 252, 0.98));
  border: 1px solid #dbe4f0;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
}

.terminal-header {
  background: linear-gradient(90deg, #f8fafc, #eef4fb);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #dbe4f0;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red {
  background-color: #ff5f56;
}

.dot.yellow {
  background-color: #ffbd2e;
}

.dot.green {
  background-color: #27c93f;
}

.title {
  margin-left: 10px;
  color: #475569;
  font-size: 0.9rem;
  font-family: monospace;
}

.terminal-input {
  background: linear-gradient(180deg, #ffffff, #f8fafc);
  color: #0f172a;
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  font-size: 1rem;
  padding: 20px;
  min-height: 200px;
  border: none;
  resize: vertical;
  outline: none;
  line-height: 1.5;
}

.terminal-actions {
  padding: 16px;
  background-color: #f8fafc;
  border-top: 1px solid #dbe4f0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
}

.error-msg {
  color: #c2410c;
  font-size: 0.85rem;
}

button {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  border: none;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  filter: brightness(1.05);
}

.btn-secondary {
  background-color: white;
  border: 1px solid #93c5fd;
  color: #2563eb;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #eff6ff;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  z-index: 10;
}

.modal-content {
  background: linear-gradient(180deg, #ffffff, #f8fafc);
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  max-width: 400px;
  color: #0f172a;
  border: 1px solid #dbe4f0;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
}

.modal-content h3 {
  margin-top: 0;
  color: #0f766e;
}

.modal-content p {
  color: #475569;
  font-size: 0.95rem;
  margin-bottom: 24px;
  line-height: 1.5;
}

.modal-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.result-container {
  margin-top: 16px;
  padding: 16px;
  background: linear-gradient(180deg, #ffffff, #f8fafc);
  border-radius: 16px;
  border: 1px solid #dbe4f0;
  border-left: 4px solid #22c55e;
  color: #0f172a;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}

.result-container h4 {
  margin-top: 0;
  color: #15803d;
}

.expected-output {
  background: #f8fafc;
  padding: 12px;
  border-radius: 12px;
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  overflow-x: auto;
  color: #0f172a;
  border: 1px solid #dbe4f0;
}

.mt-2 {
  margin-top: 16px;
}
</style>
