<template>
  <section class="bg-[#1f6fed]">
    <header class="px-3 py-3">Header

      <ul class="flex li"><a href="/login">Login</a></ul></header>
  </section>
  <main class="min-h-screen bg-red-400 py-3 px-3">
    <slot></slot>
  </main>
  <footer class="bg-[#1f6fed] px-3 py-3">
    Footer
  </footer>
</template>
<script setup lang="ts">
</script>