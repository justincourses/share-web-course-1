<template>
  <div class="pages-waitlist flex flex-col items-center justify-center">
    <FeaturesWaitlistLabelMini />
    <CommonTitlePrimary />
    <FeaturesWaitlistBoxContainer>
      <FeaturesWaitlistBoxHeader />
      <ContentDoc class="text-gray-300 my-12" />
      <FeaturesWaitlistBoxJoinButton />
    </FeaturesWaitlistBoxContainer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'waitlist',
});
</script>

<style>
.pages-waitlist {
  min-height: calc(100vh - 100px);
}
</style>
