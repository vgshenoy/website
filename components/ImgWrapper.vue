<template>
  <div class="image-wrapper">
    <img :src="src.trace">
    <img class="real" :class="{'loaded': forceImageLoaded}" @load="$event.target.className = 'real loaded'" :src="src.src">
  </div>
</template>

<script>
export default {
  props: ['src'],
  data() {
    return {
      forceImageLoaded: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.forceImageLoaded = true;
    }, 2000);
  }
}
</script>

<style lang="scss" scoped>
.image-wrapper {
  position: relative;
}
img {
  width: 100%;
  border: 1px solid #EEE;
}

img.real {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: opacity 300ms;
}
img.real.loaded {
  opacity: 1;
}
</style>
