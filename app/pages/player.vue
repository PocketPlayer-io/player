<template>
  <iframe id="player" type="text/html" width="100%" class="aspect-16/9"
          :src="'https://www.youtube.com/embed/'+route.query.id+'?enablejsapi=1&controls=0'"
          frameborder="0"  allow="autoplay; fullscreen; encrypted-media"></iframe>
</template>

<script setup lang="ts">
definePageMeta({
  'layout': 'player'
})
const route = useRoute();
</script>#