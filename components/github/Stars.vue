<template>
  <div class="flex items-center gap-2 border border-[rgba(31,35,40,0.15)] rounded-md pl-3 bg-[#f6f8fa] h-7 text-[#24292f] text-[13px] leading-[20px] font-semibold">
    <GithubStarIcon />
    <p>Star</p>
    <span class="bg-[rgba(31,35,40,0.08)] rounded-full px-[6px]">{{ countComputed }}</span>
    <div class="flex items-center px-2 border-l border-[rgba(31,35,40,0.15)] h-full">
      <GithubArrow />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  count: {
    type: Number,
    default: 0,
  }
})

const countComputed = computed(() => { 
  if (props.count > 1000) {
    return (props.count / 1000).toFixed(1) + 'k'
  }

  return props.count
})
</script>