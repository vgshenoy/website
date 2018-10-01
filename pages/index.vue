<template>
  <section class="home section">
    <div class="title">Design. Tech. Data.</div>
    <div class="columns">
      <div class="column is-4">
        <!-- <div class="subtitle">Hi there!</div> -->
        <div class="content">
          <p class="">Hi there, I'm Vignesh Shenoy, a product engineer working at the intersection of design, code and data. This is a selection of my work.</p>
        </div>
        <div class="content">
          <p>
            <ul>
              <li>Twitter</li>
              <li>Github</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </p>
        </div>
      </div>
      <div class="column">
        <!-- <div class="subtitle">Projects</div> -->
        <gallery :projects="projects"></gallery>
      </div>
    </div>
  </section>
</template>

<script>
import Gallery from '~/components/Gallery.vue'
import projects from '~/static/projects'
import socialLinks from '~/static/socialLinks'

export default {
  components: {
    Gallery
  },
  data() {
    return {
      projects,
      socialLinks
    }
  }
}
</script>

<style>

</style>
