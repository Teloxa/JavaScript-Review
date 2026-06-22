<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  examples: {
    type: Array,
    required: true
  }
});

const activeIndex = ref(0);
const isHovered = ref(false);

let observer = null;

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // trigger when 50% of the element is visible
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Extract index from id (e.g. "exercise-2" -> 2)
        const id = entry.target.id;
        const indexStr = id.replace('exercise-', '');
        activeIndex.value = parseInt(indexStr, 10);
      }
    });
  }, options);

  // Observe all exercise cards
  props.examples.forEach((_, index) => {
    const el = document.getElementById(`exercise-${index}`);
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

const scrollTo = (index) => {
  const el = document.getElementById(`exercise-${index}`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    activeIndex.value = index;
  }
};
</script>

<template>
  <nav class="floating-nav" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <div class="nav-content" :class="{ 'is-expanded': isHovered }">
      <div class="nav-collapsed" v-show="!isHovered">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
        <span class="active-badge">{{ activeIndex + 1 }}</span>
      </div>

      <div class="nav-expanded" v-show="isHovered">
        <h3 class="nav-title">Exercises</h3>
        <ul>
          <li v-for="(example, index) in examples" :key="index">
            <button @click="scrollTo(index)" :class="{ 'is-active': activeIndex === index }">
              <span class="index">{{ index + 1 }}.</span>
              <span class="title">{{ example.title }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.floating-nav {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
}

.nav-content {
  background: var(--panel-strong);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  color: var(--text);
  backdrop-filter: blur(10px);
}

.nav-content:not(.is-expanded) {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.nav-content:not(.is-expanded):hover {
  background: var(--bg);
  transform: scale(1.05);
  box-shadow: 0 26px 60px rgba(23, 32, 51, 0.16);
}

.nav-collapsed {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: var(--accent);
}

.active-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--accent);
  color: white;
  font-size: 0.65rem;
  font-weight: bold;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--panel-strong);
}

.nav-expanded {
  padding: 16px;
  width: 250px;
  max-height: 70vh;
  overflow-y: auto;
}

.nav-expanded::-webkit-scrollbar {
  width: 6px;
}

.nav-expanded::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 3px;
}

.nav-title {
  margin: 0 0 12px 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--muted);
  border-bottom: 1px solid var(--border);
  padding-bottom: 8px;
}

.nav-expanded ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-expanded button {
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  color: var(--text);
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.nav-expanded button:hover {
  background: rgba(29, 78, 216, 0.05);
  color: var(--accent);
}

.nav-expanded button.is-active {
  background: rgba(29, 78, 216, 0.1);
  color: var(--accent);
  font-weight: 600;
}

.index {
  color: var(--muted);
  font-size: 0.85rem;
  min-width: 16px;
}

.is-active .index {
  color: var(--accent);
}

.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
