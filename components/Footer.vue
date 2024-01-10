<template>
  <footer class="flex justify-center pt-10 md:pt-[120px] pb-10">
    <div class="flex flex-col items-center gap-10 w-full max-w-7xl">
      <div class="flex justify-between text-regularMedium w-full">
        <div class="grid grid-cols-2 md:grid-cols-4 w-full gap-6">
          <div class="flex flex-col gap-3 order-1">
            <b>Resources</b>
            <p>Design Resources</p>
            <p>Icon Library</p>
            <p>Third-Party Libraries</p>
          </div>
          <div class="flex flex-col gap-3 order-3 md:order-2">
            <b>Help</b>
            <p>Common Issues</p>
            <p>Change Log</p>
            <p>Report Bug</p>
          </div>
          <div class="flex flex-col gap-3 order-2 md:order-3">
            <b>Community</b>
            <p>GitHub</p>
            <p>Discord</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
          <div class="flex flex-col gap-3 order-4">
            <b>Contact Us</b>
            <p>Write Us</p>
            <p>Join Us</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row w-full gap-4 md:gap-0 md:items-center justify-between rounded-lg bg-[#6F67D9] p-6">
        <p class="text-white text-regularMedium">3 Vue.js experts available in March to build and launch you product. <span class="text-[#FF0] font-semibold">Contact us</span></p>
        <IconsEpicmaxLogo />
      </div>
      <div class="flex flex-col md:flex-row justify-center gap-6 md:gap-10 text-[#154EC1]">
        <div class="flex gap-2 items-center">
          <IconsEpicmaxIcon />
          <p class="font-bold">About Epicmax</p>
        </div>
        <div class="flex gap-2 items-center">
          <IconsVuesticAdmin />
          <p class="font-bold">Vuestic Admin</p>
        </div>
        <div class="flex gap-2 items-center">
          <IconsEpicSpinner />
          <p class="font-bold">Epic Spinners</p>
        </div>
      </div>
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
      <p class="text-regularMedium text-center">© 2023 Vuestic UI. Open source, free yo use. Development inquiries: <span class="text-[#154EC1] font-semibold">hello@epicmax.co</span></p>
    </div>
  </footer>
</template>