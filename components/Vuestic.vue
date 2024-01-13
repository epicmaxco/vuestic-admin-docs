<template>
  <div class="flex justify-center pt-10 md:pt-[120px]">
    <div class="flex flex-col gap-6 md:gap-20 w-full max-w-7xl">
      <div class="flex flex-col gap-8 md:gap-10 items-center">
        <h2 class="text-extraMedium md:text-extraLarge font-extrabold text-center">Vuestic UI as Component Framework</h2>
        <div class="flex flex-col gap-8 md:gap-6">
          <p class="text-regularLarge text-center">We use UI components from Vuestic UI, which helps with updates and ensures consistent design.</p>
          <div class="flex flex-col md:flex-row items-center justify-center gap-4">
            <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-fit">
              <VaButton class="w-full sm:w-fit" to="https://github.com/epicmaxco/vuestic-admin" target="_blank">
                <template #prepend>
                  <IconsGithub color="textInverted"/>
                </template>
                <p class="text-regularLarge font-semibold ml-[10px]">View on GitHub</p>
              </VaButton>
              <VaButton class="w-full sm:w-fit" preset="plain" target="_blank">
                <p class="text-regularLarge">Live Demo</p>
              </VaButton>
            </div>
            <div class="md:hidden" />
            <div class="flex flex-col items-center sm:flex-row gap-4">
              <GithubStars :count="stars" />
              <GithubForks :count="forks" />
            </div>
          </div>
        </div>
      </div>
      <img src="/landing/admin/preview-features.png" alt="Preview Features" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const stars = ref(0)
const forks = ref(0)

onMounted(async () => {
  const { stargazers_count, forks: forks_count } = await $fetch<{ stargazers_count: number, forks: number }>('https://api.github.com/repos/epicmaxco/vuestic-ui')

  stars.value = stargazers_count
  forks.value = forks_count
})
</script>