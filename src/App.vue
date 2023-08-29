<template>
  <div id="app">
    <div class="bigbox">
      <img :src="bgImg" alt="" class="bgImg" />

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {},
  data() {
    return {
      bgImg: 'https://img.js.design/assets/img/64a6c335c6ce3224527c27a4.png#d43e855f4cd851231b618daf33a7a2b4',
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
    }
  },
  mounted() {
    this.handleResize()

    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.viewportWidth = window.innerWidth
      this.viewportHeight = window.innerHeight
      const body = document.querySelector('.bigbox')
      if (this.viewportHeight <= 1080 && this.viewportWidth <= 1920) {
        body.style.top = '0'
        body.style.left = '0'
        body.style.transform = 'translate(0, 0)'
      } else if (this.viewportHeight <= 1080) {
        body.style.top = '0'
        body.style.left = '50%'
        body.style.transform = 'translate(-50%,0)'
      } else if (this.viewportWidth <= 1920) {
        body.style.top = '50%'
        body.style.left = '0'
        body.style.transform = 'translate(0, -50%)'
      } else {
        body.style.top = '50%'
        body.style.left = '50%'
        body.style.transform = 'translate(-50%, -50%)'
      }
      console.log('w' + this.viewportWidth)
      console.log('h' + this.viewportHeight)
    },
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '思源黑体';
}
a {
  text-decoration: none;
}
ul,
li {
  list-style: none;
}
#app {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.5);

  .bigbox {
    position: absolute;
    // margin: auto;
    width: 1920px;
    height: 1080px;
    position: relative;
    overflow: hidden;

    .bgImg {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
    }
  }
}
</style>
