<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page59 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page59.png" alt="">
          <div
            class="good_job"
            v-show="goodjobStatus"
          >
            <div class="next_btn_wrapper">
              <img src="./goodjob-less.png" alt="">
              <div
                class="next_btn_content"
                @click="goNextPage"
              >
                <img src="./next-btn.png" alt="">
              </div>
            </div>
          </div>
          <div class="remind_click">
            <div class="content">
              <div class="remind_top">
                <div
                  class="remind remind_3"
                  v-show="guideAll.guide3"
                >
                  <img src="./page59-3.png" alt="">
                </div>
                <div
                  class="remind remind_2"
                  v-show="guideAll.guide2"
                >
                  <img src="./page59-2.png" alt="">
                </div>
                <div
                  class="remind remind_1"
                  v-show="guideAll.guide1"
                >
                  <img src="./page59-1.png" alt="">
                </div>
              </div>
              <div class="remind_mid">
                <div
                  class="mid_left"
                  @click="rightAnswer"
                ></div>
                <div class="mid_right"></div>
              </div>
              <div class="remind_bottom">
                <div
                  class="voice_btn"
                  @click="replay"
                ></div>
              </div>
            </div>
          </div>
          <div
            class="mask_wrapper"
            v-show="guideAll.wrapper"
          >
            <div class="mask_content">
              <div
                class="mask mask_4"
                v-show="guideAll.guide4"
              >
                <img src="./page59-4.png" alt="">
              </div>
              <div
                class="mask mask_5"
                v-show="guideAll.guide5"
              >
                <img src="./page59-5.png" alt="">
              </div>
              <div
                class="mask_hand"
                v-show="guideAll.guideHand"
              >
                <img src="./hand.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <page61 v-if="!pageStatus"></page61>
      <audio ref="audio" src="./static/MonkeyBusiness/18.mp3"></audio>
      <audio ref="audio1" src="./static/MonkeyBusiness/64.mp3"></audio>
      <audio ref="audio2" src="./static/MonkeyBusiness/65.mp3"></audio>
      <audio ref="audio3" src="./static/MonkeyBusiness/21.mp3"></audio>
      <audio ref="audio4" src="./static/MonkeyBusiness/11.mp3"></audio>
      <audio ref="audio5" src="./static/MonkeyBusiness/68.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page61 from 'components/page61/page61'
  import goodjob from 'components/goodjob/goodjob'
  import {goToNext} from 'common/js/mixins'

  export default {
    mixins: [goToNext],
    created() {
      this.init()
    },
    data() {
      return {
        remindNum: 0,
        guideAll: {
          guide1: true,
          guide2: false,
          guide3: false,
          guide4: false,
          guide5: false,
          guideHand: false,
          wrapper: true
        },
        goodjobStatus: 0
      }
    },
    methods: {
      rightAnswer() {
        this.goodjobStatus = 1
        this.$refs.audio5.play()
      },
      replay() {
        this.remindNum = 0
        this.guideAll = {
          guide1: true,
          guide2: false,
          guide3: false,
          guide4: false,
          guide5: false,
          guideHand: false,
          wrapper: true
        }
        this.$refs.audio.play()
        this.init()
      },
      init() {
        this.timer = setInterval(() => {
          this.remindNum++
        }, 1000)
      },
      goNextPage() {
        this.$refs.audio5.pause()
        this.goNext(60)
      }
    },
    watch: {
      remindNum(newValue) {
        if (newValue === 3) {
          this.$refs.audio1.play()
          this.guideAll.guide1 = false
          this.guideAll.guide2 = true
        } else if (newValue === 6) {
          this.$refs.audio2.play()
          this.guideAll.guide2 = false
          this.guideAll.guide3 = true
        } else if (newValue === 9) {
          this.$refs.audio3.play()
          this.guideAll.guide3 = false
          this.guideAll.guide4 = true
        } else if (newValue === 11) {
          this.guideAll.guide4 = false
          this.guideAll.guideHand = true
        } else if (newValue === 12) {
          this.guideAll.guide5 = true
          this.$refs.audio4.play()
        } else if (newValue === 14) {
          this.guideAll.wrapper = false
          clearInterval(this.timer)
        }
      }
    },
    components: {
      page61,
      goodjob
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .page59 {
    .remind_click {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
      .content {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .remind_top {
          flex: 232;
          position: relative;
          .remind {
            width: percent(260, 958);
            height: percent(198, 232);
            position: absolute;
            bottom: 0;
          }
          .remind_3 {
            left: percent(33, 958);
          }
          .remind_2 {
            left: percent(304, 958);
          }
          .remind_1 {
            left: percent(598, 958);
          }
        }
        .remind_mid {
          flex: 384;
          display: flex;
          .mid_left {
            width: percent(288, 958);
            height: percent(290, 384);
            margin-left: percent(93, 958);
            border-radius: percent(30, 288);
          }
          .mid_right {
            @extend .mid_left;
            margin-left: percent(227, 958);
          }
        }
        .remind_bottom {
          flex: 104;
          .voice_btn {
            width: percent(98, 958);
            height: percent(98, 104);
            margin-left: percent(46, 958);
          }
        }
      }
    }
    .mask_wrapper {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 2;
      .mask_content {
        position: relative;
        width: 100%;
        height: 100%;
        .mask {
          position: absolute;
          width: percent(260, 958);
          height: percent(218, 720);
        }
        .mask_4 {
          top: percent(394, 720);
          left: percent(233, 958);
        }
        .mask_5 {
          top: percent(472, 720);
          left: percent(349, 958);
        }
        .mask_hand {
          position: absolute;
          width: percent(107, 958);
          height: percent(166, 720);
          top: percent(330, 720);
          left: percent(204, 958);
        }
      }
    }
    .good_job {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      box-sizing: border-box;
      z-index: 100;
      background-color: rgba(177, 247, 247, .9);
      .next_btn_wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        .next_btn_content {
          position: absolute;
          width: percent(120, 1280);
          height: percent(120, 720);
          right: percent(15, 1280);
          bottom: percent(105, 720);
        }
      }
    }
  }
</style>
