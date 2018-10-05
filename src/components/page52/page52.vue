<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page52 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page52.png" alt="">
          <goodjob52
            @goNextpage="goNextpage"
            v-if="checkStatus === 1"
          ></goodjob52>
          <div class="page55_start_wrapper">
            <div class="page55_top">
              <div class="voice_btns">
                <div class="voice"></div>
                <div
                  class="close"
                  @click="relisten"
                ></div>
              </div>
            </div>
            <div class="page55_bottom">
              <div
                class="drag_wrapper"
                @click="cancelAnswer"
              >
                <div
                  class="drag_content drag_left"
                  @click.stop
                >
                  <draggable
                    class="drag_target"
                    v-model="list1"
                    :options="dragOptions1"
                    :move="onMove"
                    :style="{border: remindBorders, boxSizing: 'border-box'}"
                    @change="change1"
                  >
                    <div
                      class="drag_target_content"
                      v-for="(item, index) in list1"
                      :data-id="item.id"
                      :style="{border: item.remind, boxSizing: 'border-box'}"
                      @click="listClick(list1, 'list1', 'editable1')"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                  <draggable
                    class="drag_target"
                    v-model="list2"
                    :options="dragOptions2"
                    :move="onMove"
                    @change="change2"
                  >
                    <div
                      class="drag_target_content"
                      v-for="(item, index) in list2"
                      :data-id="item.id"
                      :style="{border: item.remind, boxSizing: 'border-box'}"
                      @click="listClick(list2, 'list2', 'editable2')"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                  <draggable
                    class="drag_target"
                    v-model="list3"
                    :options="dragOptions3"
                    :move="onMove"
                    @change="change3"
                  >
                    <div
                      class="drag_target_content"
                      v-for="(item, index) in list3"
                      :data-id="item.id"
                      :style="{border: item.remind, boxSizing: 'border-box'}"
                      @click="listClick(list3, 'list3', 'editable3')"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                  <draggable
                    class="drag_target"
                    v-model="list4"
                    :options="dragOptions4"
                    :move="onMove"
                    @change="change4"
                  >
                    <div
                      class="drag_target_content"
                      v-for="(item, index) in list4"
                      :data-id="item.id"
                      :style="{border: item.remind, boxSizing: 'border-box'}"
                      @click="listClick(list4, 'list4', 'editable4')"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                </div>
                <draggable
                  class="drag_content drag_right"
                  v-model="list"
                  :options="dragOptions"
                  :move="onMove"
                  @start="isDragging=true"
                  @end="isDragging=false"
                  @click.stop
                >
                  <div
                    class="drag_targets"
                    v-for="item in list"
                    :data-id="item.id"
                    :style="{border: remindBorder, boxSizing: 'border-box'}"
                    :class="item.className"
                  >
                    <img :src="item.src" alt="">
                  </div>
                </draggable>
              </div>
              <div
                class="go_wrapper"
              >
                <div
                  class="start_btn needclick"
                  @click.stop="checkAnswer(4, 0)"
                >
                </div>
              </div>
            </div>
          </div>
          <div
            class="remind_wrapper"
            v-show="guideAll.wrapper"
          >
            <div class="remind_content">
              <div
                class="num num1"
                v-show="guideAll.targetNum1"
              ></div>
              <div
                class="num num2"
                v-show="guideAll.targetNum"
              ></div>
              <div
                class="num num3"
                v-show="guideAll.targetNum"
              ></div>
              <div
                class="num num4"
                v-show="guideAll.targetNum"
              ></div>
              <div
                class="num num_one"
                v-show="guideAll.numOne"
              >

              </div>
              <div
                class="hand"
                v-show="guideAll.hand"
                :class="guideAll.handActive ? 'hand_active' : ''"
              >
                <img src="./guide-hand.png" alt="">
              </div>
              <div
                class="hand2"
                v-show="guideAll.hand2"
                :class="guideAll.handActive2 ? 'hand_active' : ''"
              >
                <img src="./guide-hand-two.png" alt="">
              </div>
              <div
                class="hand3"
                v-show="guideAll.hand3"
                :class="guideAll.handActive3 ? 'hand3_active' : ''"
              >
                <img src="./guide-hand-four.png" alt="">
              </div>
              <div
                class="hand4"
                v-show="guideAll.hand4"
                :class="guideAll.handActive4 ? 'hand4_active' : ''"
              >
                <img src="./guide-hand-three.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <page55 v-if="!pageStatus"></page55>
      <audio id="audio_page55" ref="audio" src="./static/MonkeyBusiness/58.mp3"></audio>
      <audio ref="audiotrue" src="./static/MonkeyBusiness/59.mp3"></audio>
      <audio ref="audiofalse" src="./static/MonkeyBusiness/81.mp3"></audio>
      <audio ref="audiofalseremind" src="./static/MonkeyBusiness/59a.mp3"></audio>
      <audio ref="audio58" src="./static/MonkeyBusiness/58.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page55 from 'components/page55/page55'
  import goodjob52 from 'components/goodjob52/goodjob52'
  import {goToNext, matchNumbers} from 'common/js/mixins'

  let list = [
    {
      id: '1',
      src: './static/page52/page52-1.png',
      className: 'drag_target_a'
    },
    {
      id: '2',
      src: './static/page52/page52-2.png',
      className: 'drag_target_b'
    },
    {
      id: '4',
      src: './static/page52/page52-4.png',
      className: 'drag_target_c'
    },
    {
      id: '3',
      src: './static/page52/page52-3.png',
      className: 'drag_target_d'
    }
  ]
  export default {
    mixins: [goToNext, matchNumbers],
    mounted() {
      this.init()
    },
    data() {
      return {
        list: list,
        guideAll: {
          hand: false,
          hand2: false,
          hand3: false,
          hand4: false,
          wrapper: true,
          handActive: false,
          handActive2: false,
          handActive3: false,
          handActive4: false,
          targetNum: false,
          targetNum1: false,
          numOne: false
        },
        remindBorder: '',
        wrongGoStatus: false,
        wrongGuideNum: 0,
        remindBorders: ''
      }
    },
    methods: {
      init() {
        this.guideTimer = setInterval(() => {
          this.guideRemidnum++
        }, 1000)
      },
      cancelAnswer() {
        if (!this.gotoNextoNOff) {
          this.goToNextStatus = 0
          this.list = list
          this.list1 = []
          this.list2 = []
          this.list3 = []
          this.list4 = []
          this.editable = true
          this.editable1 = true
          this.editable2 = true
          this.editable3 = true
          this.editable4 = true
        }
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
          this.audioLoad('audio58')
          this.audioLoad('audiotrue')
          this.audioLoad('audiofalse')
          this.audioLoad('audiofalseremind')
          if (this.list1[0].id === '1' && this.list2[0].id === '2' && this.list3[0].id === '3' && this.list4[0].id === '4') {
            this.checkStatus = 1
            this.audioPlay('audiotrue')
          } else {
            this.checkStatus = 2
            this.audioPlay('audiofalse')
            this.list = list
            this.list1 = []
            this.list2 = []
            this.list3 = []
            this.list4 = []
            this.wrongGuide()
          }
          this.checkOnOff = false
        }
      },
      wrongGuide() {
        this.wrongGuideTimer = setInterval(() => {
          this.wrongGuideNum++
        }, 1000)
      },
      wrongGo(num) {
        if (this.wrongGoStatus) {
          this.goNext(55)
          this.audioLoad('audio58')
          this.audioPlay('audio58')
        }
      },
      goNextpage() {
        this.goNext(55)
        this.audioPause('audiotrue')
        this.audioLoad('audio58')
        this.audioPlay('audio58')
      }
    },
    watch: {
      guideRemidnum(newValue) {
        if (newValue === 1) {
          this.guideAll.targetNum1 = true
        } else if (newValue === 6) {
          this.remindBorder = '6px solid red'
          this.guideAll.targetNum1 = false
        } else if (newValue === 10) {
          this.remindBorder = ''
          this.guideAll.numOne = true
          this.guideAll.hand = true
        } else if (newValue === 12) {
          this.remindBorders = '6px solid red'
        } else if (newValue === 16) {
          this.guideAll.handActive = true
          this.list[0].src = ''
        } else if (newValue === 18) {
        } else if (newValue === 23) {
        } else if (newValue === 24) {
          this.list[0].src = './static/page52/page52-1.png'
          this.list1 = []
          this.guideAll.wrapper = false
          this.remindBorders = ''
          this.guideAll.numOne = false
          this.remindBorder = ''
          this.editable1 = true
          this.goToNextStatus = 0
          clearInterval(this.guideTimer)
        }
      },
      wrongGuideNum(newValue) {
        if (newValue === 6) {
          this.guideAll.wrapper = true
          this.guideAll.hand = true
          this.guideAll.handActive = false
        } else if (newValue === 7) {
        } else if (newValue === 8) {
        } else if (newValue === 9) {
          this.guideAll.handActive = true
        } else if (newValue === 10) {
          this.guideAll.hand = false
          this.list1 = [{
            id: '1',
            src: './static/page52/page52-1.png',
            className: 'drag_target_a',
            remind: '8px solid red'
          }]
          this.list[0].src = ''
        } else if (newValue === 11) {
          this.guideAll.hand2 = true
        } else if (newValue === 12) {
          this.guideAll.handActive2 = true
        } else if (newValue === 13) {
          this.guideAll.hand2 = false
          this.list2 = [{
            id: '2',
            src: './static/page52/page52-2.png',
            className: 'drag_target_b',
            remind: '8px solid red'
          }]
          this.list[1].src = ''
        } else if (newValue === 14) {
          this.guideAll.hand4 = true
        } else if (newValue === 15) {
          this.guideAll.handActive4 = true
        } else if (newValue === 16) {
          this.guideAll.hand4 = false
          this.list3 = [{
            id: '3',
            src: './static/page52/page52-3.png',
            className: 'drag_target_d',
            remind: '8px solid red'
          }]
          this.list[3].src = ''
        } else if (newValue === 17) {
          this.guideAll.hand3 = true
        } else if (newValue === 18) {
          this.guideAll.handActive3 = true
        } else if (newValue === 19) {
          this.guideAll.hand3 = false
          this.list4 = [{
            id: '4',
            src: './static/page52/page52-4.png',
            className: 'drag_target_c',
            remind: '8px solid red'
          }]
          this.list[2].src = ''
        } else if (newValue === 20) {
          this.audioPlay('audiofalseremind')
        } else if (newValue === 28) {
          this.goNext(55)
          this.audioPlay('audio58')
          this.wrongGoStatus = true
          clearInterval(this.wrongGuideTimer)
        }
      }
    },
    components: {
      page55,
      goodjob52
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .page55_start_wrapper {
    @extend %page_start_wrapper;
    .page55_top {
      flex: 105;
      .voice_btns {
        width: 100%;
        height: 100%;
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
    }
    .page55_bottom {
      flex: 610;
      display: flex;
      .drag_wrapper {
        flex: 965;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .drag_content {
          width: percent(172, 965);
          height: percent(550, 615);
          box-sizing: border-box;
          position: relative;
        }
        .drag_left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .drag_target {
            width: 100%;
            height: percent(130, 550);
            border-radius: percent(12, 130);
            overflow: hidden;
            .drag_target_content {
              height: 100%;
              border-radius: percent(12, 130);
              overflow: hidden;
            }
          }
        }
        .drag_right {
          margin-left: percent(118, 965);
          .drag_targets {
            position: absolute;
            width: 100%;
            height: percent(130, 550);
            left: 0;
            border-radius: percent(12, 130);
            overflow: hidden;
          }
          .drag_target_a {
            top: 0;
          }
          .drag_target_b {
            top: percent(140, 550);
          }
          .drag_target_c {
            top: percent(280, 550);
          }
          .drag_target_d {
            bottom: 0;
          }
        }
      }
      .go_wrapper {
        flex: 315;
        position: relative;
        .start_btn {
          position: absolute;
          width: percent(120, 315);
          height: percent(130, 610);
          right: percent(20, 315);
          top: percent(390, 610);
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
    z-index: 10;
    .remind_content {
      width: 100%;
      height: 100%;
      .num {
        position: absolute;
        border: 8px solid red;
        box-sizing: border-box;
        border-radius: 30px;
        width: percent(202, 1280);
        height: percent(148, 720);
        left: percent(297, 1280);
      }
      .num1 {
        top: percent(119, 720);
      }
      .num2 {
        top: percent(260, 720);
      }
      .num3 {
        top: percent(407, 720);
      }
      .num4 {
        bottom: percent(26, 720);
      }
      .num_one {
        left: percent(775, 1280);
        top: percent(126, 720);
      }
      .hand {
        position: absolute;
        width: percent(240, 1280);
        height: percent(337, 720);
        left: percent(786, 1280);
        top: percent(138, 720);
        transition: all 1s;
      }
      .hand_active {
        left: percent(498, 1280);
      }
      .hand2 {
        @extend .hand;
        top: percent(274, 720);
      }
      .hand3 {
        @extend .hand;
        top: percent(410, 720);
      }
      .hand3_active {
        left: percent(498, 1280);
        top: percent(550, 720);
      }
      .hand4 {
        @extend .hand;
        top: percent(550, 720);
      }
      .hand4_active {
        left: percent(498, 1280);
        top: percent(410, 720);
      }
    }
  }
</style>
