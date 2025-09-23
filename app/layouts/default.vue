<template>
  <div class="relative">
    <ParticlesBg
      v-if="route.name === 'index'"
      class="fixed inset-0 -z-10"
      :quantity="100"
      :ease="100"
      :color="'#ff6467'"
      :staticity="10"
    />
    <UContainer>
      <div class="flex flex-col justify-center items-center">
        <AppNav />
      </div>
      <div class="min-h-[70svh] flex flex-col justify-center items-center">
        <NuxtPage />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useColorMode } from "@vueuse/core"

const route = useRoute()
const isDark = computed(() => useColorMode().value === "dark")
</script>
