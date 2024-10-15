<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: '默认站点标题',
  meta: [
    { hid: 'description', name: 'description', content: '这是默认的站点描述' }
  ]
})
</script>
