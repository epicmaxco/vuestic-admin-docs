<template>
  <div class="flex flex-col gap-4 items-center pt-4 pb-10 md:pb-8 mt-[60px] md:mt-20 opacity-60">
    <div class="grid grid-cols-3 sm:grid-cols-4 gap-y-4 md:flex items-center justify-between w-full max-w-7xl">
      <div class="flex justify-center">
        <NuxtLink to="https://vuejs.org/" target="_blank">
          <IconsVue class="w-[76px] h-[25px] sm:w-[97px] sm:h-[32px]" />
        </NuxtLink>
      </div>
      <div class="flex justify-center">
        <NuxtLink to="https://nuxt.com/" target="_blank">
          <IconsNuxt class="w-[73px] h-[16px] sm:w-[105px] sm:h-[24px]" />
        </NuxtLink>
      </div>
      <div class="flex justify-center">
        <NuxtLink to="https://flatlogic.com/" target="_blank">
          <IconsFlatLogic class="w-[105px] h-[16px] sm:w-[153px] sm:h-[22px]" />
        </NuxtLink>
      </div>
      <div class="flex justify-center">
        <NuxtLink to="https://vuejobs.com/" target="_blank">
          <IconsVueJobs class="w-[69px] h-[27px] sm:w-[104px] sm:h-[41px]" />
        </NuxtLink>
      </div>
      <div class="flex justify-center col-start-2">
        <NuxtLink to="https://epicmax.co/" target="_blank">
          <IconsEpicmax class="w-[72px] h-[14px] sm:w-[102px] sm:h-[19px]" />
        </NuxtLink>
      </div>
      <div class="flex justify-center col-start-3">
        <NuxtLink to="https://www.ag-grid.com/" target="_blank">
          <IconsAGGrid class="w-[105px] h-[22px] sm:w-[128px] sm:h-[27px]" />
        </NuxtLink>
      </div> 
    </div>
    <p class="text-regularLarge text-[#474198] text-center">
      Our beloved partners & sponsors that support us
    </p>
  </div>
</template>