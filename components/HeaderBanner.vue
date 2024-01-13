<template>
  <div v-if="isVisible" class="flex items-center gap-4 py-2 px-4 bg-[#6B62F0]">
    <div class="flex flex-1 flex-col md:flex-row md:items-center gap-2 md:gap-4">
      <div class="flex flex-1 md:justify-end">
        <div class="text-regularMedium text-white justify-self-end">We just released Vuestic 1.8.7</div>
      </div>
      <div class="flex-1">
        <VaButton 
          href="https://epicmax.co/?ref=vuestic-header" 
          target="blank" 
          class="text-regularSmall" 
          size="small" 
          color="#FF0" 
          text-color="primary"
        >
          Hire us
        </VaButton>
      </div>
    </div>
    <VaButton preset="plain" @click="isVisible = false">
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
const isVisible = ref(true)
</script>