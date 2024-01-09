<template>
  <header class="flex justify-center pt-6">
    <div class="flex flex-1 justify-between items-center max-w-8xl">
      <NuxtLink href="/" aria-label="go to the main page">
        <IconsVuesticAdminLogo class="w-[150px] md:w-auto" />
      </NuxtLink>
      <IconsMenuIcon class="md:hidden"/>
      <nav class="hidden md:flex gap-8 items-center">
        <VaButton v-for="menuItem in menuItems" preset="plain" :key="menuItem.name" :to="menuItem.to">
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
</template>

<script lang="ts" setup>
const menuItems = {
  docs: {
    to: '/',
    name: 'Docs',
  },
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