<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page39 page" v-show="pageStatus">
        <div class="page_content" @click="goNextStage">
          <img class="page_bg" src="./page39.png" alt="">
          <div
            class="monkey"
            :class="goStatus? 'monkey_active': ''"
            v-show="monkeyShow"
          >
            <div
              class="monkey_content"
            >
              <img src="./stage-monkey.png" alt="">
            </div>
          </div>
          <div
            class="after bounce"
            v-show="goAfter"
          >
            <img src="./stage3-2.png" alt="">
          </div>
        </div>
      </div>
      <page40 v-if="!pageStatus"></page40>
      <audio ref="audio" src="./static/MonkeyBusiness/31.mp3"></audio>
      <audio id="audio_page40" ref="audio32" src="./static/MonkeyBusiness/32.mp3"></audio>
      <audio id="audio_page40_1" ref="audio0" src="./static/MonkeyBusiness/33.mp3"></audio>
      <audio id="audio_page40_2" ref="audio1" src="./static/MonkeyBusiness/34.mp3"></audio>
      <audio id="audio_page40_3" ref="audio2" src="./static/MonkeyBusiness/35.mp3"></audio>
      <audio id="audio_page40_4" ref="audio3" src="./static/MonkeyBusiness/36.mp3"></audio>
      <audio id="audio_page40_5" ref="audio4" src="./static/MonkeyBusiness/37.mp3"></audio>
      <audio id="audio_page40_6" ref="audio5" src="./static/MonkeyBusiness/11.mp3"></audio>
      <audio id="audio_page40_7" ref="audio6" src="./static/MonkeyBusiness/9.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page40 from 'components/page40/page40'
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
        this.audioLoad('audio0')
        this.audioLoad('audio1')
        this.audioLoad('audio2')
        this.audioLoad('audio3')
        this.audioLoad('audio4')
        this.audioLoad('audio5')
        this.audioLoad('audio6')
        this.audioLoad('audio32')
        setTimeout(() => {
          this.audioPlay()
          this.goNext(40)
        }, 2000)
        setTimeout(() => {
          this.audioPlay('audio32')
        }, 4000)
      }
    },
    components: {
      page40
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
    left: percent(508, 1280);
    top: percent(120, 720);
    transition: 2s;
  }

  .monkey_active {
    left: percent(538, 1280);
    top: percent(331, 720);
  }

  .after {
    position: absolute;
    z-index: 2;
    width: percent(150, 1280);
    height: percent(242, 720);
    left: percent(502, 1280);
    top: percent(224, 720);
  }
</style>
