<template>
  <div class="banner">
    <div class="container-inner container">
      <h2>{{title}}</h2>
      <p class="whitespace-pre-wrap">{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "body"]
};
</script>
