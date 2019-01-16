<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page51 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page51.png" alt="">
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
      <page52 v-if="!pageStatus"></page52>
      <audio ref="audio" src="./static/MonkeyBusiness/51.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {goToNext} from 'common/js/mixins'
  import page52 from 'components/page52/page52'

  export default {
    mixins: [goToNext],
    data() {
      return {
        guideRemidnum: 0,
        canGoNext: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.canGoNext = true
      }, 6000)
    },
    methods: {
      goGuide() {
        this.audioLoad()
        if (this.canGoNext) {
          this.init()
          this.goNext(52)
          // this.audioPlay()
          document.querySelector('#audio_page51_1').play()
        }
      },
      init() {
        this.guideTimer = setInterval(() => {
          this.guideRemidnum++
        }, 1000)
      },
      resetData() {
        this.list = []
        this.list1 = [
          {
            id: '1',
            src: './static/page52/page52-1.png',
            className: 'drag_target_a',
            remind: '8px solid red'
          }
        ]
        this.list2 = [
          {
            id: '2',
            src: './static/page52/page52-2.png',
            className: 'drag_target_b',
            remind: '8px solid red'
          }
        ]
        this.list3 = [
          {
            id: '3',
            src: './static/page52/page52-3.png',
            className: 'drag_target_d',
            remind: '8px solid red'
          }
        ]
        this.list4 = [
          {
            id: '4',
            src: './static/page52/page52-4.png',
            className: 'drag_target_c',
            remind: '8px solid red'
          }
        ]
      },
      checkAnswer(stage, poinsts) {
        if (this.checkOnOff) {
          if (this.gotoNextoNOff) {
            this.uploadResult(stage, poinsts, true)
            this.checkStatus = 1
          } else {
            this.uploadResult(stage, poinsts, true)
            this.checkStatus = 2
            this.timer = setTimeout(() => {
              this.checkStatus = 0
              this.resetData()
              setTimeout(() => {
                this.goNext(56)
              }, 3000)
            }, 6000)
          }
          this.checkOnOff = false
          console.log(this.uploadData)
        }
      },
      wrongAnswerClick(num) {
        this.checkStatus = 0
        this.resetData()
        setTimeout(() => {
          this.goNext(56)
        }, 3000)
        clearTimeout(this.timer)
      },
      goNextpage() {
        this.goNext(56)
      }
    },
    watch: {
      guideRemidnum(newValue) {
        if (newValue === 6) {
        } else if (newValue === 7) {
          document.querySelector('#audio_page51_2').play()
        } else if (newValue === 11) {
          document.querySelector('#audio_page51_3').play()
        } else if (newValue === 13) {
          document.querySelector('#audio_page51_4').play()
        } else if (newValue === 17) {
        } else if (newValue === 19) {
          document.querySelector('#audio_page51_5').play()
        } else if (newValue === 23) {
          document.querySelector('#audio_page51_6').play()
        } else if (newValue === 26) {
          clearInterval(this.guideTimer)
        }
      }
    },
    components: {
      page52
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
