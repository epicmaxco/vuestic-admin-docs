<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="21" 
    height="21" 
    viewBox="0 0 21 21" 
    fill="none"
  >
    <path 
      d="M3.83333 13.6254C3.30078 12.5952 3 11.4257 3 10.186C3 6.0439 6.35786 2.68604 10.5 2.68604C12.0334 2.68604 13.4594 3.14623 14.6472 3.93604M6.33333 16.4231C7.52508 17.2208 8.95821 17.686 10.5 17.686C14.6421 17.686 18 14.3282 18 10.186C18 8.81996 17.6348 7.53919 16.9966 6.43604" 
      :stroke="colorComputed" 
      stroke-width="2"
    />
    <path 
      d="M3.83333 13.6254C3.30078 12.5952 3 11.4257 3 10.186C3 6.0439 6.35786 2.68604 10.5 2.68604C12.0334 2.68604 13.4594 3.14623 14.6472 3.93604M6.33333 16.4231C7.52508 17.2208 8.95821 17.686 10.5 17.686C14.6421 17.686 18 14.3282 18 10.186C18 8.81996 17.6348 7.53919 16.9966 6.43604" 
      :stroke="colorComputed" 
      stroke-width="2"
    />
    <circle 
      cx="4.66667" 
      cy="15.1862" 
      r="1.66667" 
      :stroke="colorComputed" 
      stroke-width="2"
    />
    <circle 
      cx="16.3337" 
      cy="5.1862" 
      r="1.66667" 
      :stroke="colorComputed" 
      stroke-width="2"
    />
    <circle 
      cx="10.5003" 
      cy="10.1859" 
      r="3.33333" 
      :stroke="colorComputed" 
      stroke-width="2"
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