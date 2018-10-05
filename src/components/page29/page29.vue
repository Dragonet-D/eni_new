<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page29 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page29.png" alt="">
          <goodjob29
            @goNextpage="goNextpage"
            v-if="checkStatus === 1"
          ></goodjob29>
          <div
            class="remind_wrapper"
            v-show="guideAll.wrapper"
          >
            <div class="remind_content">
              <div
                class="hand"
                v-show="guideAll.hand"
              >
                <img src="./guide-hand.png" alt="">
              </div>
              <div
                class="circle circle_left"
                v-show="guideAll.circleLeft"
              ></div>
              <div
                class="circle circle_right"
                v-show="guideAll.circleRight"
              ></div>
              <div
                class="listen_again"
                v-show="guideAll.listenAgain"
              ></div>
              <div
                class="monkey"
                v-show="guideAll.monkey"
              >
                <img src="./guide.png" alt="">
              </div>
            </div>
          </div>
          <div class="page_start_wrapper">
            <div class="empty">
              <div class="voice_btns">
                <div
                  class="voice"
                ></div>
                <div
                  class="close"
                  @click="relisten"
                ></div>
              </div>
              <div class="choose_btns">
                <div
                  class="btn_left choose_btn"
                  @click="checkAnswer(2, 0, false, 2, 'page29')"
                  :class="chooseimg === 2 ? 'choose_img' : ''"
                >
                  <img src="./page29-1.png" alt="">
                </div>
                <div
                  class="btn_right choose_btn"
                  :class="chooseimg === 1 ? 'choose_img' : ''"
                  :style="answerRemind ? answerRemind:''"
                  @click="checkAnswer(2, 0, true, 1, 'page29')"
                >
                  <img src="./page29-2.png" alt="">
                </div>
              </div>
            </div>
            <div class="btn_wrapper">
              <div
                class="start_btn needclick"
                @click.stop="checkNum"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <page33 v-if="!pageStatus"></page33>
      <audio id="audio_page33" class="audio_page33" ref="audio" src="./static/MonkeyBusiness/23.mp3"></audio>
      <audio ref="audiotrue" src="./static/MonkeyBusiness/24.mp3"></audio>
      <audio ref="audiofalse" src="./static/MonkeyBusiness/81.mp3"></audio>
      <audio ref="audiofalseremind" src="./static/MonkeyBusiness/24a.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page33 from 'components/page33/page33'
  import goodjob29 from 'components/goodjob29/goodjob29'
  import {goToNext, iKnowMore} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iKnowMore],
    created() {
      this.init()
    },
    data() {
      return {
        guideAll: {
          hand: false,
          circleLeft: false,
          circleRight: false,
          listenAgain: false,
          wrapper: true,
          monkey: true
        },
        guideSum: 0,
        replayStatus: true,
        checkStatus: 0,
        wllDoneStatus: false
      }
    },
    methods: {
      init() {
        this.page29timer = setInterval(() => {
          this.guideSum++
        }, 1000)
      },
      wrongGo() {
        if (this.wllDoneStatus) {
          this.audioPlay()
          this.goNext(33)
        }
      },
      goNextpage() {
        this.goNext(33)
        this.audioPlay()
        this.audioPause('audiotrue')
      },
      checkNum() {
        if (this.canGo) {
          this.audioLoad()
          this.audioLoad('audiotrue')
          this.audioLoad('audiofalse')
          this.audioLoad('audiofalseremind')
          if (this.checkStatuss === 2) {
            this.checkStatus = 2
            this.audioPlay('audiofalse')
            this.guideAll.wrapper = true
            this.timer = setTimeout(() => {
              this.wllDoneStatus = true
              this.canGo = false
              this.chooseimg = 0
              this.answerRemind = 'border: 6px solid red;transform: scale(1.1);border-radius: percent(26, 420);'
              this.guideAll.hand = true
            }, 6000)
            setTimeout(() => {
              this.audioPlay('audiofalseremind')
            }, 8000)
            this.timer1 = setTimeout(() => {
              this.audioPlay()
              this.goNext(33)
            }, 18000)
          } else {
            this.checkStatus = 1
            this.audioPlay('audiotrue')
          }
          // this.uploadResult(this.stage, this.poinsts, this.status, this.page)
        }
      }
    },
    watch: {
      guideSum(newValue) {
        if (newValue === 1) {
          this.guideAll.circleLeft = true
          this.guideAll.circleRight = true
        } else if (newValue === 5) {
        } else if (newValue === 9) {
          this.guideAll.circleLeft = false
        } else if (newValue === 12) {
          this.guideAll.hand = true
        } else if (newValue === 15) {
          this.guideAll.hand = false
          this.guideAll.circleRight = false
          this.guideAll.listenAgain = true
        } else if (newValue === 20) {
          this.guideAll.monkey = false
          this.guideAll.listenAgain = false
          this.guideAll.wrapper = false
          clearInterval(this.page29timer)
        }
      }
    },
    components: {
      page33,
      goodjob29
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/iknowmore.scss";

  .remind_wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    z-index: 10;
    .remind_content {
      width: 100%;
      height: 100%;
      div {
        position: absolute;
        box-sizing: border-box;
      }
      .hand {
        width: percent(149, 1280);
        height: percent(259, 720);
        left: percent(880, 1280);
        top: percent(282, 720);
      }
      .circle {
        width: percent(456, 1280);
        height: percent(456, 720);
        border: 8px solid red;
        border-radius: 30px;
        top: percent(110, 720);
      }
      .circle_left {
        left: percent(120, 1280);
      }
      .circle_right {
        right: percent(120, 1280);
      }
      .listen_again {
        width: percent(108, 1280);
        height: percent(108, 720);
        border: 8px solid red;
        right: percent(5, 1280);
        border-radius: 30px;
      }
      .monkey {
        width: percent(291, 1280);
        height: percent(253, 720);
        bottom: 0;
        right: percent(50, 1280);
      }
    }
  }
</style>
