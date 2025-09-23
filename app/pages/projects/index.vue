<template>
  <div>
    <UPageSection class="mb-12">
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
        <div
          v-for="project in projects"
          :key="project.id"
          class="cursor-pointer transition-all duration-200 group"
          @click="goToProject(project)"
        >
          <div class="aspect-video overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg">
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
              <a class="text-primary font-semibold">{{ project.title }}</a> {{ project.shortDesc }}
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
        </div>
      </div>
    </UPageSection>
  </div>
</template>

<script setup>
import { projects } from '~/data/projects'

const goToProject = (project) => {
  if (project.link) {
    window.open(project.link, '_blank')
  }
  else {
    navigateTo(`/projects/${project.id}`)
  }
}
</script>
