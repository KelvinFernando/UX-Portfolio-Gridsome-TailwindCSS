<template>
  <div>
    <video width="auto" height="auto" playsinline autoplay muted loop>
      <source :src="vid" type="video/mp4">Your browser does not support the video tag.
    </video>

    <div class="px-6 py-4">
      <div class="font-bold text-2xl text-center mb-2 whitespace-pre-wrap">{{title}}</div>
      <p class="text-gray-700 text-base">{{subtitle}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["vid", "title", "subtitle"]
};
</script>

<style lang="scss" scoped>
</style>