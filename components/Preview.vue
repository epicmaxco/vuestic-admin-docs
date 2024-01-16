<template>
  <div class="flex flex-col md:flex-row justify-center items-center gap-9 md:gap-6 mt-[60px] md:mt-20">
    <div class="flex flex-col justify-center items-center gap-8 w-full max-w-[483px]">
      <h1 class="text-4xl md:text-6xl font-extrabold text-center md:text-start">Vue 3 Admin Template</h1>
      <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start  gap-4 w-full">
        <VaButton class="w-full sm:w-fit" to="https://github.com/epicmaxco/vuestic-admin#installation" target="_blank">
          <p class="text-regularLarge font-semibold">Get started</p>
        </VaButton>
        <VaButton class="w-full sm:w-fit" preset="plain" to="https://github.com/epicmaxco/vuestic-admin" target="_blank">
          <template #prepend>
            <IconsGithub />
          </template>
          <p class="text-regularLarge font-semibold ml-[10px]">View on GitHub</p>
        </VaButton>
      </div>
    </div>
    <div class="max-w-[553px]">
      <img src="/landing/admin/admin.png" alt="Component examples"/>
    </div>
  </div>
</template>