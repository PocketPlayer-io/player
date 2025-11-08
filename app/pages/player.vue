<template>
  <iframe id="player" type="text/html" width="100%" class="aspect-16/9"
          :src="'https://www.youtube.com/embed/'+route.query.id+'?enablejsapi=1&autoplay=1'"
          frameborder="0"></iframe>
</template>

<script setup lang="ts">
const route = useRoute();
</script>#