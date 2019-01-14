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
            class="before"
            v-show="goBefore"
          >
            <img src="./stage3-1.png" alt="">
          </div>
          <div
            class="after animation_fruit"
            v-show="goAfter"
          >
            <img src="./stage3-2.png" alt="">
          </div>
        </div>
      </div>
      <page40 v-if="!pageStatus"></page40>
      <audio ref="audio" src="./static/MonkeyBusiness/31.mp3"></audio>
      <audio id="audio_page40" ref="audio32" src="./static/MonkeyBusiness/32.mp3"></audio>
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

  .before {
    position: absolute;
    z-index: 2;
    width: percent(190, 1280);
    height: percent(290, 720);
    left: percent(488, 1280);
    top: percent(168, 720);
  }

  .after {
    position: absolute;
    z-index: 2;
    width: percent(150, 1280);
    height: percent(242, 720);
    left: percent(502, 1280);
    top: percent(224, 720);
  }
  .animation_fruit {
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
