<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div
        id="page6"
        class="page6 page"
        v-show="pageStatus"
      >
        <div class="page_content">
          <img class="page_bg" src="./page9-guide.png" alt="">
          <div class="page_show_wrapper">
            <div class="page_show_content">
              <div class="page_show_top">
                <draggable
                  class="show_target_wrapper"
                  v-model="list2"
                  :options="dragOptions"
                  :move="onMove"
                >
                  <div
                    class="show_target"
                    v-for="item in list2"
                  >
                    <img :src="item.src" alt="">
                  </div>
                </draggable>
              </div>
              <div
                class="page_show_mid"
                @click="cancleAnswer"
              >
                <draggable
                  class="show_chooses"
                  v-model="list"
                  :options="dragOptions"
                  :move="onMove"
                  @start="start"
                  @end="isDragging=false"
                >
                  <div
                    class="show_choose"
                    v-for="item in list"
                    :class="item.className"
                    :key="item.id"
                    :data-id="item.id"
                    @click.stop
                  >
                    <img :src="item.src" alt="">
                  </div>
                </draggable>
                <div class="page_show_mid_em"></div>
              </div>
              <div
                class="page_show_bottom"
                @click="cancleAnswer"
              >
                <div
                  class="voice_btn"
                  @click.stop="replay"
                ></div>
              </div>
            </div>
          </div>
          <div
            class="remind_mask"
            v-show="guidAll.wrapper"
          >
            <div class="mask_content">
              <div
                class="remind remind_1"
                v-show="guidAll.status1"
              >
                <div class="img_wrapper">
                  <img src="./page9-1.png" alt="">
                </div>
              </div>
              <div
                class="remind remind_2"
                v-show="guidAll.status2"
              >
                <div class="img_wrapper">
                  <img src="./page9-2.png" alt="">
                </div>
              </div>
              <div
                class="remind remind_3"
                v-show="guidAll.status3"
              >
                <div class="img_wrapper">
                  <img src="./page9-3.png" alt="">
                </div>
              </div>
              <div
                class="remind remind_4"
                v-show="guidAll.status4"
              >
                <div class="img_wrapper">
                  <img src="./page9-4.png" alt="">
                </div>
              </div>
              <div
                class="remind remind_5"
                v-show="guidAll.status5"
              >
                <div class="img_wrapper">
                  <img src="./page9-5.png" alt="">
                </div>
              </div>
              <div
                class="remind remind_6"
                v-show="guidAll.status6"
              >
                <div class="img_wrapper">
                  <img src="./page9-6.png" alt="">
                </div>
              </div>
              <div
                class="remind remind_7"
                v-show="guidAll.status7"
              >
                <div class="img_wrapper">
                  <img src="./page9-7.png" alt="">
                </div>
              </div>
              <div
                class="remind remind_btn"
                v-show="guidAll.btnstatus"
              >
                <div class="img_wrapper">
                  <img src="./page9-remind.png" alt="">
                </div>
              </div>
              <div class="remind remind_monkey">
                <div class="img_wrapper">
                  <img src="./page9-monkey.png" alt="">
                </div>
              </div>
              <div
                class="remind remind_hand"
                v-show="guidAll.remindhand"
                :class="remindHandSta? 'remind_hand_active': ''"
              >
                <div class="img_wrapper">
                  <img src="./hand-guid.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Page10 v-if="!pageStatus"></Page10>
      <audio ref="audio" src="./static/MonkeyBusiness/6.mp3"></audio>
      <audio ref="audio1" src="./static/MonkeyBusiness/7.mp3"></audio>
      <audio ref="audio2" src="./static/MonkeyBusiness/8.mp3"></audio>
      <audio ref="audio3" src="./static/MonkeyBusiness/9.mp3"></audio>
      <audio ref="audio4" src="./static/MonkeyBusiness/10.mp3"></audio>
      <audio ref="audio5" src="./static/MonkeyBusiness/11.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Page10 from 'components/page10/page10'
  import {goToNext, patternsRemind} from 'common/js/mixins'

  let list = [
    {
      id: '',
      className: 'show_choose_1',
      src: './static/page9/page9-1-1.png'
    },
    {
      id: '1',
      className: 'show_choose_2',
      src: ''
    },
    {
      id: '',
      className: 'show_choose_3',
      src: './static/page9/page9-1-3.png'
    },
    {
      id: '',
      className: 'show_choose_4',
      src: './static/page9/page9-1-4.png'
    }
  ]

  export default {
    mixins: [goToNext, patternsRemind],
    created() {
      this.init()
    },
    data() {
      return {
        list: list,
        list2: [],
        editable: true,
        isDragging: false,
        delayedDragging: false,
        goToNextStatus: false,
        sumGuidsTime: 0,
        guidAll: {
          status1: true,
          status2: false,
          status3: false,
          status4: false,
          status5: false,
          status6: false,
          status7: false,
          btnstatus: true,
          remindhand: true,
          wrapper: true
        },
        remindHandSta: false
      }
    },
    methods: {
      init() {
        this.timer = setInterval(() => {
          this.sumGuidsTime++
        }, 1000)
      },
      cancleAnswer() {
        if (this.list2.length && this.list2[0].id !== '1') {
          this.list = list
          this.list2 = []
          this.editable = true
        }
      },
      replay() {
        this.sumGuidsTime = 0
        this.remindHandSta = false
        this.guidAll = {
          status1: true,
          status2: false,
          status3: false,
          status4: false,
          status5: false,
          status6: false,
          status7: false,
          btnstatus: true,
          remindhand: true,
          wrapper: true
        }
        this.$refs.audio.play()
        this.init()
      }
    },
    watch: {
      sumGuidsTime(newVaule) {
        if (newVaule === 9) {
          this.guidAll.status1 = false
          this.guidAll.status2 = true
          this.$refs.audio1.play()
        } else if (newVaule === 12) {
          this.guidAll.status2 = false
          this.guidAll.status3 = true
        } else if (newVaule === 14) {
          this.$refs.audio2.play()
          this.guidAll.status3 = false
          this.guidAll.status4 = true
        } else if (newVaule === 20) {
          this.guidAll.status4 = false
          this.remindHandSta = true
          this.list[1].src = ''
        } else if (newVaule === 21) {
          this.$refs.audio3.play()
          this.guidAll.status5 = true
        } else if (newVaule === 25) {
          this.$refs.audio4.play()
          this.guidAll.status5 = false
          this.guidAll.status6 = true
        } else if (newVaule === 29) {
          this.$refs.audio5.play()
          this.guidAll.status6 = false
          this.guidAll.status7 = true
        } else if (newVaule === 31) {
          clearInterval(this.timer)
          this.list[1].src = './static/page9/page9-1-2.png'
          this.guidAll.wrapper = false
        }
      },
      list2(newValue) {
        if (newValue.length) {
          if (newValue[0].id) {
            this.goNext(10)
          }
        }
      }
    },
    components: {
      Page10
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .page_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .page_content {
      position: relative;
      .page_show_wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
        .page_show_content {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          .page_show_top {
            flex: 308;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            .show_target_wrapper {
              display: flex;
              justify-content: flex-end;
              box-sizing: border-box;
              width: percent(95, 960);
              height: percent(95, 308);
              margin-right: percent(146, 960);
              border-radius: percent(10, 95);
              img {
                width: 100%;
                height: 100%;
              }
              .show_target {
                width: 100%;
                height: 100%;
                border-radius: percent(12, 126);
                img {
                  @extend .show_target;
                }
              }
            }

          }
          .page_show_mid {
            flex: 179;
            display: flex;
            flex-direction: column;
            .show_chooses {
              position: relative;
              flex: 140;
              display: flex;
              align-items: flex-end;
              .show_choose {
                position: absolute;
                width: percent(97, 960);
                height: percent(97, 140);
                border-radius: percent(12, 126);
                overflow: hidden;
                img {
                  border-radius: percent(12, 126);
                  overflow: hidden;
                  width: 100%;
                  height: 100%;
                }
              }
              .show_choose_1 {
                left: percent(225, 960);
              }
              .show_choose_2 {
                left: percent(359, 960);
              }
              .show_choose_3 {
                left: percent(493, 960);
              }
              .show_choose_4 {
                left: percent(625, 960);
              }
            }
            .page_show_mid_em {
              flex: 38;
            }
          }
          .page_show_bottom {
            flex: 234;
            .voice_btn {
              height: percent(69, 234);
              width: percent(69, 960);
              margin-left: percent(172, 960);
              border-radius: percent(8, 69);
            }
          }
        }
      }
      .remind_mask {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        z-index: 10;
        .mask_content {
          position: relative;
          width: 100%;
          height: 100%;
          .remind {
            position: absolute;
            .img_wrapper {
              position: relative;
              width: 100%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
          .remind_1 {
            width: percent(444, 960);
            height: percent(175, 721);
            left: percent(24, 960);
            top: percent(65, 721);
          }
          .remind_2 {
            width: percent(221, 960);
            height: percent(146, 721);
            left: percent(24, 960);
            top: percent(285, 721);
          }
          .remind_3 {
            width: percent(331, 960);
            height: percent(165, 721);
            right: percent(77, 960);
            top: percent(103, 721);
          }
          .remind_4 {
            width: percent(379, 960);
            height: percent(137, 721);
            right: percent(156, 960);
            top: percent(323, 721);
            z-index: 2;
          }
          .remind_5 {
            width: percent(331, 960);
            height: percent(187, 721);
            left: percent(23, 960);
            bottom: percent(14, 721);
          }
          .remind_6 {
            @extend .remind_5;
            left: percent(377, 960);
            z-index: 2;
          }
          .remind_7 {
            width: percent(192, 960);
            height: percent(155, 721);
            right: percent(25, 960);
            bottom: percent(57, 721);
            z-index: 2;
          }
          .remind_btn {
            width: percent(209, 960);
            height: percent(123, 721);
            left: percent(12, 960);
            top: percent(436, 721);
          }
          .remind_monkey {
            width: percent(194, 960);
            height: percent(189, 721);
            right: percent(107, 960);
            top: percent(437, 721);
          }
          .remind_hand {
            width: percent(96, 960);
            height: percent(178, 721);
            border-radius: percent(12, 127);
            overflow: hidden;
            left: percent(359, 960);
            top: percent(353, 721);
          }
          .remind_hand_active {
            left: percent(719, 960);
            top: percent(214, 721);
          }
        }
      }
    }
  }


</style>
