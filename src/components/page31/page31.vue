<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page31 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page31-guide.png" alt="">
          <div class="page_show_wrapper">
            <div class="page_show_top">
              <div class="page_show_l page_show"></div>
              <div
                class="page_show_r page_show"
                @click="pageStatus = false"
              >
                <img :src="src" alt="">
              </div>
            </div>
            <div class="page_show_bottom">
              <div
                class="voice_btn"
                @click="replay"
              ></div>
            </div>
          </div>
          <div
            class="page_guide_wrapper"
            v-show="guidAll.wrapper"
          >
            <div
              class="page_guide_content"
            >
              <div
                class="page_guide page_guide_1"
                v-show="guidAll.status1"
              >
                <div class="img_wrapper">
                  <img src="./page31-1-1.png" alt="">
                </div>
              </div>
              <div
                class="page_guide page_guide_2"
                v-show="guidAll.status2"
              >
                <div class="img_wrapper">
                  <img src="./page31-1-2.png" alt="">
                </div>
              </div>
              <div
                class="page_guide page_guide_3"
                v-show="guidAll.status3"
              >
                <div class="img_wrapper">
                  <img src="./page31-1-3.png" alt="">
                </div>
              </div>
              <div
                class="page_guide page_guide_4"
                v-show="guidAll.status4"
              >
                <div class="img_wrapper">
                  <img src="./page31-1-4.png" alt="">
                </div>
              </div>
              <div
                class="page_guide page_guide_5"
                v-show="guidAll.status5"
              >
                <div class="img_wrapper">
                  <img src="./page31-1-5.png" alt="">
                </div>
              </div>
              <div
                class="page_guide page_guide_btn"
                v-show="guidAll.btnstatus"
              >
                <div class="img_wrapper">
                  <img src="./page31-1-6.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <page32 v-if="!pageStatus"></page32>
      <audio ref="audio" src="./static/MonkeyBusiness/18.mp3"></audio>
      <audio ref="audio1" src="./static/MonkeyBusiness/19.mp3"></audio>
      <audio ref="audio2" src="./static/MonkeyBusiness/20.mp3"></audio>
      <audio ref="audio3" src="./static/MonkeyBusiness/21.mp3"></audio>
      <audio ref="audio4" src="./static/MonkeyBusiness/11.mp3"></audio>
      <audio ref="audio5" src="./static/MonkeyBusiness/9.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page32 from 'components/page32/page32'
  import {goToNext} from 'common/js/mixins'

  export default {
    mixins: [goToNext],
    created() {
      this.init()
    },
    data() {
      return {
        // src: './static/page31/page31-hand.png'
        src: './static/page31/page31-2.png',
        sumGuidsTime: 0,
        guidAll: {
          status1: true,
          status2: false,
          status3: false,
          status4: false,
          status5: false,
          btnstatus: false,
          wrapper: true
        }
      }
    },
    watch: {
      sumGuidsTime(newValue) {
        if (newValue === 3) {
          this.$refs.audio1.play()
          this.guidAll.status1 = false
          this.guidAll.status2 = true
        } else if (newValue === 7) {
          this.$refs.audio2.play()
          this.guidAll.status2 = false
          this.guidAll.status3 = true
        } else if (newValue === 10) {
          this.$refs.audio3.play()
          this.guidAll.status3 = false
          this.guidAll.status4 = true
          this.src = './static/page31/page31-hand.png'
        } else if (newValue === 13) {
          this.$refs.audio5.play()
          this.guidAll.status4 = false
          this.guidAll.btnstatus = true
        } else if (newValue === 18) {
          this.$refs.audio4.play()
          this.guidAll.status5 = true
          this.guidAll.btnstatus = false
        } else if (newValue === 20) {
          this.guidAll.status5 = false
          this.guidAll.wrapper = false
          this.src = './static/page31/page31-2.png'
          clearInterval(this.timer)
        }
      }
    },
    methods: {
      init() {
        this.timer = setInterval(() => {
          this.sumGuidsTime++
        }, 1000)
      },
      replay() {
        this.sumGuidsTime = 0
        this.guidAll = {
          status1: true,
          status2: false,
          status3: false,
          status4: false,
          status5: false,
          btnstatus: false,
          wrapper: true
        }
        this.$refs.audio.play()
        this.init()
      }
    },
    components: {
      page32
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .page_wrapper {
    .page31 {
      max-width: 1280px;
      margin-left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      .page_content {
        width: percent(910);
        height: percent(536, 960);
        .page_show_wrapper {
          position: absolute;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          .page_show_top {
            flex: 434;
            position: relative;
            .page_show {
              position: absolute;
              width: percent(268, 910);
              height: percent(281, 434);
              top: percent(70, 434);
            }
            .page_show_l {
              left: percent(88, 910);
            }
            .page_show_r {
              right: percent(66, 910);
            }
          }
          .page_show_bottom {
            flex: 100;
            .voice_btn {
              width: percent(91, 910);
              height: percent(91, 100);
              margin-left: percent(43, 910);
              border-radius: percent(12, 100);
            }
          }
        }
        .page_guide_wrapper {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          .page_guide_content {
            position: relative;
            width: 100%;
            height: 100%;
            .page_guide {
              position: absolute;
              .img_wrapper {
                position: relative;
                width: 100%;
                height: 100%;
              }
            }
            .page_guide_1 {
              top: percent(-94, 534);
              left: percent(-141, 910);
              width: percent(347, 910);
              height: percent(273, 534);
            }
            .page_guide_2 {
              top: percent(-94, 534);
              left: percent(221, 910);
              width: percent(347, 910);
              height: percent(273, 534);
            }
            .page_guide_3 {
              top: percent(-94, 534);
              right: percent(-52, 910);
              width: percent(347, 910);
              height: percent(273, 534);
            }
            .page_guide_4 {
              bottom: percent(-66, 534);
              right: percent(-132, 910);
              width: percent(347, 910);
              height: percent(283, 534);
            }
            .page_guide_5 {
              bottom: percent(-171, 534);
              left: percent(282, 910);
              width: percent(347, 910);
              height: percent(290, 534);
            }
            .page_guide_btn {
              bottom: percent(-29, 534);
              left: percent(-169, 910);
              width: percent(277, 910);
              height: percent(164, 534);
            }
          }
        }
      }
    }
  }


</style>
