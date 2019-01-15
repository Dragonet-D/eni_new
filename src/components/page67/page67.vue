<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page67 page" v-show="pageStatus">
        <div class="page_content" @click="goNextStage">
          <img class="page_bg" src="./page67.png" alt="">
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
            <img src="./stage6-2.png" alt="">
          </div>
        </div>
      </div>
      <page68 v-if="!pageStatus"></page68>
      <audio id="audio_page68" ref="audio" src="./static/MonkeyBusiness/70.mp3"></audio>
      <audio ref="audio71" src="./static/MonkeyBusiness/71.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page68 from 'components/page68/page68'
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
        this.goStatus = true
        this.audioLoad()
        this.audioLoad('audio71')
        setTimeout(() => {
          this.goNext(68)
          this.audioPlay()
        }, 2000)
        setTimeout(() => {
          this.audioPlay('audio71')
        }, 4000)
      }
    },
    components: {
      page68
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .monkey {
    position: absolute;
    width: percent(74, 1280);
    height: percent(111, 720);
    z-index: 3;
    left: percent(850, 1280);
    top: percent(234, 720);
    transition: 2s;
  }

  .monkey_active {
    left: percent(1059, 1280);
    top: percent(110, 720);
  }

  .after {
    position: absolute;
    z-index: 2;
    width: percent(190, 1280);
    height: percent(290, 720);
    right: percent(96, 1280);
    top: percent(-20, 720);
  }
</style>
