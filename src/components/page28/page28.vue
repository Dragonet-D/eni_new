<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page28 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page28.png" alt="">
          <div class="page28_start_wrapper">
            <div class="empty"></div>
            <div class="start_btn_wrapper">
              <div class="start_btn needclick" @click="goPageGuide(29)">
                <img src="./start-btn-medium.gif" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <page29 v-if="!pageStatus"></page29>
      <audio ref="audio" src="./static/MonkeyBusiness/17.mp3"></audio>
      <audio ref="audio0" src="./static/MonkeyBusiness/18.mp3"></audio>
      <audio ref="audio1" src="./static/MonkeyBusiness/19.mp3"></audio>
      <audio ref="audio2" src="./static/MonkeyBusiness/20.mp3"></audio>
      <audio ref="audio3" src="./static/MonkeyBusiness/21.mp3"></audio>
      <audio ref="audio4" src="./static/MonkeyBusiness/11.mp3"></audio>
      <audio ref="audio5" src="./static/MonkeyBusiness/9.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {goToNext} from 'common/js/mixins'
  import page29 from 'components/page29/page29'

  export default {
    mixins: [goToNext],
    data() {
      return {
        sumGuidsTime: 0,
        guideSum: 0,
        canGoNext: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.canGoNext = true
      }, 6000)
    },
    methods: {
      init() {
        this.timer = setInterval(() => {
          this.guideSum++
        }, 1000)
      },
      goPageGuide(num) {
        this.audioLoad('audio')
        this.audioLoad('audio0')
        this.audioLoad('audio1')
        this.audioLoad('audio2')
        this.audioLoad('audio3')
        this.audioLoad('audio4')
        this.audioLoad('audio5')
        if (this.canGoNext) {
          this.init()
          this.goNext(num)
          // this.audioPlay()
          this.audioPlay('audio0')
        }
      }
    },
    watch: {
      guideSum(newValue) {
        if (newValue === 0) {
        } else if (newValue === 5) {
          this.audioPlay('audio1')
        } else if (newValue === 9) {
          this.audioPlay('audio2')
        } else if (newValue === 12) {
          this.audioPlay('audio3')
        } else if (newValue === 15) {
          this.audioPlay('audio5')
        } else if (newValue === 20) {
          this.audioPlay('audio4')
          clearInterval(this.timer)
        }
      }
    },
    components: {
      page29
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
