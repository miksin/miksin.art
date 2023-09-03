<style scoped>
.link {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #424242;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: scale 251ms ease-in-out;
}

.link:hover {
  scale: 1.2;
}

.icon {
  width: 64%;
  height: 64%;
}
</style>

<script setup lang="ts">
defineProps<{
  src: string;
  href: string;
}>()
</script>

<template>
  <a class="link" :href="href" target="_blank" rel="noopener noreferrer">
    <img class="icon" :src="src" />
  </a>
</template>
