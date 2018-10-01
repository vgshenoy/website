<template>
  <ul>
    <li class="project" v-for="(p, i) in projects" :key="p.id">
      <a @click="goToProject(p.id)">
        <div class="columns">
          <div class="column is-half">
            <img-wrapper :src="p.thumb"></img-wrapper>
          </div>
          <div class="column is-half content">
            <strong>
              {{p.title}}
            </strong>
            <span class="short-desc">{{p.shortDesc}} </span>
          </div>
        </div>
      </a>
      <hr v-if="i < projects.length - 1">
    </li>
  </ul>
</template>

<script>
import ImgWrapper from '~/components/ImgWrapper';

export default {
  components: {
    ImgWrapper
  },
  props: ['projects'],
  methods: {
    goToProject(projectId) {
      let screen = document.getElementById('screen');
      screen.classList.add('is-transition');
      screen.classList.remove('pulled-up');
      setTimeout(() => {
        this.$router.push(`/projects/${ projectId }`);
      }, 600);
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  margin-bottom: 30px;
  .columns {
    align-items: center;
  }
  .short-desc {
    color: #4a4a4a;
    margin-top: 20px;
  }
}
.project:last-child {
  // border-bottom: none;
}
</style>