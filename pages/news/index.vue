<template>
  <main>
    <ContentList path="/news" v-slot="{ list }">
      <a :href="article._path" :title="article.description" v-for="article in list" :key="article._path">
        {{ article.title }}
      </a>
    </ContentList>
  </main>
</template>
