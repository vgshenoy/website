<template>
  <nav class="my-8">
    <div class="flex gap-6 justify-between items-center">
      <div class="flex gap-6">
        <ULink
          to="/"
          class="font-medium hover:text-primary transition-colors"
          :class="{ 'text-primary': $route.path === '/' }"
        >
          Home
        </ULink>
        <ULink
          to="/projects"
          class="font-medium hover:text-primary transition-colors"
          :class="{ 'text-primary': $route.path === '/projects' }"
        >
          Projects
        </ULink>
        <ULink
          to="/about"
          class="font-medium hover:text-primary transition-colors"
          :class="{ 'text-primary': $route.path === '/about' }"
        >
          About
        </ULink>
      </div>

      <ClientOnly v-if="!colorMode?.forced">
        <UButton
          :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          color="neutral"
          variant="ghost"
          @click="isDark = !isDark"
        />

        <template #fallback>
          <div class="size-8" />
        </template>
      </ClientOnly>
    </div>
  </nav>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  },
})
</script>
