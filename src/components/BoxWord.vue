<template>
  <div :style="{ display: displayLine ? 'flex' : 'block' }">
    <div class="cueword" v-for="(item, id) in boxword" :key="id" :class="{ textindent: this.textIndent }" :style="{ width: this.boxWidth + 'px', fontSize: this.wordSize + 'px', marginTop: this.wordMarginTop + 'px', textAlign: wordCenter ? 'center' : 'left', lineHeight: this.wordSize + 15 + 'px' }">
      <div>{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxWord',
  props: {
    boxword: {
      type: Object,
      default: undefined,
      required: true,
    },
    textIndent: {
      type: Boolean,
      default: true,
    },
    boxWidth: {
      type: Number,
      default: 1550,
    },
    wordSize: {
      type: Number,
      default: 36,
    },
    wordCenter: {
      type: Boolean,
      default: false,
    },
    wordMarginTop: {
      type: Number,
      default: 0,
    },
    displayLine: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.cueword {
  width: 1550px;

  font-size: 36px;
  color: #fff;
  margin: 0;
  padding: 0;
  line-height: 60px;
  text-align: left;
}
.textindent {
  text-indent: 2em;
}
</style>
