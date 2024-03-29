<template>
  <div>
    <a class="has-text-centered" @click="goToHome()">
      <div>
        <span class="icon">
          <i class="fa fa-angle-up"></i>
        </span>
      </div>
      <div>Back to Home</div>
    </a>

    <div class="section project">
      <div class="title">{{ project.title }}</div>

      <div class="tags">
        <span v-for="role in project.roles" :key="role" class="tag">{{
          role
        }}</span>
      </div>

      <div class="content" v-html="project.desc" />

      <div class="columns projects">
        <div
          v-for="item in project.info"
          :key="item.projectId"
          class="column item"
        >
          <small>
            <strong>{{ item.heading }}</strong>
          </small>
          <div class="content item-content is-small" v-html="item.content" />
        </div>
      </div>

      <div class="slides">
        <div
          v-for="(slide, i) in project.slides"
          :key="i"
          class="slide columns"
        >
          <figure class="image column is-9">
            <template v-if="slide.video">
              <div class="slide-video-wrapper">
                <video
                  class="slide-video"
                  :src="slide.video"
                  width="100%"
                  height="100%"
                  autoplay
                  loop
                >
                  Sorry your browsers doesn't support embedded videos
                </video>
              </div>
            </template>
            <template v-if="slide.iframe">
              <div class="frame-spacer"></div>
              <div class="frame-container" v-html="slide.iframe"></div>
            </template>
            <template v-else-if="slide.img">
              <img-wrapper :src="slide.img"></img-wrapper>
            </template>
          </figure>
          <div class="column">
            <div class="slide-text">
              <div v-if="slide.text" class="content" v-html="slide.text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr />
    <nav class="level bottom-projects">
      <div class="level-left">
        <div v-if="prevProject" class="level-item">
          <a @click="goToPrevProject()">
            <span class="icon">
              <i class="fa fa-angle-left"></i>
            </span>
            <span>{{ prevProject.title }}</span>
          </a>
        </div>
      </div>
      <div class="level-right">
        <div v-if="nextProject" class="level-item">
          <a @click="goToNextProject()">
            <span>{{ nextProject.title }}</span>
            <span class="icon">
              <i class="fa fa-angle-right"></i>
            </span>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import projects from '~/assets/projects'
import ImgWrapper from '~/components/ImgWrapper'

export default {
  components: { ImgWrapper },
  transition: 'project',
  asyncData({ params }) {
    return {
      projectId: params.id,
      projects,
    }
  },
  computed: {
    project() {
      return this.projects.find((p) => p.id === this.projectId)
    },
    projectInd() {
      return this.projects.findIndex((p) => p.id === this.projectId)
    },
    nextProject() {
      if (this.projectInd === this.projects.length - 1) {
        // last one
        return null
      } else {
        return this.projects[this.projectInd + 1]
      }
    },
    prevProject() {
      if (this.projectInd === 0) {
        // first one
        return null
      } else {
        return this.projects[this.projectInd - 1]
      }
    },
  },
  mounted() {
    const screen = document.getElementById('screen')
    screen.classList.remove('pulled-up')
    screen.classList.add('pulled-down')
  },
  methods: {
    goToHome() {
      const screen = document.getElementById('screen')
      screen.classList.add('is-transition')
      screen.classList.remove('pulled-down')
      setTimeout(() => {
        this.$router.push(`/`)
      }, 600)
    },
    goToNextProject() {
      if (!this.nextProject) return
      const screen = document.getElementById('screen')
      screen.classList.add('is-transition')
      screen.classList.remove('pulled-down')
      setTimeout(() => {
        this.$router.push(`/projects/${this.nextProject.id}`)
      }, 600)
    },
    goToPrevProject() {
      if (!this.prevProject) return
      const screen = document.getElementById('screen')
      screen.classList.add('is-transition')
      screen.classList.remove('pulled-down')
      setTimeout(() => {
        this.$router.push(`/projects/${this.prevProject.id}`)
      }, 600)
    },
  },
}
</script>

<style lang="scss" scoped>
.project {
  margin-top: 50px;
}
.slide {
  margin-top: 40px;
  .frame-spacer {
    width: 100%;
    padding-top: 58%;
  }
  .frame-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0.75rem;
  }
  .slide-text {
    font-size: 80%;
  }
  .slide-video-wrapper {
    border: 1px solid #eee;
  }
}

.bottom-projects {
  margin-bottom: 150px;
}
</style>
