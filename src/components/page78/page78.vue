<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div
        class="page67 page"
        v-show="pageStatus"
      >
        <div
          class="page_content"
          @click="goNextStage"
        >
          <img class="page_bg" src="./page78.png" alt="">
          <div class="monkey">
            <div class="monkey_content">
              <img src="./stage-monkey.png" alt="">
            </div>
          </div>
          <div
            v-show="goStatus"
            class="bonus bounce"
            :class="goStatus ? 'bonus_active':''"
          >
            <div class="bonus_content">
              <img src="./bonus.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <page79 v-if="!pageStatus"></page79>
      <audio ref="audio" src="./static/MonkeyBusiness/79.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page79 from 'components/page79/page79'
  import {goToNext} from 'common/js/mixins'

  export default {
    mixins: [goToNext],
    data() {
      return {
        goStatus: true
      }
    },
    methods: {
      goNextStage() {
        this.audioLoad()
        this.goNext(79)
        this.audioPlay()
      }
    },
    components: {
      page79
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .monkey {
    position: absolute;
    width: percent(74, 1280);
    height: percent(111, 720);
    z-index: 2;
    left: percent(1059, 1280);
    top: percent(110, 720);
  }

  .bonus {
    position: absolute;
    width: percent(139, 1280);
    height: percent(247, 720);
    z-index: 2;
    left: percent(284, 1280);
    top: percent(390, 720);
    overflow: hidden;
  }
</style>
