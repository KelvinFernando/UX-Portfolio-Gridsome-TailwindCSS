<template>
  <div>
    <g-image :src="image" class="border-black w-full" :alt="alt"></g-image>

    <div class="px-6 py-4">
      <div class="font-bold text-2xl text-center mb-2 whitespace-pre-wrap">{{title}}</div>
      <p class="text-gray-700 text-base">{{subtitle}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "alt", "title", "subtitle"]
};
</script>

<style lang="scss" scoped>
</style>