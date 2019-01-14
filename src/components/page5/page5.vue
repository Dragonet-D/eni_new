<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page2 page" v-show="pageStatus">
        <div class="page_content" @click="goNextStage(6)">
          <img class="page_bg" src="./page5.png" alt="">
          <div
            class="monkey"
            v-show="monkeyShow"
            :class="goStatus? 'monkey_active': ''"
          >
            <div class="monkey_content">
              <img src="./stage-monkey.png" alt="">
            </div>

          </div>
          <div
            class="before"
            v-show="goBfore"
          >
            <img src="./stage1-1.png" alt="">
          </div>
          <div
            class="after"
            v-show="goAfter"
          >
            <div class="after_content">
              <img src="./stage1-2.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <page6 v-if="!pageStatus"></page6>
      <audio ref="audio" src="./static/MonkeyBusiness/4.mp3"></audio>
      <audio id="audio_page6" ref="audio5" src="./static/MonkeyBusiness/5.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page6 from 'components/page6/page6'
  import {goToNext} from 'common/js/mixins'

  export default {
    mixins: [goToNext],
    data() {
      return {
        goStatus: false,
        goBfore: false,
        goAfter: true,
        monkeyShow: true
      }
    },
    methods: {
      goNextStage(num) {
        this.goStatus = true
        this.audioLoad()
        this.audioLoad('audio5')
        setTimeout(() => {
          this.audioPlay()
          this.goNext(num)
        }, 2000)
        setTimeout(() => {
          this.audioPlay('audio5')
        }, 5000)
      }
    },
    components: {
      page6
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
    left: percent(143, 1280);
    top: percent(114, 720);
    transition: 2s;
  }

  .monkey_active {
    left: percent(298, 1280);
    top: percent(248, 720);
  }

  .before {
    position: absolute;
    width: percent(190, 1280);
    height: percent(290, 720);
    left: percent(248, 1280);
    top: percent(98, 720);
    z-index: 2;
  }

  .after {
    position: absolute;
    width: percent(190, 1280);
    height: percent(290, 720);
    left: percent(248, 1280);
    top: percent(80, 720);
    z-index: 2;
    animation: bounce .8s ease-in-out infinite;
    -webkit-animation: bounce .8s ease-in-out infinite;
  }

  @keyframes bounce {
    0% {
      transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(0, percent(-20, 720), 0);
      -webkit-transform: translate3d(0, percent(-20, 720), 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
    }
  }

  @-webkit-keyframes bounce {
    0% {
      transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(0, percent(-20, 720), 0);
      -webkit-transform: translate3d(0, percent(-20, 720), 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
    }
  }
</style>
