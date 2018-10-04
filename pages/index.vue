<template>
  <div>
    <section class="section intro">
      <p>
        Hi there, I'm <a href="#about"><strong>Vignesh Shenoy</strong></a>. I work at the intersection of design, code and data to build compelling products and experiences. Here are a few projects I've worked on over the past few years.
      </p>
    </section>
    
    <section class="section projects" id="projects">
      <div class="title">Projects</div>
      <gallery :projects="projects"></gallery>
    </section>
  
    <section class="section about" id="about">
      <div class="title">About</div>
      <div class="content">
        <p> 
          I'm an engineer and designer based in Bangalore, India. I currently do freelance work on product development. If you have an interesting idea or project on your hands, would love to <a href="mailto: vignesh.shenoy@gmail.com">chat</a>.
        </p>
        <p>
          In the past, I grokked design, engineering and business at
          <a target="_blank" href="https://yoky.io">Yoky</a>,
          <a target="_blank" href="https://gida.in">Gida</a> and
          <a target="_blank" href="http://www.mckinsey.com/">McKinsey & Company</a>. Earlier, I studied engineering at
          <a target="_blank" href="https://www.iitm.ac.in/">IIT Madras</a>.
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
import projects from '~/static/projects'
import socialLinks from '~/static/socialLinks'

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
.links {
  margin-top: 6vh;
}
</style>