<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page30 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page30.png" alt="">
          <wronganswer
            v-if="remindStatus"
            @goRemind="goRemind"
          >
          </wronganswer>
          <goodjob
            v-if="gotoNext"
            @goNextpage="goNextpage"
          ></goodjob>
          <div
            class="hand_guide"
            v-show="guideStatus"
            @click="guideClose"
          >
            <div class="hand_guide_content">
              <div class="img_wrapper">
                <img src="./guide-hand.png" alt="">
              </div>
            </div>
          </div>
          <div class="page_start_wrapper">
            <div class="empty">
              <div class="voice_btns">
                <div class="voice"></div>
                <div class="close"></div>
              </div>
              <div class="choose_btns">
                <div
                  class="btn_left choose_btn"
                  @click="wrongAnswer"
                ></div>
                <div
                  class="btn_right choose_btn"
                  @click="rightAnswer"
                ></div>
              </div>
            </div>
            <div class="btn_wrapper">
              <div
                class="start_btn needclick"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <page32 v-if="pageChoose === 1"></page32>
      <audio ref="audio" src="./static/MonkeyBusiness/17.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page32 from 'components/page32/page32'
  import {goToNext, iKnowMore} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iKnowMore],
    data() {
      return {
        remindStatus: false,
        pageChoose: 0,
        guideStatus: true
      }
    },
    mounted() {
      this.timer = setTimeout(() => {
        this.guideStatus = false
      }, 3000)
    },
    methods: {
      goNextpage() {
        this.goNext(33)
      },
      rightAnswer() {
        this.pageChoose = 2
        this.goNext(33)
      },
      wrongAnswer() {
        this.remindStatus = true
        this.timer = setTimeout(() => {
          this.pageChoose = 1
          this.goNext(31)
        }, 6000)
      },
      guideClose() {
        clearTimeout(this.timer)
        this.guideStatus = false
        if (this.$refs.audio) {
          this.$refs.audio.pause()
        }
      },
      goRemind() {
        this.goNext(34)
        this.pageChoose = 1
        clearTimeout(this.timer)
      }
    },
    components: {
      page32
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/iknowmore.scss";
  .hand_guide{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .hand_guide_content{
      position: relative;
      width: 100%;
      height: 100%;
      .img_wrapper {
        position: absolute;
        width: percent(149, 1280);
        height: percent(259, 720);
        top: percent(300, 720);
        right: percent(250, 1280);
      }
    }
  }
</style>
