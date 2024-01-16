<template>
  <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="41" 
  height="41" 
  viewBox="0 0 41 41" 
  fill="none"
  >
    <path 
      d="M11.333 14.1862C8.526 16.699 5.71171 18.6639 3.35482 21.8287C3.17446 22.0709 4.16869 23.1466 4.27352 23.276C5.93556 25.3273 8.03929 26.952 10.2451 28.1862" 
      :stroke="colorComputed" 
      stroke-width="2.8" 
      stroke-linecap="round"
    />
    <path 
      d="M23.333 10.1862C22.1828 13.7512 21.1513 17.3606 19.9935 20.9228C19.0714 23.7599 18.0761 26.5662 17.1231 29.3906C16.8134 30.3085 16.5081 31.2287 16.333 32.1862" 
      :stroke="colorComputed" 
      stroke-width="2.8" 
      stroke-linecap="round"
    />
    <path 
      d="M27.8911 14.1862C29.5652 15.34 37.0942 20.7495 36.2702 21.7769C34.0296 24.5708 29.5652 27.4554 27.333 29.1862"
      :stroke="colorComputed" 
      stroke-width="2.8" 
      stroke-linecap="round"
    />
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
})

const { getColor } = useColors()
const colorComputed = computed(() => getColor(props.color))
</script>