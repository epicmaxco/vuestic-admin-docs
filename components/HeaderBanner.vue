<template>
  <div v-if="modelValue" class="flex items-center gap-4 py-2 px-4 bg-[var(--bg-header)]">
    <div class="flex flex-1 flex-col md:flex-row md:items-center md:justify-center gap-2 md:gap-4">
      <div class="flex md:justify-end">
        <div class="text-regularMedium text-white justify-self-end">3 Vue.js experts available to build and launch your product</div>
      </div>
      <div>
        <VaButton
          to="https://epicmax.co/?ref=vuestic-admin-header"
          target="_blank"
          class="text-regularSmall"
          size="small"
          color="#FF0"
          text-color="primary"
        >
          Hire us
        </VaButton>
      </div>
    </div>
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
defineProps({
  modelValue: { type: Boolean, required: true },
})
</script>
