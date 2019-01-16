<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div
        class="page11 page"
        v-show="pageStatus"
      >
        <div class="page_content">
          <img class="page_bg" src="./page7.png" alt="">
          <goodjob
            @goNextpage="goNextpage(11)"
            v-if="checkStatus === 1"
          ></goodjob>
          <div
            class="hand_remind"
            v-show="guideAll.wrapper"
          >
            <div class="hand_content">
              <div
                v-show="guideAll.hand"
                class="img_wrapper"
                :class="[guideAll.handeStatus ? 'img_wrapper_active' : '', guideAll.handeRemind ? 'img_hand_active' : '']"
              >
                <img src="./guide-hand.png" alt="">
              </div>
              <div
                class="single_hand"
                v-show="guideAll.singleHand"
                :class="guideAll.singleHandActive ? 'single_hand_5' : ''"
              >
                <img src="./guide-hand-2.png" alt="">
              </div>
              <div
                class="taget_line"
                v-show="guideAll.tagetline"
              ></div>
              <div
                class="target_box"
                v-show="guideAll.targetbox"
              ></div>
              <div
                class="replay"
                v-show="guideAll.replay"
              ></div>
              <div
                class="can_drag"
                v-show="guideAll.candrag"
              ></div>
              <div
                class="check_btn"
                v-show="guideAll.checkbtn"
              >
              </div>
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
                <div class="voice"></div>
                <div
                  class="close"
                  @click="relisten"
                ></div>
              </div>
              <div class="target_box">
                <draggable
                  class="target_box_content"
                  v-model="list2"
                  :options="dragOptions"
                  :move="onMove"
                >
                  <div
                    class="choose_btn"
                    v-for="item in list2"
                    :class="item.className"
                  >
                    <img :src="item.src" alt="">
                  </div>
                </draggable>
              </div>
            </div>
            <div
              class="btn_wrapper"
            >
              <div class="btns_content">
                <div
                  class="choose_btns"
                  @touchstart.stop="cancleAnswer"
                >
                  <draggable
                    v-model="list"
                    :options="dragOptions"
                    :move="onMove"
                    @start="isDragging=true"
                    @end="isDragging=false"
                    style="width: 100%;height: 100%"
                  >
                    <div
                      v-for="item in list"
                      class="choose_btn"
                      :class="item.className"
                      :key="item.id"
                      :data-id="item.id"
                      @mousedown.stop="cancleAnswer"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                </div>
                <div
                  class="start_btn needclick"
                  @click.stop="checkAnswer(1, 0)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <page11 v-if="!pageStatus"></page11>
      <audio id="audio_page11" ref="audio" src="./static/MonkeyBusiness/12.mp3"></audio>
      <audio class="audio_page11" ref="audiotrue" src="./static/MonkeyBusiness/13.mp3"></audio>
      <audio class="audio_page11" ref="audiofalse" src="./static/MonkeyBusiness/81.mp3"></audio>
      <audio class="audio_page11" ref="audiofalseremind" src="./static/MonkeyBusiness/15a.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page11 from 'components/page11/page11'
  import {goToNext, patterns} from 'common/js/mixins'

  let list = [
    {
      id: '2',
      className: 'choose_a',
      src: './static/page7/page7-1.png'
    },
    {
      id: '1',
      className: 'choose_b',
      src: './static/page7/page7-2.png'
    },
    {
      id: '3',
      className: 'choose_c',
      src: './static/page7/page7-3.png'
    },
    {
      id: '4',
      className: 'choose_d',
      src: './static/page7/page7-4.png'
    }
  ]

  export default {
    mixins: [goToNext, patterns],
    mounted() {
      this.init()
    },
    data() {
      return {
        list: list,
        list2: [],
        editable: true,
        editable1: true,
        isDragging: false,
        delayedDragging: false,
        goToNextStatus: false,
        checkStatus: 0,
        checkOnOff: true,
        sumGuidsTime: 0,
        guideAll: {
          targetbox: false,
          replay: false,
          candrag: false,
          checkbtn: false,
          tagetline: false,
          wrapper: true,
          handeStatus: false,
          hand: false,
          singleHand: false,
          singleHandActive: false,
          handeRemind: false,
          monkey: true
        },
        wrongGoStatus: false
      }
    },
    methods: {
      init() {
        this.timer = setInterval(() => {
          this.sumGuidsTime++
        }, 1000)
      },
      cancleAnswer() {
        if (this.list2.length) {
          this.list = list
          this.list2 = []
          this.editable = true
        }
      },
      wrongGo(num) {
        this.checkStatus = 0
        this.audioLoad()
        this.$refs.audiofalse.pause()
        setTimeout(() => {
          this.audioPlay()
          this.goNext(num)
        }, 2000)
      },
      goNextpage(num) {
        this.$refs.audiotrue.pause()
        this.audioPlay()
        this.goNext(num)
      },
      checkAnswer(stage, poinsts) {
        if (this.list2.length) {
          this.audioLoad('audiotrue')
          this.audioLoad('audiofalse')
          this.audioLoad('audiofalseremind')
          this.audioLoad()
          this.prevOnePause(7)
          if (this.goToNextStatus === 1) {
            // this.uploadResult(stage, poinsts, 'page7', true)
            this.checkStatus = 1
            this.audioPlay('audiotrue')
          } else {
            // this.uploadResult(stage, poinsts, 'page7', false)
            this.checkStatus = 2
            this.list = list
            this.list[1].src = ''
            this.list2 = []
            this.guideAll.wrapper = true
            this.guideAll.hand = true
            this.guideAll.monkey = false
            setTimeout(() => {
              this.guideAll.handeRemind = true
            }, 6000)
            setTimeout(() => {
              this.audioPlay('audiofalseremind')
            }, 8000)
            setTimeout(() => {
              this.guideAll.wrapper = false
              this.audioPlay()
              this.goNext(11)
            }, 19000)
            this.audioPlay('audiofalse')
          }
        }
      }
    },
    watch: {
      sumGuidsTime(newVaule) {
        if (newVaule === 1) {
          // 1 播放
          this.guideAll.tagetline = true
          this.guideAll.singleHand = true
        } else if (newVaule === 5) {
          this.guideAll.singleHandActive = true
        } else if (newVaule === 9) {
          // 2 播放 第一段
          this.guideAll.tagetline = false
          this.guideAll.singleHand = false
          this.guideAll.candrag = true
        } else if (newVaule === 12) {
          // 2 播放 第二段
          this.guideAll.targetbox = true
          this.guideAll.candrag = false
        } else if (newVaule === 14) {
          // 3 播放
          this.guideAll.candrag = true
          this.guideAll.targetbox = false
          this.guideAll.hand = true
        } else if (newVaule === 20) {
          // 3 播放完毕 手移动
          this.guideAll.candrag = false
          this.guideAll.targetbox = true
          this.guideAll.handeStatus = true
          this.guideAll.checkbtn = true
          this.list[1].src = ''
        } else if (newVaule === 22) {
          // 4 播放
          this.guideAll.targetbox = false
          this.guideAll.handeStatus = false
          this.list2 = [{
            id: '11',
            className: 'choose_b',
            src: './static/page7/page7-2.png'
          }]
          this.guideAll.hand = false
          this.guideAll.checkbtn = false
        } else if (newVaule === 26) {
          this.guideAll.replay = true
        } else if (newVaule === 27) {
          // 5 播放
          this.guideAll.checkbtn = false
          this.guideAll.targetbox = false
        } else if (newVaule === 29) {
          this.guideAll.replay = false
        } else if (newVaule === 30) {
          this.guideAll.candrag = true
        } else if (newVaule === 33) {
          // 6 播放
          this.guideAll.wrapper = false
          this.list2 = []
          this.list[1].src = './static/page7/page7-2.png'
          this.editable = true
          clearInterval(this.timer)
        }
      }
    },
    components: {
      page11
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .hand_remind {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10;

    .hand_content {
      position: relative;
      width: 100%;
      height: 100%;

      div {
        box-sizing: border-box;
        position: absolute;
      }

      .img_wrapper {
        position: absolute;
        left: percent(244, 1280);
        top: percent(461, 720);
        width: percent(170, 1280);
        height: percent(394, 720);
        z-index: 2;
        transition: all 2s;
      }

      .img_wrapper_active {
        left: percent(1100, 1280);
        top: percent(200, 720);
      }

      .img_hand_active {
        left: percent(1095, 1280);
        top: percent(200, 720);
      }

      .single_hand {
        width: percent(149, 1280);
        height: percent(259, 720);
        z-index: 2;
        top: percent(332, 720);
        left: percent(40, 1280);
      }

      .single_hand_1 {
        left: percent(220, 1280);
      }

      .single_hand_2 {
        left: percent(400, 1280);
      }

      .single_hand_3 {
        left: percent(590, 1280);
      }

      .single_hand_4 {
        left: percent(760, 1280);
      }

      .single_hand_5 {
        animation: move 4s;
      }

      @keyframes move {
        16.5% {
          left: percent(40, 1280);
        }
        34.25% {
          left: percent(220, 1280);
        }
        49.5% {
          left: percent(400, 1280);
        }
        70.5% {
          left: percent(590, 1280);
        }
        91.25% {
          left: percent(760, 1280);
        }
        100% {
          left: percent(940, 1280);
        }
      }

      .taget_line {
        width: percent(1100, 1280);
        height: percent(211, 720);
        top: percent(180, 720);
        left: 0;
        border-radius: 30px;
        border: 8px solid red;
      }

      .target_box {
        width: percent(200, 1280);
        height: percent(200, 720);
        top: percent(190, 720);
        right: 0;
        border-radius: 30px;
        border: 8px solid red;
      }

      .replay {
        width: percent(110, 1280);
        height: percent(110, 720);
        top: 0;
        right: percent(2, 1280);
        border-radius: 30px;
        border: 8px solid red;
      }

      .can_drag {
        width: percent(892, 1280);
        height: percent(218, 720);
        bottom: percent(56, 720);
        left: 0;
        border-radius: 30px;
        border: 8px solid red;
      }

      .check_btn {
        width: percent(151, 1280);
        height: percent(151, 720);
        bottom: percent(87, 720);
        right: 0;
        display: flex;
        font-size: 24px;
        color: red;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        border-radius: 30px;
        border: 8px solid red;
      }

      .monkey {
        width: percent(291, 1280);
        height: percent(253, 720);
        bottom: 0;
        right: percent(141, 1280);
      }
    }
  }

  @keyframes handmove {
    0% {
      bottom: 0;
      left: percent(270, 1280);
    }
    100% {
      top: percent(267, 720);
      right: percent(30, 1280);
    }
  }
</style>
