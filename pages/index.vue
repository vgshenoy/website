<template>
  <div>
    <section class="section intro">
      <div class="content">
        <p>
          Hi, I'm <a href="#about"><strong>Vignesh Shenoy</strong></a>. I work at the intersection of design, code and data to build compelling products and experiences.
        </p>
        <p>
          Reach me at
          <a href="mailto:vignesh.shenoy@gmail.com">
            <span class="icon">
              <i class="fa fa-envelope"></i>
            </span>
            vignesh.shenoy@gmail.com
          </a>. I'm also on
          <span v-for="(link,i) in socialLinks.slice(1)" :key="link.name">
            {{i === 0 ? '' : i === socialLinks.slice(1).length - 1 ? 'and' : ','}}
            <a :href="link.url" target="_blank" :title="link.name">
              <span class="icon">
                <i class="fa" :class="link.faClass"></i>
              </span>
              <span>{{link.name}}</span>
            </a>
          </span>.
          <!-- <a href="https://github.com/shenoy" target="_blank">Github</a>,
          <a href="https://twitter.com/vgshenoy" target="_blank">Twitter</a>,
          <a href="https://www.youtube.com/user/etothepipplus1/videos" target="_blank">YouTube</a>,
          <a href="https://instagram.com/vigneshenoy" target="_blank">Instagram</a>
          and <a href="https://linkedin.com/in/vigneshenoy" target="_blank">LinkedIn</a>. -->
        </p>
        <p>
          More about me <a href="#about">here</a>.
        </p>
      </div>
    </section>

    <section class="section projects" id="projects">
      <div class="title">Projects</div>
      <gallery :projects="projects"></gallery>
    </section>

    <section class="section about" id="about">
      <div class="title">About</div>
      <div class="content">
        <p>
          I'm an engineer + designer based in Amsterdam, Netherlands. I currently work on bringing football insights to clubs and fans at <a target="_blank" href="https://scisports.com">SciSports</a>. Earlier, I built a variety of products/experiences, working with startups as well as larger companies.
        </p>
        <p>
          Prior to that, I worked as a consultant with <a target="_blank" href="http://www.mckinsey.com/">McKinsey & Company</a> after having studied engineering at
          <a target="_blank" href="https://www.iitm.ac.in/">IIT Madras</a>.
        </p>
        <p>
          When I'm not working on professional projects, I like to travel, hike and dive (while documenting these <a href="http://youtube.com/user/etothepipplus1/videos" target="_blank">Youtube</a> and <a href="http://instagram.com/vigneshenoy" target="_blank">Instagram</a>). I also enjoy playing competitive team sports - football, ultimate frisbee and cricket are my jam these days.
        </p>
      </div>
      <ul class="links columns is-multiline">
        <li class="link column is-one-fifth" v-for="link in socialLinks" :key="link.name">
          <div>
            <a :href="link.url" target="_blank" :title="link.name">
              <span class="icon">
                <i class="fa" :class="link.faClass"></i>
              </span>
              <span>{{link.name}}</span>
            </a>
          </div>
        </li>
      </ul>
    </section>

  </div>
</template>

<script>

import Gallery from '~/components/Gallery.vue'
import projects from '~/assets/projects'
import socialLinks from '~/assets/socialLinks'

export default {
  transition: 'home',
  components: {
    Gallery
  },
  data() {
    return {
      projects,
      socialLinks
    }
  },
  mounted() {
    let screen = document.getElementById('screen');
    screen.classList.add('pulled-up');
  }
}
</script>

<style lang="scss">
.intro {
  a {
    white-space: nowrap;
  }
}
.links {
  margin-top: 6vh;
}
</style>
