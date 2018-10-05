<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page28 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page40.png" alt="">
          <div class="page28_start_wrapper">
            <div class="empty"></div>
            <div class="start_btn_wrapper">
              <div
                class="start_btn needclick"
                @click="pageClick"
              >
                <img src="./start-btn-medium.gif" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <page41 v-if="!pageStatus"></page41>
      <audio ref="audio" src="./static/MonkeyBusiness/32.mp3"></audio>
      <audio ref="audio0" src="./static/MonkeyBusiness/33.mp3"></audio>
      <audio ref="audio1" src="./static/MonkeyBusiness/34.mp3"></audio>
      <audio ref="audio2" src="./static/MonkeyBusiness/35.mp3"></audio>
      <audio ref="audio3" src="./static/MonkeyBusiness/36.mp3"></audio>
      <audio ref="audio4" src="./static/MonkeyBusiness/37.mp3"></audio>
      <audio ref="audio5" src="./static/MonkeyBusiness/11.mp3"></audio>
      <audio ref="audio6" src="./static/MonkeyBusiness/9.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {goToNext} from 'common/js/mixins'
  import page41 from 'components/page41/page41'

  export default {
    mixins: [goToNext],
    data() {
      return {
        guideNum: 0,
        canGoNext: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.canGoNext = true
      }, 5000)
    },
    methods: {
      init() {
        this.guideTimer = setInterval(() => {
          this.guideNum++
        }, 1000)
      },
      pageClick() {
        this.audioLoad()
        this.audioLoad('audio0')
        this.audioLoad('audio1')
        this.audioLoad('audio2')
        this.audioLoad('audio3')
        this.audioLoad('audio4')
        this.audioLoad('audio5')
        this.audioLoad('audio6')
        if (this.canGoNext) {
          this.init()
          this.goNext(41)
          // this.audioPlay()
          this.audioPlay('audio0')
        }
      }
    },
    watch: {
      guideNum(newValue) {
        if (newValue === 4) {
        } else if (newValue === 12) {
          this.audioPlay('audio1')
        } else if (newValue === 14) {
          this.audioPlay('audio6')
        } else if (newValue === 19) {
          this.audioPlay('audio5')
        } else if (newValue === 21) {
          clearInterval(this.guideTimer)
        }
      }
    },
    components: {
      page41
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .page28_start_wrapper {
    @extend %page_start_wrapper;
    .empty {
      flex: 320;
    }
    .start_btn_wrapper {
      flex: 280;
      .start_btn {
        margin-left: percent(290);
        width: percent(300);
        height: percent(140, 280);
        user-select: none;
        border-radius: 4%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @keyframes box-s {
    0% {
      box-shadow: 0 0 50px rgba(255, 248, 0, 1);
    }
    100% {
      box-shadow: 0 0 50px rgba(255, 248, 0, 0);
    }
  }

  @-webkit-keyframes box-s {
    0% {
      box-shadow: 0 0 50px rgba(255, 248, 0, 1);
    }
    100% {
      box-shadow: 0 0 50px rgba(255, 248, 0, 0);
    }
  }
</style>
