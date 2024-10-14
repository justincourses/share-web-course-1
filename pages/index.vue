<template>
  <div
    class="w-full flex flex-col items-center justify-center min-h-screen bg-[url('/bg.jpg')] bg-cover bg-fixed">
    <div
      class="mb-4 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm bg-black/50 shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-pulse">
      <span class="flex items-center text-white">
        <UIcon name="i-heroicons-queue-list" class="mr-2" />
        waitlist
      </span>
    </div>
    <div class="mb-8">
      <h1 class="text-6xl font-bold text-white/80">Coming Soon!</h1>
    </div>
    <div
      class="bg-black/50 backdrop-blur-sm p-8 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] text-center border border-white/10 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-radial from-white/10 to-transparent opacity-50 animate-pulse"></div>
      <h2 class="text-3xl font-bold relative z-10">独立开发者 Justin 正式出发 🛫</h2>
      <p class="text-gray-300 my-12 relative z-10">
        🚀 重磅消息！我们即将推出几款超级有趣又实用的产品，绝对让你爱不释手！<br>
        😍 想第一时间体验吗？快来加入我们的 waitlist 吧！<br>
        💖 抢先体验、独家优惠，所有惊喜都为你准备好啦！<br>
        ✨ 别犹豫，现在就点击下方按钮，成为最酷的先行者！<br>
      </p>
      <UButton
        to="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__YcTadJUREdJSjNLUVVGNEhHSTVERlNOOUxOVVIxWi4u"
        target="_blank" variant="solid"
        class="px-6 bg-white/70 text-black hover:bg-gray-200/70 transition-colors duration-300 relative z-10">
        立即申请加入 waitlist
      </UButton>
    </div>
    <div class="mt-8 flex space-x-4">
      <a title="关注 X@interjc" href="https://x.com/interjc" target="_blank" rel="noopener noreferrer" class="text-2xl">
        <UIcon name="i-simple-icons-x" />
      </a>
      <a title="关注我的公众号 @justinjapan" href="https://s.zhaikr.com/vj" target="_blank" rel="noopener noreferrer"
        class="text-2xl">
        <UIcon name="i-simple-icons-wechat" />
      </a>
      <a title="关注我的 Web 开发课程" href="https://s.zhaikr.com/c" target="_blank" rel="noopener noreferrer" class="text-2xl">
        <UIcon name="i-heroicons-academic-cap" />
      </a>
    </div>
  </div>
</template>

<script setup></script>
