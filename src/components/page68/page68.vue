<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page68 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page68.png" alt="">
          <div class="page28_start_wrapper">
            <div class="empty"></div>
            <div class="start_btn_wrapper">
              <div
                class="start_btn needclick"
                @click="goGuide"
              >
                <img src="./start-btn-medium.gif" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <page69 v-if="!pageStatus"/>
      <audio ref="audio" src="./static/MonkeyBusiness/71.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {goToNext} from 'common/js/mixins'
  import page69 from 'components/page69/page69'

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
      }, 6000)
    },
    methods: {
      init() {
        this.guideTimer = setInterval(() => {
          this.guideNum++
        }, 1000)
      },
      goGuide() {
        this.$refs.audio.load()
        if (this.canGoNext) {
          this.init()
          this.goNext(69)
          // this.audioPlay()
          document.querySelector('#audio_page68_1').play()
        }
      }
    },
    watch: {
      guideNum(newValue) {
        if (newValue === 0) {
        } else if (newValue === 11) {
          document.querySelector('#audio_page68_2').play()
        } else if (newValue === 13) {
          document.querySelector('#audio_page68_3').play()
        } else if (newValue === 15) {
          document.querySelector('#audio_page68_4').play()
        } else if (newValue === 21) {
        } else if (newValue === 23) {
          document.querySelector('#audio_page68_5').play()
        } else if (newValue === 25) {
          clearInterval(this.guideNum)
        }
      }
    },
    components: {
      page69
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
