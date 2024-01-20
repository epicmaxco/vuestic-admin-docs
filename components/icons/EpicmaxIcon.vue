<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 23" 
    fill="none"
  >
    <path 
      d="M22.5 2.5H4.5L7.5 7L6.5 16H10L9 22L22.5 2.5Z" 
      :stroke="colorComputed" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    <path
      d="M15.9998 3.5L14 11" 
      :stroke="colorComputed" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    <path 
      d="M11 7H14" 
      :stroke="colorComputed" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    <path 
      d="M10.5 11H11.5H16" 
      :stroke="colorComputed" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
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