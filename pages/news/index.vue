<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = {
  // where: [{ layout: 'article' }], limit: 5, sort: [{ date: -1 }],
  path: '/news'
}
</script>

<template>
  <main>
    <ContentList :query="query" v-slot="{ list }">
      <a :href="article._path" v-for="article in list" :key="article._path">
        <h2 :title="article.description">{{ article.title }}</h2>
      </a >
    </ContentList>
  </main>
</template>
