<template>
  <div class="pages-waitlist flex flex-col items-center justify-center">
    <FeaturesWaitlistLabelMini />
    <CommonTitlePrimary />
    <FeaturesWaitlistBoxContainer>
      <ContentDoc class="text-gray-300 my-12" />
      <UButton to="/" variant="solid"
        class="px-6 mt-2 bg-white/70 text-black hover:bg-gray-200/70 transition-colors duration-300 relative z-10">
        回到首页
      </UButton>
    </FeaturesWaitlistBoxContainer>
  </div>
</template>

<script setup>
</script>

<style>
.pages-waitlist {
  min-height: calc(100vh - 100px);
}
</style>
