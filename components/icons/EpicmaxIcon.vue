<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="21" 
    height="21" 
    viewBox="0 0 21 21" 
    fill="none"
  >
    <g clip-path="url(#clip0_1086_2071)">
      <path 
        d="M22.5 2.68604H4.5L7.5 7.18604L6.5 16.186H10L9 22.186L22.5 2.68604Z" 
        :stroke="colorComputed" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
      <path 
        d="M15.9998 3.68604L14 11.186" 
        :stroke="colorComputed" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
      <path 
        d="M11 7.18604H14" 
        :stroke="colorComputed" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
      <path 
        d="M10.5 11.186H11.5H16" 
        :stroke="colorComputed" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1086_2071">
        <rect 
          width="20" 
          height="20" 
          fill="white" 
          transform="translate(0.5 0.186035)"
        />
      </clipPath>
    </defs>
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