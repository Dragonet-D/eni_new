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
        if (this.canGoNext) {
          this.init()
          this.goNext(41)
          // this.audioPlay()
          document.querySelector('#audio_page40_1').play()
        }
      }
    },
    watch: {
      guideNum(newValue) {
        if (newValue === 4) {
        } else if (newValue === 12) {
          document.querySelector('#audio_page40_2').play()
        } else if (newValue === 14) {
          document.querySelector('#audio_page40_7').play()
        } else if (newValue === 19) {
          document.querySelector('#audio_page40_6').play()
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
