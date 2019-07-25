<template>
  <div class="banner">
    <div class="container">
      <h2>{{title}}</h2>
      <h2>{{ body }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "body"]
};
</script>
