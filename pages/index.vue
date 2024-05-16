<template>
  <HeaderBanner v-model="isHeaderBannerOpen" />
  <section class="relative bg-gradient-to-b from-[#E5E3FF] to-[#F9F4F7] px-4 sm:px-6 md:px-0">
    <Header v-model="isMobileMenuOpen" :isHeaderBannerOpen="isHeaderBannerOpen" />
    <template v-if="!isMobileMenuOpen">
      <Preview />
      <PartnersList />
    </template>
  </section>
  <template v-if="!isMobileMenuOpen">
    <section class="bg-gradient-to-b from-[#F8F3F7] to-[#FFF8E8] px-4 sm:px-6 md:px-0">
      <Features />
    </section>
    <section class="bg-gradient-to-b from-[#FFF8E8] to-[#FFF0FF] px-4 sm:px-6 md:px-0">
      <Template />
    </section>
    <section class="bg-gradient-to-b from-[#FFF0FF] to-[#E9DCF9] px-4 sm:px-6 md:px-0">
      <Vuestic />
    </section>
    <section class="bg-gradient-to-b from-[#E9DCF9] to-[#F0EFFF] px-4 sm:px-6 md:px-0">
      <Description />
    </section>
    <section class="bg-gradient-to-b from-[#F0EFFF] to-[#FFF8E9] px-4 sm:px-6 md:px-0">
      <MeetTheTeam />
    </section>
    <section class="bg-gradient-to-b from-[#FFF8E9] to-[#FEE] px-4 sm:px-6 md:px-0">
      <CustomersFeedback />
    </section>
    <section class="bg-gradient-to-b from-[#FEE] to-[#E5E3FFBA] px-4 sm:px-6 md:px-0">
      <Cutomize />
    </section>
    <section class="bg-gradient-to-b from-[#E5E3FFBA] from-[8.85%] to-[#F8F3F7] px-4 sm:px-6 md:px-0">
      <Footer />
    </section>
    <LazyModalsRequestAuditModal v-if="needShowRequestAuditModal" @show="onRequestAuditModalShown" />
  </template>
</template>

<script setup lang="ts">
import {getLocalStorage} from "~/utils/localStorage";

const wasRequestAuditModalShownStorageKey = 'wasRequestAuditModalShown'

const needShowRequestAuditModal = ref(false)

onMounted(() => {
  const localStorage = getLocalStorage()
  needShowRequestAuditModal.value = Boolean(localStorage ? !localStorage.getItem(
      wasRequestAuditModalShownStorageKey
  ) : true);
})

const onRequestAuditModalShown = () => {
  getLocalStorage()?.setItem(wasRequestAuditModalShownStorageKey, '1')
}

const isMobileMenuOpen = ref(false)
const isHeaderBannerOpen = ref(true)

const breakpoint = useBreakpoint()

watch(breakpoint, () => {
  if(breakpoint.md) {
    isMobileMenuOpen.value = false
  }
})
</script>

<style lang="scss">
@import "@/assets/variables.scss";

:root {
  --va-font-family: 'Inter';
  --va-button-content-py: 10px;
  --va-button-content-px: 16px;
}
</style>

