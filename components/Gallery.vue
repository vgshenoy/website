<template>
  <!-- <ul class="columns is-multiline">
    <li class="project column is-half" v-for="(p, i) in projects" :key="p.id">
      <a @click="goToProject(p.id)">
        <div>
          <img-wrapper :src="p.thumb"></img-wrapper>
        </div>
        <div class="content">
          <strong>
            {{p.title}}
          </strong>
          <span class="short-desc">{{p.shortDesc}} </span>
        </div>
      </a>
    </li>
  </ul> -->
  <ul>
    <li class="project" v-for="(p, i) in projects" :key="p.id">
      <a @click="goToProject(p.id)">
        <div class="columns">
          <div class="column is-7 content">
            <div class="content">
              <p>
                <strong>{{p.title}}</strong>
                <span class="short-desc" v-html="p.shortDesc"></span>
              </p>
            </div>
            <div class="tags">
              <span class="tag" v-for="role in p.roles">{{role}}</span>
            </div>
          </div>
          <div class="column">
            <img-wrapper :src="p.thumb"></img-wrapper>
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
  // margin-bottom: 30px;
  .columns {
    align-items: center;
    transition: all 300ms;
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