<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  examples: {
    type: Array,
    required: true
  },
  challenges: {
    type: Array,
    default: () => []
  },
  currentView: {
    type: String,
    default: 'exercises'
  }
});

const emit = defineEmits(['switchView']);

const activeIndex = ref(0);
const isHovered = ref(false);

let observer = null;

onMounted(() => {
  if (props.currentView === 'exercises') {
    setupExerciseObserver();
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

const setupExerciseObserver = () => {
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
};

const scrollTo = (index) => {
  const el = document.getElementById(`exercise-${index}`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    activeIndex.value = index;
  }
};

const switchView = (view) => {
  emit('switchView', view);
  if (view === 'exercises' && !observer) {
    setTimeout(setupExerciseObserver, 100);
  }
};
</script>

<template>
  <nav class="fixed right-5 top-1/2 -translate-y-1/2 z-50" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <div class="bg-white/90 border border-amber-200 rounded-3xl shadow-lg backdrop-blur-md transition-all duration-300 overflow-hidden"
         :class="isHovered ? 'w-64' : 'w-12 h-12'">
      
      <!-- Collapsed view -->
      <div v-show="!isHovered" class="flex items-center justify-center w-full h-full cursor-pointer relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600">
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
        <span class="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white" v-if="currentView === 'exercises'">{{ activeIndex + 1 }}</span>
      </div>

      <!-- Expanded view -->
      <div v-show="isHovered" class="p-4">
        <!-- View Switcher -->
        <div class="mb-4 pb-4 border-b border-amber-200">
          <h3 class="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">Views</h3>
          <div class="flex gap-2">
            <button 
              @click="switchView('exercises')"
              class="flex-1 px-3 py-2 rounded-lg text-xs font-semibold transition-colors"
              :class="currentView === 'exercises' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            >
              Exercises
            </button>
            <button 
              @click="switchView('challenges')"
              class="flex-1 px-3 py-2 rounded-lg text-xs font-semibold transition-colors"
              :class="currentView === 'challenges' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            >
              Challenges
            </button>
          </div>
        </div>

        <!-- Exercises List -->
        <template v-if="currentView === 'exercises'">
          <h3 class="text-xs font-bold uppercase tracking-wider text-amber-600 mb-3 pb-2 border-b border-amber-200">Exercises</h3>
          <ul class="space-y-1 max-h-64 overflow-y-auto">
            <li v-for="(example, index) in examples" :key="index">
              <button 
                @click="scrollTo(index)" 
                class="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-100 transition-colors"
                :class="activeIndex === index ? 'bg-blue-600 text-white font-semibold' : ''"
              >
                <span class="font-bold text-blue-600" :class="activeIndex === index ? 'text-white' : ''">{{ index + 1 }}.</span>
                <span>{{ example.title }}</span>
              </button>
            </li>
          </ul>
        </template>

        <!-- Challenges List -->
        <template v-if="currentView === 'challenges'">
          <h3 class="text-xs font-bold uppercase tracking-wider text-purple-600 mb-3 pb-2 border-b border-purple-200">Challenges</h3>
          <ul class="space-y-1 max-h-64 overflow-y-auto">
            <li v-for="challenge in challenges" :key="challenge.id">
              <div class="px-3 py-2 rounded-lg text-sm text-gray-700 bg-purple-50 border border-purple-200">
                <span class="font-bold text-purple-600">{{ challenge.id }}.</span>
                <span>{{ challenge.title }}</span>
              </div>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </nav>
</template>

