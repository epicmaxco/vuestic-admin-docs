<template>
  <footer class="flex justify-center pt-10 md:pt-[120px] pb-10">
    <div class="flex flex-col items-center gap-10 w-full max-w-7xl">
      <div class="flex justify-between text-regularMedium w-full">
        <div class="grid grid-cols-2 md:grid-cols-3 w-full gap-6">
          <div class="flex flex-col gap-3 order-3 md:order-1">
            <b>Help</b>
            <NuxtLink class="hover:underline w-fit" to="https://github.com/epicmaxco/vuestic-admin/releases/epicmaxco/vuestic-admin" target="_blank">Report a Bug</NuxtLink>
            <NuxtLink class="hover:underline w-fit" to="https://github.com/epicmaxco/vuestic-admin/releases/vuestic-admin/releases/epicmaxco/vuestic-admin" target="_blank">Release Log</NuxtLink>
            <NuxtLink class="hover:underline w-fit" to="https://ui.vuestic.dev/support/consulting" target="_blank">Support & Consulting</NuxtLink>
          </div>
          <div class="flex flex-col gap-3 order-2 md:order-2">
            <b>Community</b>
            <NuxtLink class="hover:underline w-fit" to="https://github.com/epicmaxco/vuestic-admin" target="_blank">GitHub</NuxtLink>
            <NuxtLink class="hover:underline w-fit" to="https://discord.gg/invite/u7fQdqQt8c" target="_blank">Discord</NuxtLink>
            <NuxtLink class="hover:underline w-fit" to="https://twitter.com/vuestic_ui" target="_blank">Twitter</NuxtLink>
          </div>
          <div class="flex flex-col gap-3 order-3">
            <b>Contact Us</b>
            <NuxtLink class="hover:underline w-fit" to="https://ui.vuestic.dev/contribution/guide" target="_blank">Contribute</NuxtLink>
            <NuxtLink class="hover:underline w-fit" to="mailto:vuestic@epicmax.co">Write Us</NuxtLink>
            <NuxtLink class="hover:underline w-fit" to="https://discord.gg/invite/u7fQdqQt8c" target="_blank">Join Us</NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row w-full gap-4 md:gap-0 md:items-center justify-between rounded-lg bg-[#6F67D9] p-6">
        <p class="text-white text-regularMedium">3 Vue.js experts available to build and launch your product. <NuxtLink to="mailto:vuestic@epicmax.co" target="_blank" class="text-[#FF0] font-semibold">Contact us</NuxtLink></p>
        <NuxtLink to="https://epicmax.co/" target="_blank">
          <IconsEpicmaxLogo />
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 text-primary">
        <VaButton preset="plain" to="https://epicmax.co/about" target="_blank">
          <div class="flex gap-2 items-center">
            <IconsEpicmaxIcon />
            <p class="font-bold">About Epicmax</p>
          </div>
        </VaButton>
        <VaButton preset="plain" to="https://admin-demo.vuestic.dev/" target="_blank">
          <div class="flex gap-2 items-center">
            <IconsVuesticAdmin />
            <p class="font-bold">Vuestic Admin</p>
          </div>
        </VaButton>
        <VaButton class="sm:col-span-2 md:col-span-1" preset="plain" to="https://epic-spinners.epicmax.co/" target="_blank">
          <div class="flex gap-2 items-center justify-center">
            <IconsEpicSpinner />
            <p class="font-bold">Epic Spinners</p>
          </div>
        </VaButton>
      </div>
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
      <p class="text-regularMedium text-center">© 2024 Vuestic Admin. Open source, free to use. Development inquiries: <NuxtLink to="mailto:vuestic@epicmax.co" class="text-primary font-semibold">vuestic@epicmax.co</NuxtLink></p>
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>
