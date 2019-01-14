<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page6 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page6.png" alt="">
          <div class="page6_start_wrapper">
            <div class="empty"></div>
            <div class="start_btn_wrapper">
              <div class="start_btn needclick" @click="checkToNext(7)">
                <img src="./start-btn-medium.gif" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <page7 v-if="!pageStatus"></page7>
      <audio id="audio_page7" class="audio_page7" ref="audio" src="./static/MonkeyBusiness/5.mp3"></audio>
      <audio id="audio_page7_1" class="audio_page7" ref="audio0" src="./static/MonkeyBusiness/6.mp3"></audio>
      <audio id="audio_page7_2" class="audio_page7" ref="audio1" src="./static/MonkeyBusiness/7.mp3"></audio>
      <audio id="audio_page7_3" class="audio_page7" ref="audio2" src="./static/MonkeyBusiness/8.mp3"></audio>
      <audio id="audio_page7_4" class="audio_page7" ref="audio3" src="./static/MonkeyBusiness/9.mp3"></audio>
      <audio id="audio_page7_5" class="audio_page7" ref="audio4" src="./static/MonkeyBusiness/10.mp3"></audio>
      <audio id="audio_page7_6" class="audio_page7" ref="audio5" src="./static/MonkeyBusiness/11.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {goToNext} from 'common/js/mixins'
  import page7 from 'components/page7/page7'

  export default {
    mixins: [goToNext],
    data() {
      return {
        sumGuidsTime: 0,
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
          this.sumGuidsTime++
        }, 1000)
      },
      checkToNext(num) {
        this.audioLoad('audio')
        this.audioLoad('audio0')
        this.audioLoad('audio1')
        this.audioLoad('audio2')
        this.audioLoad('audio3')
        this.audioLoad('audio4')
        this.audioLoad('audio5')
        if (this.canGoNext) {
          document.querySelector('#audio_page7_1').addEventListener('canplaythrough', () => {
            this.init()
          })
          this.goNext(num)
          // this.audioPlay()
          this.audioPlay('audio0')
        }
      }
    },
    watch: {
      sumGuidsTime(newVaule) {
        if (newVaule === 0) {
          // 1 播放
        } else if (newVaule === 9) {
          // 2 播放 第一段
          this.audioPlay('audio1')
        } else if (newVaule === 12) {
          // 2 播放 第二段
        } else if (newVaule === 14) {
          // 3 播放
          this.audioPlay('audio2')
        } else if (newVaule === 20) {
          // 3 播放完毕 手移动
        } else if (newVaule === 22) {
          // 4 播放
          this.audioPlay('audio3')
        } else if (newVaule === 27) {
          // 5 播放
          this.audioPlay('audio4')
        } else if (newVaule === 31) {
          // 6 播放
          this.audioPlay('audio5')
          clearInterval(this.timer)
        }
      }
    },
    components: {
      page7
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .page6_start_wrapper {
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
