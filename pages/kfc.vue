<template>
  <div class="pages-news flex flex-col items-center justify-center">
    <FeaturesWaitlistBoxContainer class="w-10/12 md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-4xl my-12">
      <div class="relative min-h-[300px]">
        <transition name="fade" mode="out-in">
          <div v-if="isLoading" class="absolute inset-0 flex flex-col items-center justify-center">
            <UIcon name="i-heroicons-arrow-path" class="w-12 h-12 text-gray-300 animate-spin mb-4" />
            <p class="text-gray-300">正在加载新的篇章...</p>
          </div>
          <div v-else class="text-gray-300 markdown-body text-left" v-if="randomArticle">
            <ContentRenderer :value="randomArticle">
              <div class="h-[100px] w-full mb-4 overflow-hidden relative">
                <img v-if="randomArticle.image" :src="randomArticle.image" :alt="randomArticle.title" class="w-full h-full object-cover absolute top-0 left-0" style="filter: brightness(1.1) contrast(1.1);">
              </div>
              <ContentRendererMarkdown :value="randomArticle" />
            </ContentRenderer>
          </div>
        </transition>
      </div>
      <UButton class="mt-4 text-gray-300 border border-gray-300 bg-transparent hover:bg-gray-700" variant="outline" @click="refreshArticle">翻开新篇章</UButton>
    </FeaturesWaitlistBoxContainer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'kfc'
});

const randomArticle = ref(null);
const isLoading = ref(true);

const fetchedArticle = async () => {
  isLoading.value = true;
  // 获取文章总数
  const count = await queryContent('kfc').count();

  const randomIndex = Math.floor(Math.random() * count);

  const articles = await queryContent('kfc')
    .limit(1)
    .skip(randomIndex)
    .find();

  randomArticle.value = articles[0];
  isLoading.value = false;
}

const refreshArticle = () => {
  isLoading.value = true;
  setTimeout(() => {
    fetchedArticle();
  }, 1500);
}

onMounted(async () => {
  await fetchedArticle();
});
</script>

<style>
.markdown-body {
  background: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
