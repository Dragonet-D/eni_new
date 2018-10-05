<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page11 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page41.png" alt="">
          <goodjob41
            @goNextpage="goNextpage"
            v-if="checkStatus === 1"
          ></goodjob41>
          <div class="page_start_wrapper">
            <div class="empty">
              <div class="voice_btns">
                <div
                  class="voice"
                ></div>
                <div
                  class="close"
                  @click="relisten"
                ></div>
              </div>
            </div>
            <div class="btn_wrapper">
              <div class="btns_content">
                <div
                  class="choose_btns"
                >
                  <div
                    class="choose_btn"
                    v-for="(item, index) in countNums"
                    :class="[item.className, index === btnActiveIndex ? 'choose_btn_active':'', item.remind ? 'choose_btn_active': '']"
                    :style="item.remind ? item.remind : ''"
                    @click="numClick(index, item.id)"
                  >
                    <img :src="item.src" alt="">
                  </div>
                </div>
                <div
                  class="start_btn needclick"
                  @click.stop="clickNum"
                ></div>
              </div>
            </div>
          </div>
          <div
            class="remind_wrapper"
            v-show="guideAll.wrapper"
          >
            <div class="remind_content">
              <div
                class="clothes"
                v-show="guideAll.clothes"
              ></div>
              <div
                class="num two"
                v-show="guideAll.one"
              ></div>
              <div
                class="num one"
                v-show="guideAll.two"
              ></div>
              <div
                class="num three"
                v-show="guideAll.three"
              ></div>
              <div
                class="listen_again"
                v-show="guideAll.voiceBtn"
              ></div>
              <div
                class="hand"
                v-show="guideAll.hand"
              >
                <img src="./guide-hand.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <page44 v-if="!pageStatus"></page44>
      <audio ref="audiotrue" src="./static/MonkeyBusiness/40.mp3"></audio>
      <audio ref="audiofalse" src="./static/MonkeyBusiness/81.mp3"></audio>
      <audio ref="audiofalseremind" src="./static/MonkeyBusiness/40a.mp3"></audio>
      <audio ref="audio" src="./static/MonkeyBusiness/39.mp3"></audio>
      <audio ref="audio2" src="./static/MonkeyBusiness/35.mp3"></audio>
      <audio ref="audio3" src="./static/MonkeyBusiness/36.mp3"></audio>
      <audio ref="audio4" src="./static/MonkeyBusiness/37.mp3"></audio>
      <audio id="audio_page44" ref="audio44" src="./static/MonkeyBusiness/39.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page44 from 'components/page44/page44'
  import goodjob41 from 'components/goodjob41/goodjob41'
  import {goToNext, iCanCunt} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iCanCunt],
    created() {
      this.init()
    },
    data() {
      return {
        countNums: [
          {
            id: '1',
            src: './static/count-images/count-num1.png',
            className: 'choose_a'
          },
          {
            id: '',
            src: './static/count-images/count-num2.png',
            className: 'choose_b'
          },
          {
            id: '',
            src: './static/count-images/count-num3.png',
            className: 'choose_c'
          }
        ],
        btnActiveIndex: -1,
        goodjobStatus: false,
        remindCount: true,
        checkStatus: 0,
        checkOnOff: true,
        guideNum: 0,
        guideAll: {
          one: false,
          two: false,
          three: false,
          hand: false,
          clothes: false,
          voiceBtn: false,
          wrapper: true
        },
        wrongGoStatus: false,
        checkStatuss: 0,
        canGo: false
      }
    },
    methods: {
      init() {
        this.guideTimer = setInterval(() => {
          this.guideNum++
        }, 1000)
      },
      clickNum() {
        if (this.canGo) {
          this.audioLoad('audio44')
          this.audioLoad('audiotrue')
          this.audioLoad('audiofalse')
          this.audioLoad('audiofalseremind')
          if (this.checkStatuss === 1) {
            // this.uploadResults(3, 0, true, 'page41')
            this.checkStatus = 1
            this.audioPlay('audiotrue')
          } else {
            this.checkStatus = 2
            // this.uploadResults(3, 0, false, 'page41')
            this.audioPlay('audiofalse')
            this.guideAll.wrapper = true
            setTimeout(() => {
              this.wrongGoStatus = true
              this.guideAll.hand = true
              this.btnActiveIndex = 10
              this.countNums = this.filterData(this.countNums)
            }, 6000)
            setTimeout(() => {
              this.audioPlay('audiofalseremind')
            }, 7000)
            setTimeout(() => {
              this.audioPlay('audio44')
              this.goNext(44)
            }, 16000)
            this.canGo = false
          }
        }
      },
      uploadResults(stage, poinsts, status, page) {
        this.uploadData.scope.push({
          stage: stage,
          poinsts: poinsts,
          result: status,
          page: page
        })
      },
      numClick(index, id) {
        this.canGo = true
        if (this.$refs.audio) {
          this.$refs.audio.pause()
        }
        this.btnActiveIndex = index
        if (index === 0) {
          this.$refs.audio2.load()
          this.$refs.audio2.play()
        } else if (index === 1) {
          this.$refs.audio3.load()
          this.$refs.audio3.play()
        } else if (index === 2) {
          this.$refs.audio4.load()
          this.$refs.audio4.play()
        }
        if (id) {
          this.checkStatuss = 1
        } else {
          this.checkStatuss = 2
        }
      },
      filterData(data) {
        for (let value of data) {
          if (value.id === '1') {
            value.remind = 'border: 6px solid red;'
          }
        }
        return data
      },
      wrongGo() {
        if (this.wrongGoStatus) {
          this.checkStatus = 0
          this.audioPlay('audio44')
          this.goNext(44)
        }
      },
      goNextpage() {
        this.goNext(44)
        this.audioLoad('audiotrue')
        this.audioPlay('audio44')
      }
    },
    watch: {
      guideNum(newValue) {
        if (newValue === 1) {
          this.guideAll.clothes = true
        } else if (newValue === 5) {
          this.guideAll.one = true
          this.guideAll.two = true
          this.guideAll.three = true
        } else if (newValue === 10) {
          this.guideAll.two = false
          this.guideAll.three = false
        } else if (newValue === 11) {
          this.guideAll.clothes = false
          this.guideAll.hand = true
        } else if (newValue === 16) {
        } else if (newValue === 19) {
          this.guideAll.voiceBtn = true
          this.guideAll.one = false
          this.guideAll.hand = false
        } else if (newValue === 22) {
          this.guideAll.wrapper = false
          this.guideAll.voiceBtn = false
          clearInterval(this.guideTimer)
        }
      }
    },
    components: {
      page44,
      goodjob41
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/icancount.scss";

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
      div {
        border: 8px solid red;
        box-sizing: border-box;
        position: absolute;
        border-radius: 30px;
      }
      .clothes {
        width: percent(296, 1280);
        height: percent(269, 720);
        top: percent(136, 720);
        left: percent(490, 1280);
      }
      .num {
        width: percent(207, 1280);
        height: percent(213, 720);
        top: percent(447, 720);
      }
      .two {
        left: percent(304, 1280);
      }
      .one {
        left: percent(534, 1280);
      }
      .three {
        left: percent(764, 1280);
      }
      .listen_again {
        width: percent(108, 1280);
        height: percent(108, 720);
        top: 0;
        right: percent(5, 1280);
      }
      .hand {
        width: percent(149, 1280);
        height: percent(259, 720);
        border: none;
        top: percent(590, 720);
        left: percent(350, 1280);
      }
    }
  }
</style>
