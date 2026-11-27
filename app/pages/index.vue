<template>
  <div>
    <!-- Intro Section -->
    <UPageSection class="max-w-xl mx-auto text-center min-h-[70svh] flex flex-col justify-center">
      <ContentRenderer
        :value="data"
        class="mb-6 text-xl"
      />
    </UPageSection>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('home', () => queryCollection('content').path('/home').first())
</script>
