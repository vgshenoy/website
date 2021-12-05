<template>
  <div>
    <section class="section intro">
      <div class="content">
        <p>
          Hi, I'm <a href="#about"><strong>Vignesh Shenoy</strong></a
          >. I work at the intersection of design, code and data to build
          compelling products and experiences.
        </p>
        <p>
          Reach me at
          <a href="mailto:vignesh.shenoy@gmail.com">
            <span class="icon">
              <i class="fa fa-envelope"></i>
            </span>
            vignesh.shenoy@gmail.com </a
          >. I'm also on
          <span
            v-for="(link, i) in socialLinks.filter((l) => l.name !== 'Email')"
            :key="link.name"
          >
            {{
              i === 0 ? '' : i === socialLinks.slice(1).length - 1 ? 'and' : ','
            }}
            <a :href="link.url" target="_blank" :title="link.name">
              <span class="icon">
                <i class="fa" :class="link.faClass"></i>
              </span>
              <span>{{ link.name }}</span>
            </a> </span
          >.
          <!-- <a href="https://github.com/vgshenoy" target="_blank">Github</a>,
          <a href="https://twitter.com/vgshenoy" target="_blank">Twitter</a>,
          <a href="https://www.youtube.com/user/etothepipplus1/videos" target="_blank">YouTube</a>,
          <a href="https://instagram.com/vigneshenoy" target="_blank">Instagram</a>
          and <a href="https://linkedin.com/in/vigneshenoy" target="_blank">LinkedIn</a>. -->
        </p>
        <p>More about me <a href="#awards">here</a>.</p>
      </div>
    </section>

    <section id="projects" class="section projects">
      <div class="title is-4">Projects</div>
      <Gallery :projects="projects" />
    </section>

    <section id="awards" class="section">
      <div class="title is-4">Awards</div>
      <div class="content">
        <p>
          <a
            href="https://pudding.cool/process/pudding-cup-2019/"
            target="_blank"
            >Pudding Cup</a
          >
          for
          <span class="is-italic"
            >Tottenham vs Man United, Premier League 2018-19, Jan 2019</span
          >
        </p>
        <p>
          <a
            href="https://www.informationisbeautifulawards.com/showcase/3811-kohli-s-path-to-10-000-runs-charted"
            target="_blank"
            >Information is Beautiful Awards shortlist</a
          >
          for
          <span class="is-italic">Kohli races to 10,000 runs, Oct 2019</span>
        </p>
      </div>
    </section>

    <section id="about" class="section about">
      <div class="title is-4">About</div>
      <div class="content">
        <p>I'm an engineer/designer based in Amsterdam, Netherlands.</p>
        <p>
          I currently lead Frontend Engineering at
          <a target="_blank" href="https://scisports.com">SciSports</a>, where
          we build data-driven interfaces to help football clubs make better
          decisions.
        </p>
        <p>
          In the preceding years, I built a variety of
          <a href="#projects">products and experiences</a>, working with
          startups as well as larger companies.
        </p>
        <p>
          Before that, I worked as a consultant with
          <a target="_blank" href="https://www.mckinsey.com/"
            >McKinsey & Company</a
          >
          after having studied engineering at
          <a target="_blank" href="https://www.iitm.ac.in/">IIT Madras</a>.
        </p>
        <p>
          When I'm not working on professional projects, I enjoy travelling,
          hiking and diving (while documenting these on
          <a
            href="https://youtube.com/user/etothepipplus1/videos"
            target="_blank"
            >Youtube</a
          >
          and
          <a href="https://instagram.com/vigneshenoy" target="_blank"
            >Instagram</a
          >). Playing competitive sports has been a big part of my life since a
          young age - cricket, football and ultimate frisbee are my all-time
          faves.
        </p>
      </div>
      <ul class="links columns is-multiline">
        <li
          v-for="link in socialLinks"
          :key="link.name"
          class="link column is-one-fifth"
        >
          <div>
            <a :href="link.url" target="_blank" :title="link.name">
              <span class="icon">
                <i class="fa" :class="link.faClass"></i>
              </span>
              <span>{{ link.name }}</span>
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
  components: {
    Gallery,
  },
  transition: 'home',
  data() {
    return {
      projects,
      socialLinks,
    }
  },
  mounted() {
    const screen = document.getElementById('screen')
    screen.classList.add('pulled-up')
  },
}
</script>

<style lang="scss">
.section {
  padding-bottom: 1.5rem;
}
a {
  padding-left: 0;
  padding-right: 0;
}

.intro {
  a {
    white-space: nowrap;
  }
}
.links {
  margin-top: 6vh;
}
.link {
  white-space: nowrap;
}
</style>
