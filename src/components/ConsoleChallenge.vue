<template>
  <div class="console-challenge">
    <div class="terminal-container">
      <div class="terminal-header">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
        <span class="title">Challenge #{{ challengeId }}</span>
      </div>

      <textarea v-model="code" class="terminal-input" placeholder="// Escribe tu código aquí..." spellcheck="false"
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
        <h3>¿Estás seguro?</h3>
        <p>¿Quieres ver el resultado? Es mejor intentarlo al menos una vez por tu cuenta.</p>
        <div class="modal-actions">
          <button @click="cancelReveal" class="btn-secondary">Volver a intentar</button>
          <button @click="confirmReveal" class="btn-primary">Sí, mostrar resultado</button>
        </div>
      </div>
    </div>

    <!-- Revealed Result -->
    <div v-if="state === 'revealed'" class="result-container">
      <h4>Resultado Esperado:</h4>
      <pre class="expected-output">{{ expectedOutput }}</pre>
      <button @click="resetChallenge" class="btn-secondary mt-2">Reiniciar</button>
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
  // Elimina comentarios (una y multiples lineas) y espacios en blanco
  const cleanCode = input.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();

  // Validacion basica: que tenga más de 5 caracteres y al menos algunas letras/numeros
  if (cleanCode.length < 5) return false;
  if (!/[a-zA-Z0-9]/.test(cleanCode)) return false;

  return true;
};

const handleShowResults = () => {
  errorMessage.value = '';

  if (!validateCode(code.value)) {
    errorMessage.value = 'Debes escribir un intento de código real antes de ver el resultado.';
    return;
  }

  // Si pasa la validación, pasamos al estado de confirmación
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
  background-color: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

.terminal-header {
  background-color: #2d2d2d;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
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
  color: #a0a0a0;
  font-size: 0.9rem;
  font-family: monospace;
}

.terminal-input {
  background-color: transparent;
  color: #d4d4d4;
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
  background-color: #252526;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
}

.error-msg {
  color: #ff5f56;
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
  background-color: #007acc;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #0098ff;
}

.btn-secondary {
  background-color: transparent;
  border: 1px solid #007acc;
  color: #007acc;
}

.btn-secondary:hover:not(:disabled) {
  background-color: rgba(0, 122, 204, 0.1);
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
  background-color: #252526;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  color: white;
  border: 1px solid #333;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

.modal-content h3 {
  margin-top: 0;
  color: #ffbd2e;
}

.modal-content p {
  color: #ccc;
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
  background-color: #1e1e1e;
  border-radius: 8px;
  border-left: 4px solid #27c93f;
  color: white;
}

.result-container h4 {
  margin-top: 0;
  color: #27c93f;
}

.expected-output {
  background-color: #000;
  padding: 12px;
  border-radius: 4px;
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  overflow-x: auto;
  color: #d4d4d4;
}

.mt-2 {
  margin-top: 16px;
}
</style>
