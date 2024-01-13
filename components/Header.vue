<template>
  <header v-if="!modelValue" class="flex justify-center pt-6">
    <div class="flex flex-1 md:px-6 justify-between items-center max-w-8xl">
      <NuxtLink href="/" aria-label="go to the main page">
        <IconsVuesticAdminLogo class="w-[150px] md:w-auto" />
      </NuxtLink>
      <VaButton preset="plain" @click="$emit('update:modelValue', true)">
        <IconsMenuIcon class="md:hidden"/>
      </VaButton>
      <nav class="hidden md:flex gap-8 items-center">
        <VaButton v-for="menuItem in menuItems" preset="plain" :key="menuItem.name" :to="menuItem.to" target="_blank">
          <p class="text-regularMedium font-semibold">{{ menuItem.name }}</p>
        </VaButton>
        <div class="flex gap-6">
          <NuxtLink href="/">
            <IconsGithub />
          </NuxtLink>
          <NuxtLink href="/">
            <IconsDiscord />
          </NuxtLink>
          <NuxtLink href="/">
            <IconsFacebook />
          </NuxtLink>
          <NuxtLink href="/">
            <IconsTwitter />
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>

  <nav v-if="modelValue" class="absolute inset-0 flex flex-col z-50 h-[calc(100dvh-68px)] md:hidden">
    <div class="flex justify-end items-end min-h-[54px] pb-[3px] px-4 sm:px-6">
      <VaButton preset="plain" @click="$emit('update:modelValue', false)">
        <VaIcon size="24px" name="close" />
      </VaButton>
    </div>
    <div class="flex flex-col justify-center px-8 pb-8 gap-[18px] h-full">
      <VaButton v-for="menuItem in menuItems" preset="plain" :key="menuItem.name" :to="menuItem.to" target="_blank">
        <p class="text-regularLarge font-semibold">{{ menuItem.name }}</p>
      </VaButton>
      <div class="flex justify-center mt-14 gap-6">
        <NuxtLink href="/">
          <IconsGithub class="w-8 h-8" />
        </NuxtLink>
        <NuxtLink href="/">
          <IconsDiscord class="w-8 h-8" />
        </NuxtLink>
        <NuxtLink href="/">
          <IconsFacebook class="w-8 h-8" />
        </NuxtLink>
        <NuxtLink href="/">
          <IconsTwitter class="w-8 h-8" />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: { type: Boolean, required: true }
})

const menuItems = {
  contribute: {
    to: '/',
    name: 'Contribute',
  },
  contact_us: {
    to: '/',
    name: 'Contact Us',
  },
}
</script>