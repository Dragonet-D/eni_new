<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page8 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page8.png" alt="">
          <goodjob
            @goNextpage="goNextpage"
            v-if="checkStatus === 1"
          ></goodjob>
          <wronganswer
            v-if="checkStatus === 2"
            @goRemind="goRemindNext"
          >
          </wronganswer>
          <div class="page_start_wrapper">
            <div class="empty">
              <div class="voice_btns">
                <div class="voice"></div>
                <div
                  class="close"
                  @click="closeAudio"
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
                    class="box_content"
                    v-for="item in list2"
                  >
                    <img :src="item.src" alt="">
                  </div>
                </draggable>
              </div>
            </div>
            <div
              class="btn_wrapper"
              @click="cancleAnswer"
            >
              <div class="btns_content">
                <draggable
                  class="choose_btns"
                  v-model="list"
                  :options="dragOptions"
                  :move="onMove"
                  @start="isDragging = true"
                  @end="isDragging = false"
                >

                  <div
                    v-for="item in list"
                    class="choose_btn"
                    :class="item.className"
                    :key="item.id"
                    :data-id="item.id"
                    :style="item.remind ? item.remind : ''"
                    @touchstart.stop="cancleAnswer"
                    @mousemove.stop="cancleAnswer"
                  >
                    <img :src="item.src" alt="">
                  </div>
                </draggable>
                <div
                  class="start_btn needclick"
                  @click.stop="checkAnswer"
                ></div>
              </div>
            </div>
          </div>
          <div
            class="hand_remind"
            v-show="remindStatus"
            @click="closeRemind"
          >
            <div class="hand_content">
              <div class="img_wrapper">
                <img src="./guide-hand.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <page9 v-if="pageChoose === 1"></page9>
      <page11 v-if="pageChoose === 2"></page11>
      <audio ref="audio" src="./static/MonkeyBusiness/5.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page9 from 'components/page9/page9'
  import page11 from 'components/page11/page11'
  import {goToNext, patterns} from 'common/js/mixins'

  let list = [
    {
      id: '2',
      className: 'choose_a',
      src: './static/page8/page8-1.png'
    },
    {
      id: '1',
      className: 'choose_b',
      src: './static/page8/page8-2.png'
    },
    {
      id: '3',
      className: 'choose_c',
      src: './static/page8/page8-3.png'
    },
    {
      id: '4',
      className: 'choose_d',
      src: './static/page8/page8-4.png'
    }
  ]

  export default {
    mixins: [goToNext, patterns],
    created() {
      this.timer = setTimeout(() => {
        this.remindStatus = false
      }, 3000)
    },
    data() {
      return {
        list: list,
        list2: [],
        editable: true,
        editable1: true,
        isDragging: false,
        delayedDragging: false,
        goToNextStatus: 2,
        remindStatus: true,
        pageChoose: 0,
        checkStatus: 0,
        checkOnOff: true
      }
    },
    methods: {
      start() {
        this.isDragging = true
      },
      checkAnswer() {
        if (this.checkOnOff) {
          if (this.$refs.audio) {
            this.$refs.audio.pause()
          }
          if (this.goToNextStatus === 1) {
            this.checkStatus = 1
            // this.uploadResult(1, 1, true)
          } else {
            this.checkStatus = 2
            // this.uploadResult(1, 1, false)
            this.timer1 = setTimeout(() => {
              this.goRemindNext()
              this.list = list
            }, 6000)
          }
          this.checkOnOff = false
        }
      },
      cancleAnswer() {
        if (this.list2.length && this.list2[0].id !== '1') {
          this.list = list
          this.list2 = []
          this.editable = true
        }
      },
      goNextpage() {
        this.pageChoose = 2
        this.goNext(11)
      },
      closeRemind() {
        if (this.$refs.audio) {
          this.$refs.audio.pause()
        }
        this.remindStatus = false
        clearTimeout(this.timer)
      },
      goRemindNext() {
        this.checkStatus = 0
        this.list = list
        this.list2 = []
        this.editable = false
        setTimeout(() => {
          this.goNext(9)
          this.pageChoose = 2
        }, 2000)
        this.list = this.filterData(list)
        if (this.timer) {
          clearTimeout(this.timer1)
        }
      }
    },
    components: {
      page9,
      page11
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
          height: percent(90, 105);
          width: percent(80);
          margin-right: percent(20);
          margin-top: percent(15);
          border-radius: 50%;
        }
        .close {
          @extend .voice;
          cursor: pointer;
        }
      }
      .target_box {
        flex: 300;
        display: flex;
        justify-content: flex-end;
        .target_box_content {
          width: percent(166);
          height: percent(178, 300);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: percent(13);
          margin-top: percent(96);
          .box_content {
            width: 100%;
            height: 100%;
            border-radius: percent(22, 170);
            overflow: hidden;
            img {
              @extend .box_content;
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
        height: percent(180, 315);
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
            box-sizing: border-box;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .choose_btn_l {
            @extend .choose_btn;
            width: percent(230, 1140);
          }
          .choose_a {
            left: percent(15, 1140);
            background-size: cover;
          }
          .choose_b {
            left: percent(245, 1140);
            background-size: cover;
          }
          .choose_c {
            left: percent(475, 1140);
            background-size: cover;
          }
          .choose_d {
            left: percent(705, 1140);
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
      .img_wrapper {
        animation: handmove 3s linear;
        transition: 3s;
        position: absolute;
        width: percent(149, 1280);
        height: percent(220, 720);
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
