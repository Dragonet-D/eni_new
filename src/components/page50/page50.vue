<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page50 page" v-show="pageStatus">
        <div class="page_content" @click="goNextStage">
          <img class="page_bg" src="./page50.png" alt="">
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
            class="before"
            v-show="goBefore"
          >
            <img src="./stage4-1.png" alt="">
          </div>
          <div
            class="after"
            v-show="goAfter"
          >
            <img src="./stage4-2.png" alt="">
          </div>
        </div>
      </div>
      <page51 v-if="!pageStatus"></page51>
      <audio ref="audio" src="./static/MonkeyBusiness/50.mp3"></audio>
      <audio id="audio_page51" ref="audio51" src="./static/MonkeyBusiness/51.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page51 from 'components/page51/page51'
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
        this.audioLoad('audio51')
        setTimeout(() => {
          this.goNext(51)
          this.audioPlay()
        }, 2000)
        setTimeout(() => {
          this.audioPlay('audio51')
        }, 4000)
      }
    },
    components: {
      page51
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
    left: percent(557, 1280);
    top: percent(324, 720);
    transition: 2s;
  }

  .monkey_active {
    left: percent(725, 1280);
    top: percent(422, 720);
  }
  .before {
    position: absolute;
    z-index: 2;
    width: percent(190, 1280);
    height: percent(290, 720);
    left: percent(664, 1280);
    top: percent(255, 720);
  }

  .after {
    position: absolute;
    z-index: 2;
    width: percent(190, 1280);
    height: percent(290, 720);
    left: percent(656, 1280);
    top: percent(258, 720);
    animation: bounce .8s ease-in-out infinite;
    -webkit-animation: bounce .8s ease-in-out infinite;
  }
  @keyframes bounce {
    0% {
      transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
    }
    50% {
      transform: translate(0, percent(-20, 720));
      -webkit-transform: translate(0, percent(-20, 720));
    }
    100% {
      transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
    }
  }

  @-webkit-keyframes bounce {
    0% {
      transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
    }
    50% {
      transform: translate(0, percent(-20, 720));
      -webkit-transform: translate(0, percent(-20, 720));
    }
    100% {
      transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
    }
  }
</style>
