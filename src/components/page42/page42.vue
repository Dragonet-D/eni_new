<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div id="page42" class="page42 page" v-show="pageStatus">
        <div class="page_content">
          <div class="remind_content">
            <div class="remind_inner">
              <div
                class="good_job"
                v-if="gotoNextoNOff"
              >
                <div class="next_btn_wrapper">
                  <img src="./goodjob-count.png" alt="">
                  <div
                    class="next_btn_content"
                    @click="goNextPage"
                  >
                    <img src="./next-btn.png" alt="">
                  </div>
                </div>
              </div>
              <img class="page_bgs" src="./page42.png" alt="">
              <div class="choose_wrapper">
                <div class="choose_content">
                  <div
                    class="answers"
                    v-for="(item, index) in imagesList"
                    :class="[item.className, index === imageIndex ? 'answers_active' : '']"
                    @click="imageClick(index)"
                  >
                    <img :src="item.src" alt="">
                  </div>
                </div>
              </div>
              <div
                class="voice_content"
                @click="replay"
              >
              </div>
              <div
                class="page42_start_wrapper"
                v-show="guideStatus.wrapper"
              >
                <div class="show_wrapper">
                  <div
                    class="show_content show_content_1"
                    v-show="guideStatus.guide1"
                  >
                    <img src="./page42-1.png" alt="">
                  </div>
                  <div
                    class="show_content show_content_2"
                    v-show="guideStatus.guide2"
                  >
                    <img src="./page42-2.png" alt="">
                  </div>
                  <div
                    class="show_content show_content_3"
                    v-show="guideStatus.guide3"
                  >
                    <img src="./page42-3.png" alt="">
                  </div>
                  <div class="show_content show_content_one">
                    <img src="./page42-one.png" alt="">
                  </div>
                  <div class="show_content show_content_two">
                    <img src="./page42-two.png" alt="">
                  </div>
                  <div class="show_content show_content_three">
                    <img src="./page42-three.png" alt="">
                  </div>
                  <div
                    class="show_content show_content_hand"
                    v-show="guideStatus.guidehand"
                  >
                    <img src="./page42-hand.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <page44 v-if="!pageStatus"></page44>
      <audio ref="audio" src="./static/MonkeyBusiness/33.mp3"></audio>
      <audio ref="audio1" src="./static/MonkeyBusiness/34.mp3"></audio>
      <audio ref="audio2" src="./static/MonkeyBusiness/11.mp3"></audio>
      <audio ref="audio3" src="./static/MonkeyBusiness/40.mp3"></audio>
      <audio ref="audio4" src="./static/MonkeyBusiness/36.mp3"></audio>
      <audio ref="audio5" src="./static/MonkeyBusiness/37.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page44 from 'components/page44/page44'
  import goodjob from 'components/goodjob/goodjob'
  import {goToNext} from 'common/js/mixins'

  export default {
    mixins: [goToNext],
    data() {
      return {
        imagesList: [
          {
            id: '1',
            className: 'answers_1',
            src: './static/match-numbers/page42-answer1.png'
          },
          {
            className: 'answers_2',
            src: './static/match-numbers/page42-answer2.png'
          },
          {
            className: 'answers_3',
            src: './static/match-numbers/page42-answer3.png'
          }
        ],
        imageIndex: -1,
        guideStatus: {
          guide1: true,
          guide2: false,
          guide3: false,
          guidehand: false,
          wrapper: true
        },
        guideNum: 0,
        gotoNextoNOff: false
      }
    },
    created() {
      this.init()
    },
    watch: {
      guideNum(newValue) {
        if (newValue === 10) {
          this.$refs.audio1.play()
          this.guideStatus.guide1 = false
          this.guideStatus.guide2 = true
        } else if (newValue === 13) {
          this.guideStatus.guide2 = false
          this.guideStatus.guidehand = true
        } else if (newValue === 15) {
          this.$refs.audio2.play()
          this.guideStatus.guide3 = true
        } else if (newValue === 17) {
          this.guideStatus.wrapper = false
          clearInterval(this.timer)
        }
      }
    },
    methods: {
      imageClick(index) {
        this.imageIndex = index
        if (index === 0) {
          this.gotoNextoNOff = true
          this.$refs.audio3.play()
        } else if (index === 1) {
          this.$refs.audio4.play()
        } else if (index === 2) {
          this.$refs.audio5.play()
        }
      },
      replay() {
        this.guideNum = 0
        this.guideStatus = {
          guide1: true,
          guide2: false,
          guide3: false,
          guidehand: false,
          wrapper: true
        }
        this.$refs.audio.play()
        this.init()
      },
      init() {
        this.timer = setInterval(() => {
          this.guideNum++
        }, 1000)
      },
      goNextPage() {
        this.$refs.audio3.pause()
        this.goNext(43)
      }
    },
    components: {
      page44,
      goodjob
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  #page42 {
    max-width: 1280px;
    margin-left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    .page_content {
      padding: percent(220, 1024) percent(260, 768);
      .remind_content {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
        .page_bgs {
          position: absolute;
          z-index: 2;
          width: 100%;
          height: 100%;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }
        .remind_inner {
          position: relative;
          width: 100%;
          height: 100%;
          .choose_wrapper {
            height: percent(108, 400);
            position: absolute;
            z-index: 22;
            top: percent(187, 400);
            width: 100%;
            .choose_content {
              position: relative;
              width: 100%;
              height: 100%;
              .answers {
                position: absolute;
                width: percent(150, 682);
                height: 100%;
                top: 0;
                border-radius: percent(10, 150);
                overflow: hidden;
                transition: all .2s;
              }
              .answers_active {
                -webkit-transform: scale(1.2);
                transform: scale(1.2);
              }
              .answers_1 {
                left: percent(98, 682);
              }
              .answers_2 {
                left: percent(266, 682);
              }
              .answers_3 {
                right: percent(98, 682);
              }
            }
          }
          .voice_content {
            position: absolute;
            width: percent(74, 682);
            height: percent(74, 400);
            z-index: 23;
            top: percent(326, 400);
            left: percent(33, 682);
          }
        }
      }
    }
    .page42_start_wrapper {
      @extend %page_start_wrapper;
      z-index: 23;
      .show_wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        .show_content {
          position: absolute;
        }
        .show_content_1 {
          left: percent(-100, 682);
          top: percent(-113, 400);
          width: percent(375, 682);
          height: percent(170, 402);
        }
        .show_content_2 {
          left: percent(-131, 682);
          top: percent(112, 400);
          width: percent(285, 682);
          height: percent(176, 402);
          z-index: 2;
        }
        .show_content_3 {
          right: percent(-106, 682);
          bottom: percent(-116, 400);
          width: percent(215, 682);
          height: percent(213, 402);
        }
        .show_content_one {
          left: percent(165, 682);
          top: percent(78, 400);
          width: percent(192, 682);
          height: percent(139, 402);
          z-index: 2;
        }
        .show_content_two {
          left: percent(258, 682);
          bottom: percent(-23, 400);
          width: percent(192, 682);
          height: percent(139, 402);
        }
        .show_content_three {
          left: percent(416, 682);
          top: percent(73, 400);
          width: percent(192, 682);
          height: percent(139, 402);
        }
        .show_content_hand {
          left: percent(83, 682);
          top: percent(177, 400);
          width: percent(183, 682);
          height: percent(174, 402);
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
