<template>
  <div class="flex flex-col gap-4 items-center pt-4 pb-10 md:pb-8 mt-[60px] md:mt-20 opacity-60">
    <!-- Increased gap-y for vertical and added gap-x for horizontal spacing -->
    <div class="grid grid-cols-3 sm:grid-cols-4 gap-y-4 gap-x-4 md:flex items-center justify-between w-full max-w-7xl">
      <NuxtLink
          v-for="partner in partners"
          :to="partner.url"
          target="_blank"
      >
        <component :is="partner.component" class="w-full h-[30px]" />
      </NuxtLink>
    </div>
    <p class="text-regularLarge text-[#474198] text-center">
      Our beloved partners & sponsors that support us
    </p>
  </div>
</template>

<script setup lang="ts">
const partners: {url: string, component: any}[] = [
  {
    url: "https://epicmax.co/?utm_source=partners&utm_medium=logo&utm_campaign=vuestic",
    component: resolveComponent('PartnersIconsEpicmax')
  },
  {
    url: "https://vuejobs.com/?utm_source=partners&utm_medium=logo&utm_campaign=vuestic",
    component: resolveComponent('PartnersIconsVueJobs')
  },
  {
    url: "https://www.jetbrains.com/?utm_source=Epicmax&utm_medium=partners_logo&utm_campaign=vuestic",
    component: resolveComponent('PartnersIconsJetBrains')
  },
  {
    url: "https://codesandbox.io/?utm_source=Epicmax&utm_medium=partners_logo&utm_campaign=vuestic",
    component: resolveComponent('PartnersIconsCodeSandbox')
  },
  {
    url: "https://www.ag-grid.com/?utm_source=partners&utm_medium=logo&utm_campaign=vuestic",
    component: resolveComponent('PartnersIconsAGGrid')
  },
  {
    url: "https://vuejsforge.com/?utm_source=Epicmax&utm_medium=partners_logo&utm_campaign=vuestic/",
    component: resolveComponent('PartnersIconsVueForge')
  },
  {
    url: "https://chromatic.com/?utm_source=github&utm_medium=profile&utm_campaign=vuestic",
    component: resolveComponent('PartnersIconsChromatic')
  },
  {
    url: "https://flatlogic.com/?utm_source=partners&utm_medium=logo&utm_campaign=vuestic",
    component: resolveComponent('PartnersIconsFlatLogic')
  },
  {
    url: "https://vuejsnation.com/?utm_medium=TWITTER&utm_source=VuesticUI&utm_content=VN2024_recruitment&utm_campaign=community",
    component: resolveComponent('PartnersIconsVueJsNation')
  },
  {
    url: "https://vueschool.io/?utm_medium=TWITTER&utm_source=VuesticUI&utm_content=VN2024_recruitment&utm_campaign=community",
    component: resolveComponent('PartnersIconsVueSchool')
  }
];
</script>
