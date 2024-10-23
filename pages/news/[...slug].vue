<template>
  <div class="pages-news flex flex-col items-center justify-center">
    <FeaturesWaitlistBoxContainer class="w-2/3">
      <ContentDoc class="text-gray-300 my-12" />
      <UButton to="/news" variant="solid"
        class="px-6 mt-2 bg-white/70 text-black hover:bg-gray-200/70 transition-colors duration-300 relative z-10">
        回到新闻页面
      </UButton>
    </FeaturesWaitlistBoxContainer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'news',
});
</script>

<style>
.pages-news {
  min-height: calc(100vh - 100px);
}
</style>
