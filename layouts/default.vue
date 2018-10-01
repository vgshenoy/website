<template>
  <div>
    <div class="main-column">
      <nuxt/>
    </div>
    <div id="screen" class="screen pulled-up"></div>
  </div>
</template>

<style>
body {
  /* font-family: 'Hind Guntur', sans-serif; */
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.main-column {
  max-width: 900px;
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
  transform: translate3d(0,0,0);
}
.screen.pulled-up {
	transform: translate3d(0,-99.5%,0);
}
.screen.pulled-down {
	transform: translate3d(0, 99.5%,0);
}
</style>
