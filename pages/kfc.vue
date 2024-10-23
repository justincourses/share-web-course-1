<template>
  <div class="pages-news flex flex-col items-center justify-center">
    <FeaturesWaitlistBoxContainer class="w-1/2">
      <div class="text-gray-300 my-12 markdown-body text-left" v-if="randomArticle">
        <ContentRendererMarkdown :value="randomArticle" />
      </div>
    </FeaturesWaitlistBoxContainer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'kfc'
});

const randomArticle = ref(null);

// 获取文章总数
const count = await queryContent('kfc').count();
console.log(`count`, count);

const randomIndex = Math.floor(Math.random() * count);
console.log(`randomIndex`, randomIndex);

const articles = await queryContent('kfc')
  .limit(1)
  .skip(randomIndex)
  .find();

randomArticle.value = articles[0];
</script>

<style>
.pages-news {
  min-height: calc(100vh - 100px);
}

.markdown-body {
  background: none;
}
</style>
