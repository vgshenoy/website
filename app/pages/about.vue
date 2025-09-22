<template>
  <div>
    <UPageSection>
      <ContentRenderer
        :value="data"
      />

      <!-- Social Links -->
      <div class="flex flex-wrap gap-4">
        <UButton
          v-for="link in socialLinks"
          :key="link.name"
          :to="link.url"
          target="_blank"
          variant="ghost"
          color="neutral"
        >
          <template #leading>
            <UIcon :name="getIconName(link.faClass)" />
          </template>
          {{ link.name }}
        </UButton>
      </div>
    </UPageSection>
  </div>
</template>

<script setup>
import { socialLinks } from '~/data/social-links'

const { data } = await useAsyncData('about', () => queryCollection('content').path('/about').first())

const getIconName = (faClass) => {
  const iconMap = {
    'fa-envelope': 'i-lucide-mail',
    'fa-twitter': 'i-simple-icons-x',
    'fa-instagram': 'i-simple-icons-instagram',
    'fa-github': 'i-simple-icons-github',
    'fa-youtube': 'i-simple-icons-youtube',
    'fa-linkedin': 'i-simple-icons-linkedin',
  }
  return iconMap[faClass] || 'i-lucide-external-link'
}
</script>
