<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page72 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page69.png" alt="">
          <goodjob
            @goNextpage="goNextpage"
            v-if="checkStatus === 1"
          ></goodjob>
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
                  :style="[remindCircles]"
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
            <div class="btn_wrapper">
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
                      :class="[item.className, remindCircle.border ? 'choose_btn_guide' : '']"
                      :style="item.remind ? item.remind : ''"
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
                  @click.stop="checkAnswer(6, 0)"
                ></div>
              </div>
            </div>
          </div>
          <div
            class="remind_wrapper"
            v-show="guideAll.wrapper"
          >
            <div class="remind_content">
              <div v-show="guideAll.target" class="content target target1"></div>
              <div v-show="guideAll.target" class="content target target2"></div>
              <div v-show="guideAll.target" class="content target target3"></div>
              <div v-show="guideAll.target" class="content target target4"></div>
              <div
                class="content hand"
                :class="guideAll.handMove ? 'hand_active': ''"
                v-show="guideAll.hand"
              >
                <img src="./guide-hand.png" alt="">
              </div>
              <div
                class="content monkey"
                v-show="guideAll.monkey"
              >
                <img src="./guide.png" alt="">
              </div>
              <div
                class="single_hand"
                v-show="guideAll.singleHand"
                :class="singleHandActive? 'single_hand_active':''"
              >
                <img src="./guide-hand-2.png" alt="">
              </div>
              <div
                class="current_circle"
                v-show="guideAll.current"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <page72 v-if="!pageStatus"></page72>
      <audio ref="audio" src="./static/MonkeyBusiness/77.mp3"></audio>
      <audio ref="audiotrue" src="./static/MonkeyBusiness/78.mp3"></audio>
      <audio ref="audiofalse" src="./static/MonkeyBusiness/81.mp3"></audio>
      <audio ref="audiofalseremind" src="./static/MonkeyBusiness/78b.mp3"></audio>

    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page72 from 'components/page72/page72'
  import {goToNext, patterns} from 'common/js/mixins'

  let list = [
    {
      id: '2',
      className: 'choose_a',
      src: './static/page69/page69-1.png'
    },
    {
      id: '3',
      className: 'choose_b',
      src: './static/page69/page69-2.png'
    },
    {
      id: '1',
      className: 'choose_c',
      src: './static/page69/page69-3.png'
    },
    {
      id: '4',
      className: 'choose_d',
      src: './static/page69/page69-4.png'
    }
  ]

  export default {
    mixins: [goToNext, patterns],
    created() {
      this.guideTimer = setInterval(() => {
        this.guideNum++
      }, 1000)
    },
    data() {
      return {
        list: list,
        list2: [],
        editable: true,
        isDragging: false,
        delayedDragging: false,
        goToNextStatus: 0,
        checkStatus: 0,
        checkOnOff: true,
        remindCircle: {},
        remindCircles: {},
        guideAll: {
          wrapper: true,
          hand: false,
          handMove: false,
          target: false,
          singleHand: false,
          monkey: true,
          current: false
        },
        guideNum: 0,
        wrongGoStatus: false,
        singleHandActive: false
      }
    },
    methods: {
      filterDatas(data) {
        for (let value of data) {
          if (value.id === '1') {
            value.remind = 'border: 6px solid red;'
          }
        }
        return data
      },
      checkAnswer(stage, poinsts) {
        if (this.checkOnOff) {
          this.audioLoad()
          this.audioLoad('audiotrue')
          this.audioLoad('audiofalse')
          this.audioLoad('audiofalseremind')
          if (this.goToNextStatus === 1) {
            // this.uploadResult(stage, poinsts, 'page69', true)
            this.audioPlay('audiotrue')
            this.checkStatus = 1
          } else {
            this.audioPlay('audiofalse')
            this.checkStatus = 2
            // this.uploadResult(stage, poinsts, 'page69', false)
            this.guideAll.wrapper = true
            this.remindTimer1 = setTimeout(() => {
              this.list = list
              this.list2 = []
              this.guideAll.hand = true
            }, 7000)
            this.remindTimer2 = setTimeout(() => {
              this.guideAll.handMove = true
            }, 8000)
            this.remindTimer3 = setTimeout(() => {
              this.list[2].src = ''
              this.wrongGoStatus = true
              this.audioPlay('audiofalseremind')
            }, 9000)
            this.remindTimer4 = setTimeout(() => {
              this.audioPlay()
              this.goNext(72)
            }, 17000)
          }
          this.checkOnOff = false
        }
      },
      wrongGo() {
        if (this.wrongGoStatus) {
          this.checkStatus = 0
          this.audioPlay()
          this.goNext(72)
        }
      },
      cancleAnswer() {
        if (this.list2.length) {
          this.list = list
          this.list2 = []
          this.editable = true
        }
      },
      goNextpage() {
        this.audioPause('audiotrue')
        this.pageStatus = false
        this.$refs.audio.load()
        this.$refs.audio.play()
      }
    },
    watch: {
      guideNum(newValue) {
        if (newValue === 1) {
          this.guideAll.target = true
          this.guideAll.singleHand = true
        } else if (newValue === 4) {
          this.singleHandActive = true
        } else if (newValue === 9) {
          this.guideAll.singleHand = false
        } else if (newValue === 11) {
          this.guideAll.target = false
          this.remindCircle = {
            border: '8px solid red',
            boxSizing: 'border-box',
            borderRadius: '30px'
          }
        } else if (newValue === 13) {
          this.remindCircle = {}
          this.remindCircles = {
            border: '8px solid red',
            boxSizing: 'border-box',
            borderRadius: '30px'
          }
        } else if (newValue === 15) {
          this.remindCircle = {}
          this.guideAll.current = true
          this.guideAll.hand = true
        } else if (newValue === 16) {
        } else if (newValue === 21) {
          this.guideAll.handMove = true
        } else if (newValue === 22) {
          this.list[2].src = ''
          this.guideAll.current = false
        } else if (newValue === 25) {
          this.remindCircles = {}
          this.remindCircle = {}
          this.list2 = []
          this.editable = true
          this.guideAll.hand = false
          this.list = list
          this.guideAll.handMove = false
          this.guideAll.wrapper = false
          this.guideAll.monkey = false
          this.list[2].src = './static/page69/page69-3.png'
          clearInterval(this.guideNum)
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

  .page_start_wrapper {
    @extend %page_start_wrapper;
    .empty {
      flex: 405;
      display: flex;
      flex-direction: column;
      .voice_btns {
        width: 100%;
        flex: 105;
        display: flex;
        justify-content: flex-end;
        .voice {
          cursor: pointer;
          height: percent(90, 105);
          width: percent(80);
          margin-right: percent(20);
          margin-top: percent(15);
          border-radius: 50%;
        }
        .close {
          @extend .voice;
        }
      }
      .target_box {
        flex: 300;
        display: flex;
        justify-content: flex-end;
        .target_box_content {
          width: percent(170);
          height: percent(190, 300);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: percent(96);
          margin-top: percent(90);
          .choose_btn {
            width: 100%;
            height: 100%;
            border-radius: percent(22, 170);
            overflow: hidden;
            img {
              @extend .choose_btn;
            }
          }
        }
        .target_box_content_l {
          @extend .target_box_content;
          width: percent(230);
          margin-right: percent(35);
        }
      }
    }
    .btn_wrapper {
      flex: 315;
      .btns_content {
        height: percent(190, 315);
        margin-top: percent(60);
        display: flex;
        align-items: center;
        .choose_btns {
          width: percent(1140);
          height: 100%;
          position: relative;
          .choose_btn {
            width: percent(170, 1140);
            height: 100%;
            position: absolute;
            border-radius: percent(22, 170);
            overflow: hidden;
            cursor: pointer;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .choose_btn_guide {
            border: 8px solid red;
            box-sizing: border-box;
            border-radius: 30px;
          }
          .choose_btn_l {
            @extend .choose_btn;
            width: percent(230, 1140);
          }
          .choose_a {
            left: percent(139, 1140);
            background-size: cover;
          }
          .choose_b {
            left: percent(329, 1140);
            background-size: cover;
          }
          .choose_c {
            left: percent(519, 1140);
            background-size: cover;
          }
          .choose_d {
            left: percent(709, 1140);
            background-size: cover;
          }
          .choose_a_l {
            left: percent(35, 1140);
            background-size: cover;
          }
          .choose_b_l {
            left: percent(275, 1140);
            width: percent(250, 1140);
            background-size: cover;
          }
          .choose_c_l {
            left: percent(535, 1140);
            background-size: cover;
          }
          .choose_d_l {
            left: percent(775, 1140);
            background-size: cover;
          }
          .sortable-chosen {
            border-radius: percent(22, 170);
            overflow: hidden;
          }
        }
        .start_btn {
          width: percent(120);
          height: percent(130, 190);
          border-radius: 50%;
        }
      }

    }
  }

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
      .content {
        position: absolute;
        box-sizing: border-box;
      }
      .target {
        border: 8px solid red;
        width: percent(202, 1280);
        height: percent(213, 720);
        border-radius: 30px;
        top: percent(179, 720);
      }
      .target1 {
        left: percent(78, 1280);
      }
      .target2 {
        left: percent(308, 1280);
      }
      .target3 {
        left: percent(538, 1280);
      }
      .target4 {
        left: percent(768, 1280);
      }
      .hand {
        width: percent(171, 1280);
        height: percent(367, 720);
        left: percent(520, 1280);
        top: percent(464, 720);
        z-index: 2;
        transition: all 1s;
      }
      .hand_active {
        left: percent(1014, 1280);
        top: percent(198, 720);
      }
      .single_hand {
        position: absolute;
        width: percent(159, 1280);
        height: percent(259, 720);
        left: percent(120, 1280);
        top: percent(320, 720);
      }
      .single_hand_active {
        animation: move 5s;
      }
      .current_circle{
        position: absolute;
        border: 8px solid red;
        bottom: percent(54, 720);
        left: percent(506, 1280);
        width: percent(180, 1280);
        height: percent(200, 720);
        border-radius: 30px;
      }
      @keyframes move {
        25% {
          left: percent(120, 1280);
        }
        50% {
          left: percent(350, 1280);
        }
        75% {
          left: percent(580, 1280);
        }
        100% {
          left: percent(820, 1280);
        }
      }
      .monkey {
        width: percent(291, 1280);
        height: percent(253, 720);
        bottom: 0;
        right: percent(144, 1280);
      }
    }
  }

</style>
