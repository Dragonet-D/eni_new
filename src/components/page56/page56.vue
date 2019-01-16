<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page56 page" v-show="pageStatus">
        <div class="page_content" @click="goNextStage">
          <img class="page_bg" src="./page56.png" alt="">
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
            <img src="./stage5-2.png" alt="">
          </div>
        </div>
      </div>
      <page57 v-if="!pageStatus"></page57>
      <audio id="audio_page57" ref="audio" src="./static/MonkeyBusiness/61.mp3"></audio>
      <audio ref="audio62" src="./static/MonkeyBusiness/62.mp3"></audio>
      <audio id="audio_page57_1" ref="audio0" src="./static/MonkeyBusiness/62.mp3"></audio>
      <audio id="audio_page57_2" ref="audio1" src="./static/MonkeyBusiness/18.mp3"></audio>
      <audio id="audio_page57_3" ref="audio2" src="./static/MonkeyBusiness/64.mp3"></audio>
      <audio id="audio_page57_4" ref="audio3" src="./static/MonkeyBusiness/65.mp3"></audio>
      <audio id="audio_page57_5" ref="audio4" src="./static/MonkeyBusiness/21.mp3"></audio>
      <audio id="audio_page57_6" ref="audio5" src="./static/MonkeyBusiness/11.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page57 from 'components/page57/page57'
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
        this.$refs.audio0.load()
        this.$refs.audio1.load()
        this.$refs.audio2.load()
        this.$refs.audio3.load()
        this.$refs.audio4.load()
        this.$refs.audio5.load()
        this.audioLoad('audio62')
        setTimeout(() => {
          this.audioPlay()
          this.goNext(57)
        }, 2000)
        setTimeout(() => {
          this.audioPlay('audio62')
          this.goNext(57)
        }, 4000)
      }
    },
    components: {
      page57
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
    left: percent(726, 1280);
    top: percent(414, 720);
    transition: 2s;
  }

  .monkey_active {
    left: percent(846, 1280);
    top: percent(232, 720);
  }

  .after {
    position: absolute;
    z-index: 2;
    width: percent(190, 1280);
    height: percent(290, 720);
    left: percent(782, 1280);
    top: percent(72, 720);
  }
</style>
