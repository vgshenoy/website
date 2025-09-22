<template>
  <div>
    <!-- Intro Section -->
    <UPageSection class="max-w-xl mx-auto text-center">
      <ContentRenderer
        :value="data"
        class="text-xl mb-6"
      />
    </UPageSection>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('home', () => queryCollection('content').path('/home').first())
</script>
