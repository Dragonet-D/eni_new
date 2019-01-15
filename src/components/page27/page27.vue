<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page27 page" v-if="pageStatus">
        <div class="page_content" @click="goNextStage">
          <img class="page_bg" src="./page27.png" alt="">
          <div
            class="monkey"
            :class="goStatus? 'monkey_active': ''"
            v-show="monkeyShow"
          >
            <div class="monkey_content">
              <img src="./stage-monkey.png" alt="">
            </div>
          </div>
          <div
            class="after bounce"
            v-show="goAfter"
          >
            <img src="./stage2-2.png" alt="">
          </div>
        </div>
      </div>
      <page28 v-if="!pageStatus"></page28>
      <audio ref="audio" src="./static/MonkeyBusiness/16.mp3"></audio>
      <audio id="audio_page28" ref="audio17" src="./static/MonkeyBusiness/17.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page28 from 'components/page28/page28'
  import {goToNext} from 'common/js/mixins'

  export default {
    mixins: [goToNext],
    data() {
      return {
        goStatus: false,
        monkeyShow: true,
        goBefore: false,
        goAfter: true
      }
    },
    methods: {
      goNextStage() {
        this.audioLoad()
        this.audioLoad('audio17')
        this.goStatus = true
        setTimeout(() => {
          this.audioPlay()
          this.goNext(28)
        }, 2000)
        setTimeout(() => {
          this.audioPlay('audio17')
        }, 5000)
      }
    },
    components: {
      page28
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/pure.scss";

  .monkey {
    position: absolute;
    width: percent(74, 1280);
    height: percent(111, 720);
    z-index: 3;
    left: percent(316, 1280);
    top: percent(245, 720);
    transition: 2s;
  }

  .monkey_active {
    left: percent(496, 1280);
    top: percent(143, 720);
  }
  .after {
    position: absolute;
    z-index: 2;
    width: percent(190, 1280);
    height: percent(290, 720);
    left: percent(440, 1280);
    top: percent(-18, 720);
  }
</style>
