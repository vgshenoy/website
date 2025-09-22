<template>
  <div>
    <UPageHero
      :ui="{
        container: '!py-16',
        title: '!text-5xl',
      }"
    >
      <template #title>
        {{ project.title }}
      </template>
      <template #description>
        <div class="flex flex-wrap gap-2 mb-4 justify-center">
          <UBadge
            v-for="role in project.roles"
            :key="role"
            variant="soft"
            color="neutral"
          >
            {{ role }}
          </UBadge>
        </div>
      </template>
    </UPageHero>

    <UPageSection>
      <ContentRenderer :value="contentData" />

      <div
        v-if="project.info"
        class="flex flex-wrap gap-16"
      >
        <div
          v-for="item in project.info"
          :key="item.heading"
          class="mb-6"
        >
          <h4 class="font-semibold text-sm text-muted uppercase tracking-wide mb-2">
            {{ item.heading }}
          </h4>
          <div
            class="text-sm flex items-center gap-2"
          >
            <span v-html="item.content" />
            <UIcon
              v-if="item.heading === 'Links' || item.heading === 'With'"
              name="i-lucide-arrow-up-right"
            />
          </div>
        </div>
      </div>
    </UPageSection>

    <UPageSection
      v-if="project.slides && project.slides.length > 0"
      :ui="{
        container: 'py-0 sm:py-0 lg:py-0',
      }"
    >
      <div class="space-y-12">
        <div
          v-for="(slide, index) in project.slides"
          :key="index"
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        >
          <div class="lg:col-span-2">
            <div
              v-if="slide.video"
              class="aspect-video rounded-lg overflow-hidden ring ring-default"
            >
              <video
                :src="slide.video"
                class="w-full h-full object-cover"
                autoplay
                loop
                muted
                controls
              >
                Your browser doesn't support embedded videos
              </video>
            </div>
            <div
              v-else-if="slide.img"
              class="aspect-video rounded-lg overflow-hidden ring ring-default"
            >
              <img
                :src="slide.img"
                :alt="`${project.title} slide ${index + 1}`"
                class="w-full h-full object-cover"
              >
            </div>
            <div
              v-else-if="slide.iframe"
              class="aspect-video rounded-lg overflow-hidden ring ring-default"
            >
              <div
                class="w-full h-full"
                v-html="slide.iframe"
              />
            </div>
          </div>
          <div class="lg:col-span-1">
            <div
              class="prose prose-sm"
              v-html="slide.text"
            />
          </div>
        </div>
      </div>
    </UPageSection>

    <UPageSection>
      <div class="flex justify-between items-center">
        <UButton
          v-if="prevProject"
          :to="`/projects/${prevProject.id}`"
          variant="link"

          icon="i-lucide-arrow-left"
        >
          {{ prevProject.title }}
        </UButton>
        <div v-else />
        <UButton
          v-if="nextProject"
          :to="`/projects/${nextProject.id}`"
          variant="link"
          trailing-icon="i-lucide-arrow-right"
        >
          {{ nextProject.title }}
        </UButton>
      </div>
    </UPageSection>
  </div>
</template>

<script setup>
import { projects } from '~/data/projects'

const route = useRoute()
const projectId = route.params.id

const project = computed(() => projects.find(p => p.id === projectId))
const projectIndex = computed(() => projects.findIndex(p => p.id === projectId))

const prevProject = computed(() => {
  const index = projectIndex.value
  return index > 0 ? projects[index - 1] : null
})

const nextProject = computed(() => {
  const index = projectIndex.value
  return index < projects.length - 1 ? projects[index + 1] : null
})

const { data: contentData } = await useAsyncData(`project-${projectId}`, () =>
  queryCollection('content').path(`/projects/${projectId}`).first(),
)

useHead(() => ({
  title: project.value ? `${project.value.title} - Vignesh Shenoy` : 'Project Not Found - Vignesh Shenoy',
  meta: [
    {
      name: 'description',
      content: project.value ? project.value.shortDesc : 'Project not found',
    },
  ],
}))

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found',
  })
}
</script>
