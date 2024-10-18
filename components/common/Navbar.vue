<template>
  <div class="common-navbar-container flex items-center justify-center">
    <div class="common-navbar bg-black/50 backdrop-blur-sm flex items-center justify-center rounded-full">
      <nav class="px-6 py-2">
        <ul class="flex items-center space-x-2 text-gray-300">
          <li>
            <NuxtLink to="/" class="hover:text-white">Home</NuxtLink>
          </li>
          <li class="text-gray-500">|</li>
          <li>
            <NuxtLink to="/features" class="hover:text-white">Features</NuxtLink>
          </li>
          <li class="text-gray-500">|</li>
          <li>
            <NuxtLink to="/partners" class="hover:text-white">Partners</NuxtLink>
          </li>
          <li class="text-gray-500">|</li>
          <li>
            <NuxtLink to="/faq" class="hover:text-white">FAQ</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style>
.common-navbar-container {
  height: 40px;
  padding-top: 10px;
}

.common-navbar {
  height: 30px;
  width: auto;
  min-width: 600px;
}
</style>
