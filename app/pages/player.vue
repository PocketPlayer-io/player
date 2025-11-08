<template>
  <iframe id="player" type="text/html" width="640" height="390"
          :src="'https://www.youtube.com/embed/'+route.query.id+'?enablejsapi=1&autoplay=0'"
          frameborder="0"></iframe>
</template>

<script setup lang="ts">
const route = useRoute();
</script>#