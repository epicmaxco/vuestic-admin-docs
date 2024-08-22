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
        <VaButton v-for="menuItem in menuItems" preset="plain" :key="menuItem.name" :to="menuItem.to" :target="menuItem.target">
          <p class="text-regularMedium font-semibold">{{ menuItem.name }}</p>
        </VaButton>
        <div class="flex gap-6">
          <NuxtLink to="https://github.com/epicmaxco/vuestic-admin" target="_blank">
            <IconsGithub />
          </NuxtLink>
          <NuxtLink to="https://discord.gg/invite/u7fQdqQt8c" target="_blank">
            <IconsDiscord />
          </NuxtLink>
          <NuxtLink to="https://twitter.com/vuestic_ui" target="_blank">
            <IconsTwitter />
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>

  <nav v-if="modelValue" class="absolute inset-0 flex flex-col h-[100dvh] z-50 md:hidden bg-white" :class="{ 'h-[calc(100dvh-68px)]': isHeaderBannerOpen }">
    <div class="flex justify-end items-end min-h-[54px] pb-[3px] px-4 sm:px-6">
      <VaButton preset="plain" @click="$emit('update:modelValue', false)">
        <VaIcon size="24px" name="close" />
      </VaButton>
    </div>
    <div class="flex flex-col justify-center items-center px-8 pb-8 gap-[18px] h-full">
      <VaButton class="w-fit" v-for="menuItem in menuItems" preset="plain" :key="menuItem.name" :to="menuItem.to" :target="menuItem.target">
        <p class="text-regularLarge font-semibold">{{ menuItem.name }}</p>
      </VaButton>
      <div class="flex justify-center mt-14 gap-6">
        <NuxtLink to="https://github.com/epicmaxco/vuestic-admin" target="_blank">
          <IconsGithub class="w-8 h-8" />
        </NuxtLink>
        <NuxtLink to="https://discord.gg/invite/u7fQdqQt8c" target="_blank">
          <IconsDiscord class="w-8 h-8" />
        </NuxtLink>
        <NuxtLink to="https://twitter.com/vuestic_ui" target="_blank">
          <IconsTwitter class="w-8 h-8" />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: { type: Boolean, required: true },
  isHeaderBannerOpen: { type: Boolean, required: true },
})

const menuItems = {
  support: {
    to: 'https://ui.vuestic.dev/support/consulting',
    name: 'Support & Consulting',
    target: '_blank',
  },
  contribute: {
    to: 'https://ui.vuestic.dev/contribution/guide',
    name: 'Contribute',
    target: '_blank',
  },
  contact_us: {
    to: 'mailto:vuestic@epicmax.co',
    name: 'Contact Us',
    target: '_self',
  },
}
</script>
