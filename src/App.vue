<script setup lang="ts">
const links = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Create Project',
    path: '/create-project'
  }
]
</script>

<template>
  <div class="w-full h-screen flex flex-col">
    <nav class="h-20 bg-green-800 flex items-center justify-center gap-6">
      <RouterLink
        v-for="link in links"
        :key="link.name"
        :to="link.path"
        class="text-green-100 text-2xl font-bold no-underline hover:underline hover:text-white"
      >
        {{ link.name }}
      </RouterLink>
    </nav>

    <div class="flex-1">
      <RouterView />
    </div>
  </div>
</template>
