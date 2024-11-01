<template>
  <div id="kfc-container" class="w-full min-h-screen bg-cover bg-fixed bg-[url('/sitting.jpg')]" :style="kfcStyle">
    <slot />
    <CommonSocialLinks />
    <CommonFooter />
  </div>
</template>

<script setup>
const { randomKfcNumber } = useRandomKfc()

const kfcStyle = computed(() => ({
  backgroundImage: `url('https://picsum.photos/1280/960?blur=1&random=${randomKfcNumber.value}')`
}));
</script>
