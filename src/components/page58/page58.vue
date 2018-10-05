<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page58 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page58.png" alt="">
          <goodjob58
            @goNextpage="goNextpage"
            v-if="checkStatus === 1"
          ></goodjob58>
          <div class="page_start_wrapper">
            <div class="empty">
              <div class="voice_btns">
                <div class="voice"></div>
                <div
                  class="close"
                  @click="relisten"
                ></div>
              </div>
              <div class="choose_btns">
                <div
                  class="btn_left choose_btn"
                  :style="answerRemind ? answerRemind:''"
                  @click="checkAnswer(5, 0, true, 1, 'page58')"
                  :class="chooseimg === 1 ? 'choose_img' : ''"
                >
                  <img src="./page43-1.png" alt="">
                </div>
                <div
                  class="btn_right choose_btn"
                  @click="checkAnswer(5, 0, false, 2, 'page58')"
                  :class="chooseimg === 2 ? 'choose_img' : ''"
                >
                  <img src="./page43-2.png" alt="">
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
          <div
            class="remind_wrapper"
            v-show="guideAll.wrapper"
          >
            <div class="remind_content">
              <div
                class="remind_left box"
                v-show="guideAll.circleLeft"
              ></div>
              <div
                class="remind_right box"
                v-show="guideAll.circleRight"
              ></div>
              <div
                class="hand"
                v-show="guideAll.hand"
              >
                <img src="./guide-hand.png" alt="">
              </div>
              <div class="monkey">
                <img src="./guide.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <page61 v-if="!pageStatus"></page61>
      <audio id="audio_page61" ref="audio" src="./static/MonkeyBusiness/69.mp3"></audio>
      <audio ref="audiotrue" src="./static/MonkeyBusiness/68.mp3"></audio>
      <audio ref="audiofalse" src="./static/MonkeyBusiness/81.mp3"></audio>
      <audio ref="audiofalseremind" src="./static/MonkeyBusiness/68a.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page61 from 'components/page61/page61'
  import goodjob58 from 'components/goodjob58/goodjob58'
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
          wrapper: true,
          circleLeft: false,
          circleRight: false
        },
        guideNum: 0,
        checkStatus: 0,
        wllDoneStatus: false,
        canGo: false,
        checkStatuss: 0,
        chooseimg: 0,
        stage: 0,
        poinsts: 0,
        status: false,
        page: ''
      }
    },
    methods: {
      init() {
        this.guideTimer = setInterval(() => {
          this.guideNum++
        }, 1000)
      },
      wrongGo() {
        if (this.wllDoneStatus) {
          this.checkStatus = 0
          this.goNext(61)
          this.$refs.audio.load()
          this.$refs.audio.play()
        }
      },
      goNextpage() {
        this.goNext(61)
        this.$refs.audio.load()
        this.$refs.audiotrue.pause()
        this.$refs.audio.play()
      },
      uploadResult(stage, poinsts, status, page) {
        this.uploadData.scope.push({
          stage: stage,
          poinsts: poinsts,
          result: status,
          page: page
        })
      },
      checkNum() {
        if (this.canGo) {
          this.audioLoad()
          this.$refs.audiotrue.load()
          this.$refs.audiofalse.load()
          this.audioLoad('audiofalseremind')
          if (this.checkStatuss === 2) {
            this.checkStatus = 2
            this.$refs.audiofalse.play()
            this.guideAll.wrapper = true
            this.timer = setTimeout(() => {
              this.wllDoneStatus = true
              this.chooseimg = 1
              this.guideAll.hand = true
            }, 6000)
            setTimeout(() => {
              this.audioPlay('audiofalseremind')
            }, 7000)
            this.timer = setTimeout(() => {
              this.goNext(61)
              this.audioPlay()
            }, 16000)
          } else {
            this.checkStatus = 1
            this.$refs.audiotrue.play()
          }
          // this.uploadResult(this.stage, this.poinsts, this.status, this.page)
        }
        this.canGo = false
      },
      checkAnswer(stage, poinsts, status, checkStatus, page) {
        this.canGo = true
        this.stage = stage
        this.status = status
        this.page = page
        this.poinsts = poinsts
        this.checkStatuss = checkStatus
        this.chooseimg = checkStatus
        if (this.$refs.audio) {
          this.$refs.audio.pause()
        }
      }
    },
    watch: {
      guideNum(newValue) {
        if (newValue === 0) {
        } else if (newValue === 1) {
          this.guideAll.circleLeft = true
          this.guideAll.circleRight = true
        } else if (newValue === 4) {
        } else if (newValue === 7) {
          this.guideAll.circleRight = false
          this.guideAll.hand = true
        } else if (newValue === 10) {
        } else if (newValue === 13) {
        } else if (newValue === 15) {
          this.guideAll.circleLeft = false
          this.guideAll.circleRight = false
          this.guideAll.hand = false
          this.guideAll.wrapper = false
          clearInterval(this.guideTimer)
        }
      }
    },
    components: {
      page61,
      goodjob58
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
    .remind_content {
      width: 100%;
      height: 100%;
      position: relative;
      .box {
        width: percent(452, 1280);
        height: percent(452, 720);
        border: 8px solid red;
        border-radius: 30px;
        box-sizing: border-box;
        position: absolute;
        top: percent(115, 720);
      }
      .remind_left {
        left: percent(122, 1280);
      }
      .remind_right {
        right: percent(125, 1280);
      }
      .hand {
        width: percent(159, 1280);
        height: percent(259, 720);
        position: absolute;
        left: percent(290, 1280);
        top: percent(362, 720);
      }
      .monkey {
        width: percent(291, 1280);
        height: percent(253, 720);
        bottom: 0;
        position: absolute;
        right: percent(50, 1280);
      }
    }
  }
</style>
