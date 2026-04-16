<template>
  <div v-if="modelValue" class="flex items-center gap-4 py-2 px-4 bg-[var(--bg-header)]">
    <Transition name="banner-fade" mode="out-in">
      <component :is="currentBanner" :key="currentIndex" />
    </Transition>
    <VaButton preset="plain" @click="$emit('update:modelValue', false)">
      <VaIcon
        class="opacity-50"
        size="20px"
        color="textInverted"
        name="close"
      />
    </VaButton>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  banners: { type: Array, required: true },
  interval: { type: Number, default: 10000 }, // 10 seconds default
})

const currentIndex = ref(0)
let intervalId: NodeJS.Timeout | null = null

const currentBanner = computed(() => props.banners[currentIndex.value])

const startRotation = () => {
  if (props.banners.length <= 1) return

  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.banners.length
  }, props.interval)
}

const stopRotation = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onMounted(() => {
  startRotation()
})

onUnmounted(() => {
  stopRotation()
})
</script>

<style scoped>
.banner-fade-enter-active,
.banner-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.banner-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.banner-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
