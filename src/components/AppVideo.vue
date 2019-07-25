<template>
  <video width="auto" height="auto" controls class="mt-10 mb-20 container z-0">
    <source :src="vid" type="video/mp4" />Your browser does not support the video tag.
  </video>
</template>


<script>
export default {
  props: ["vid"]
};
</script>
