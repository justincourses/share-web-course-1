<template>
  <div class="container mx-auto px-4">
    <FeaturesWaitlistBoxContainer class="my-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ContentList path="/news" v-slot="{ list }">
          <div v-for="article in list" :key="article._path" class="bg-white shadow-md rounded-lg overflow-hidden">
            <NuxtLink :to="article._path" class="block hover:opacity-75 transition-opacity duration-300">
              <img v-if="article.image" :src="article.image" :alt="article.title" class="w-full h-48 object-cover">
              <div class="p-4">
                <h2 class="text-xl font-semibold mb-2 text-gray-700">{{ article.title }}</h2>
                <p class="text-gray-400 mb-4">{{ article.description }}</p>
              </div>
            </NuxtLink>
          </div>
        </ContentList>
      </div>
    </FeaturesWaitlistBoxContainer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'news',
});

const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
};
</script>

<style>
.pages-news {
  min-height: calc(100vh - 100px);
}
</style>
