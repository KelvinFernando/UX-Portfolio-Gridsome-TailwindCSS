<template>
  <div>
    <h2 class="mt-8">{{ title }}</h2>
    <p class="mt-5 whitespace-pre-wrap">{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "body"]
};
</script>
