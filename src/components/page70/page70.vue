<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page70 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page70.png" alt="">
          <div
            class="good_job"
            v-if="goToNextStatus"
          >
            <div class="next_btn_wrapper">
              <img src="./goodjob-miss.png" alt="">
              <div
                class="next_btn_content"
                @click="goNextPage"
              >
                <img src="./next-btn.png" alt="">
              </div>
            </div>
          </div>
          <div class="content_wrapper">
            <div
              class="drag_target"
            >
              <draggable
                class="drag_target_c"
                v-model="list1"
                :options="dragOptions"
                :move="onMove"
              >
                <div
                  class="drag_target_box"
                  v-for="item in list1"
                >
                  <img :src="item.src" alt="">
                </div>
              </draggable>
            </div>
            <draggable
              class="drag_oops"
              v-model="list"
              :options="dragOptions"
              :move="onMove"
              @start="isDragging=true"
              @end="isDragging=false"
            >
              <div
                class="drag"
                v-for="item in list"
                :class="item.className"
              >
                <img :src="item.src" alt="">
              </div>
            </draggable>
            <div
              class="voice_btn"
              @click="cancleAnswer"
            >
              <div
                class="voice"
                @click.stop="replay"
              >
              </div>
            </div>
          </div>
          <div
            class="guide_wrapper"
            v-show="guideAll.wrapper"
          >
            <div class="guide_content">
              <div
                class="guide guide_1"
                v-show="guideAll.guide1"
              >
                <img src="./page70-1.png" alt="">
              </div>
              <div
                class="guide guide_2"
                v-show="guideAll.guide2"
              >
                <img src="./page70-2.png" alt="">
              </div>
              <div
                class="guide guide_3"
                v-show="guideAll.guide3"
              >
                <img src="./page70-3.png" alt="">
              </div>
              <div
                class="guide guide_4"
                v-show="guideAll.guide4"
              >
                <img src="./page70-4.png" alt="">
              </div>
              <div
                class="guide guide_5"
                v-show="guideAll.guide5"
              >
                <img src="./page70-5.png" alt="">
              </div>
              <div class="guide guide_remind">
                <img src="./page70-remind.png" alt="">
              </div>
              <div
                class="guide guide_hand"
                :class="guideAll.guidehandStatus ? 'guide_hand_active': ''"
                v-show="guideAll.guideHand"
              >
                <img src="./page70-hand.png" alt="">
              </div>
              <div class="guide guide_one">
                <img src="./page70-one.png" alt="">
              </div>
              <div class="guide guide_two">
                <img src="./page70-two.png" alt="">
              </div>
              <div class="guide guide_three">
                <img src="./page70-three.png" alt="">
              </div>
              <div class="guide guide_four">
                <img src="./page70-four.png" alt="">
              </div>
              <div class="guide guide_five">
                <img src="./page70-five.png" alt="">
              </div>
              <div class="guide guide_six">
                <img src="./page70-six.png" alt="">
              </div>
              <div class="guide guide_seven">
                <img src="./page70-seven.png" alt="">
              </div>
              <div class="guide guide_eight">
                <img src="./page70-eight.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <page72 v-if="!pageStatus"></page72>
      <audio ref="audio" src="./static/MonkeyBusiness/72.mp3"></audio>
      <audio ref="audio1" src="./static/MonkeyBusiness/73.mp3"></audio>
      <audio ref="audio2" src="./static/MonkeyBusiness/74.mp3"></audio>
      <audio ref="audio3" src="./static/MonkeyBusiness/75.mp3"></audio>
      <audio ref="audio4" src="./static/MonkeyBusiness/11.mp3"></audio>
      <audio ref="audio6" src="./static/MonkeyBusiness/78.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page72 from 'components/page72/page72'
  import {goToNext, knowNumbers} from 'common/js/mixins'

  let list = [
    {
      id: '',
      className: 'drag_1',
      src: './static/page70/page70-8.png'
    }, {
      id: '',
      className: 'drag_2',
      src: './static/page70/page70-6.png'
    }, {
      id: '1',
      className: 'drag_3',
      src: './static/page70/page70-5.png'
    }, {
      id: '',
      className: 'drag_4',
      src: './static/page70/page70-7.png'
    }
  ]
  export default {
    mixins: [goToNext, knowNumbers],
    created() {
      this.init()
    },
    data() {
      return {
        list: list,
        list1: [],
        editable: true,
        isDragging: false,
        delayedDragging: false,
        goToNextStatus: false,
        guideAll: {
          guide1: true,
          guide2: false,
          guide3: false,
          guide4: false,
          guide5: false,
          guideHand: false,
          guidehandStatus: false,
          wrapper: true
        },
        guideNum: 0
      }
    },
    methods: {
      replay() {
        this.$refs.audio.play()
        this.guideNum = 0
        this.cancleAnswer()
        this.guideAll = {
          guide1: true,
          guide2: false,
          guide3: false,
          guide4: false,
          guide5: false,
          guideHand: false,
          guidehandStatus: false,
          wrapper: true
        }
        this.init()
      },
      init() {
        this.timer = setInterval(() => {
          this.guideNum++
        }, 1000)
      },
      cancleAnswer() {
        this.list = list
        this.list1 = []
        this.editable = true
      },
      goNextPage() {
        this.$refs.audio6.pause()
        this.goNext(72)
      }
    },
    watch: {
      guideNum(newVaule) {
        if (newVaule === 9) {
          this.$refs.audio1.play()
          this.guideAll.guide1 = false
          this.guideAll.guide2 = true
        } else if (newVaule === 11) {
          this.$refs.audio2.play()
          this.guideAll.guide2 = false
          this.guideAll.guide3 = true
        } else if (newVaule === 13) {
          this.$refs.audio3.play()
          this.guideAll.guide3 = false
          this.guideAll.guide4 = true
        } else if (newVaule === 15) {
          this.$refs.audio3.play()
        } else if (newVaule === 20) {
          this.guideAll.guide4 = false
          this.guideAll.guideHand = true
        } else if (newVaule === 21) {
          this.guideAll.guidehandStatus = true
          this.list[2].src = ''
        } else if (newVaule === 22) {
          this.$refs.audio4.play()
          this.guideAll.guide5 = true
        } else if (newVaule === 24) {
          this.list[2].src = './static/page70/page70-5.png'
          this.guideAll.wrapper = false
          clearInterval(this.timer)
        }
      },
      goToNextStatus(newValue) {
        if (newValue && this.$refs.audio6) {
          this.$refs.audio6.play()
        }
      }
    },
    components: {
      page72
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/pure.scss";

  .page70 {
    .page_content {
      .content_wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        .drag_target {
          flex: 314;
          position: relative;
          .drag_target_c {
            position: absolute;
            width: percent(120, 960);
            height: percent(94, 314);
            right: percent(188, 960);
            top: percent(201, 314);
            border-radius: percent(12, 120);
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            .drag_target_box {
              width: 100%;
              height: 100%;
            }
          }

        }
        .drag_oops {
          flex: 173;
          position: relative;
          .drag {
            position: absolute;
            width: percent(120, 960);
            height: percent(98, 173);
            border-radius: percent(12, 120);
            overflow: hidden;
            top: percent(33, 173);
          }
          .drag_1 {
            left: percent(212, 960);
          }
          .drag_2 {
            left: percent(346, 960);
          }
          .drag_3 {
            left: percent(479, 960);
          }
          .drag_4 {
            right: percent(228, 960);
          }
        }
        .voice_btn {
          flex: 233;
          .voice {
            width: percent(70, 960);
            height: percent(70, 233);
            margin-left: percent(171, 960);
          }
        }
      }
      .guide_wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        .guide_content {
          position: relative;
          width: 100%;
          height: 100%;
          .guide {
            position: absolute;
          }
          .guide_1 {
            width: percent(260, 960);
            height: percent(206, 720);
            top: percent(17, 720);
            left: percent(10, 960);
          }
          .guide_2 {
            width: percent(222, 960);
            height: percent(117, 720);
            top: percent(313, 720);
            left: percent(10, 960);
          }
          .guide_3 {
            width: percent(260, 960);
            height: percent(206, 720);
            top: percent(17, 720);
            left: percent(522, 960);
          }
          .guide_4 {
            width: percent(260, 960);
            height: percent(227, 720);
            top: percent(417, 720);
            left: percent(329, 960);
          }
          .guide_5 {
            width: percent(260, 960);
            height: percent(204, 720);
            bottom: percent(49, 720);
            right: percent(42, 960);
          }
          .guide_remind {
            width: percent(192, 960);
            height: percent(157, 720);
            bottom: percent(28, 720);
            left: percent(32, 960);
          }
          .guide_hand {
            width: percent(121, 960);
            height: percent(200, 720);
            top: percent(348, 720);
            left: percent(478, 960);
          }
          .guide_hand_active {
            width: percent(121, 960);
            height: percent(200, 720);
            top: percent(202, 720);
            left: percent(652, 960);
            border-radius: percent(12, 120);
            overflow: hidden;
          }
          .guide_one {
            width: percent(93, 960);
            height: percent(64, 720);
            top: percent(226, 720);
            left: percent(82, 960);
          }
          .guide_two {
            width: percent(104, 960);
            height: percent(57, 720);
            top: percent(248, 720);
            left: percent(221, 960);
          }
          .guide_three {
            width: percent(120, 960);
            height: percent(65, 720);
            top: percent(270, 720);
            left: percent(336, 960);
          }
          .guide_four {
            width: percent(120, 960);
            height: percent(59, 720);
            top: percent(213, 720);
            left: percent(448, 960);
          }
          .guide_five {
            width: percent(121, 960);
            height: percent(51, 720);
            top: percent(348, 720);
            left: percent(404, 960);
          }
          .guide_six {
            width: percent(86, 960);
            height: percent(61, 720);
            top: percent(360, 720);
            left: percent(294, 960);
          }
          .guide_seven {
            width: percent(142, 960);
            height: percent(80, 720);
            top: percent(368, 720);
            right: percent(122, 960);
          }
          .guide_eight {
            width: percent(96, 960);
            height: percent(90, 720);
            bottom: percent(219, 720);
            left: percent(208, 960);
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
  }

</style>
