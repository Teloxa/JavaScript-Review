<template>
  <button 
    :class="['reusable-btn', `btn-${variant}`, `btn-${size}`]" 
    @click="handleClick"
    :disabled="disabled"
  >
    <slot>Default Button</slot>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // can be 'primary', 'secondary', 'danger'
  },
  size: {
    type: String,
    default: 'medium', // can be 'small', 'medium', 'large'
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<style scoped>
.reusable-btn {
  font-family: inherit;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.reusable-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Sizes */
.btn-small {
  padding: 6px 12px;
  font-size: 12px;
}

.btn-medium {
  padding: 10px 20px;
  font-size: 14px;
}

.btn-large {
  padding: 14px 28px;
  font-size: 16px;
}

/* Variants */
.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #2980b9;
}

.btn-secondary {
  background-color: #95a5a6;
  color: white;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #7f8c8d;
}

.btn-danger {
  background-color: #e74c3c;
  color: white;
}

.btn-danger:hover:not(:disabled) {
  background-color: #c0392b;
}
</style>
