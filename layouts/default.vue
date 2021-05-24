<template>
  <div>
    <div class="main-column">
      <Nuxt />
    </div>
    <div id="screen" class="screen pulled-up"></div>
  </div>
</template>

<style>
.main-column {
  max-width: 750px;
  margin: auto;
}

.screen {
  background-color: tomato;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.is-transition {
  transition: all 600ms;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
}
.screen.pulled-up {
  transform: translate3d(0, -99.5%, 0);
}
.screen.pulled-down {
  transform: translate3d(0, 99.5%, 0);
}
</style>
