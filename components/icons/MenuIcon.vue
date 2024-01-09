<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none"
  >
    <path 
      d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" 
      :fill="colorComputed"
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