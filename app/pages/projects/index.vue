<template>
  <div>
    <UPageSection class="mb-12">
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
        <NuxtLink
          v-for="project in projects"
          :key="project.id"
          :to="project.link || `/projects/${project.id}`"
          :target="project.link ? '_blank' : undefined"
          class="block transition-all duration-200 group"
        >
          <div class="aspect-3/2 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg">
            <img
              :src="project.thumb"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            >
          </div>

          <div class="space-y-3 mt-4">
            <p
              class="text-sm text-muted"
            >
              <span class="text-primary font-semibold">{{ project.title }}<UIcon
                v-if="project.link"
                name="i-lucide-arrow-up-right"
                class="inline-block size-4 align-[-0.1em] ml-0.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-label="opens in a new tab"
              /></span> {{ project.shortDesc }}
            </p>

            <div class="flex flex-wrap gap-1">
              <UBadge
                v-for="role in project.roles"
                :key="role"
                variant="soft"
                color="neutral"
              >
                {{ role }}
              </UBadge>
            </div>
          </div>
        </NuxtLink>
      </div>
    </UPageSection>
  </div>
</template>

<script setup>
import { projects } from '~/data/projects'
</script>
