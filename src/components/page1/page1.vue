<template>
  <div class="page_wrapper">
    <div
      class="page1 page"
      v-show="pageStatus">
      <div
        class="page_content">
        <img src="./1.png"
             alt="">
      </div>
    </div>
    <page2 v-if="!pageStatus"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import page2 from 'components/page2/page2'
  import {goToNext} from 'common/js/mixins'

  export default {
    mixins: [goToNext],
    mounted() {
      this.timer = setTimeout(() => {
        this.goNext(2)
      }, 2000)
    },
    data() {
      return {
        pageStatus: true
      }
    },
    components: {
      page2
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
</style>
