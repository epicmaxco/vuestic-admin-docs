<template>
  <div class="flex flex-col md:flex-row justify-center items-center gap-9 md:gap-6 mt-[60px] md:mt-20">
    <div class="flex flex-col justify-center gap-8">
      <h1 class="text-4xl md:text-6xl font-extrabold text-center md:text-start max-w-[288px] md:max-w-[483px]">Vue 3 Admin Template</h1>
      <div class="flex flex-col md:flex-row items-center gap-4">
        <VaButton class="w-fit">
          <p class="text-regularLarge font-semibold">Get started</p>
        </VaButton>
        <VaButton class="w-fit" preset="plain" to="https://github.com/epicmaxco/vuestic-admin">
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