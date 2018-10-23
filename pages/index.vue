<template>
  <div>
    <section class="section intro">
      <p>
        Hi, I'm <a href="#about"><strong>Vignesh Shenoy</strong></a>. I work at the intersection of design, code and data to build compelling products and experiences. These are a few projects I've worked on over the past few years.
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
          I'm an engineer and designer based in Bangalore, India. I currently do freelance work on product development spanning engineering, prototyping and product management. If you have an interesting idea or project on your hands, let's <a href="mailto: vignesh.shenoy@gmail.com">chat</a>.
        </p>
        <p>
          Prior to building things such as those above, I was a consultant at <a target="_blank" href="http://www.mckinsey.com/">McKinsey & Company</a>, where I helped blue chip companies with their business, strategy and operations across India and Asia. Earlier, I studied engineering at
          <a target="_blank" href="https://www.iitm.ac.in/">IIT Madras</a>.
        </p>
        <p>
          When I'm not working on professional projects, I enjoy adventure travel (documented on <a href="http://youtube.com/user/etothepipplus1/videos">Youtube</a> and <a href="http://instagram.com/vigneshenoy">Instagram</a>) and playing competitive sports (ultimate frisbee and football are my jam these days).
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
.links {
  margin-top: 6vh;
}
</style>