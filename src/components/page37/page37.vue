<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page37 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page37.png" alt="">
          <div class="page_start_wrapper">
            <div class="empty">
              <div class="voice_btns">
                <div class="voice"></div>
                <div
                  class="close"
                  @click="relisten"
                ></div>
              </div>
              <div class="choose_btns">
                <div
                  class="btn_left choose_btn"
                  :style="answerRemind ? answerRemind:''"
                  @click="checkAnswers(2, 5, true, 1, 38, 'page37', '1', '1')"
                  :class="chooseimg === 1 ? 'choose_img' : ''"
                >
                  <img src="./more5-1.png" alt="">
                </div>
                <div
                  class="btn_right choose_btn"
                  @click="checkAnswers(2, 5, false, 2, 38, 'page37', '1', '2')"
                  :class="chooseimg === 2 ? 'choose_img' : ''"
                >
                  <img src="./more5-2.png" alt="">
                </div>
              </div>
            </div>
            <div class="btn_wrapper">
              <div
                class="start_btn needclick"
                @click.stop="checkNum"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <page38 v-if="checkStatus === 2"></page38>
      <page39 v-if="checkStatus === 1"></page39>
      <audio id="audio_page38" ref="audio" src="./static/MonkeyBusiness/23.mp3"></audio>
      <audio id="audio_page399" ref="audio0" src="./static/MonkeyBusiness/31.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page38 from 'components/page38/page38'
  import page39 from 'components/page39/page39'
  import {goToNext, iKnowMore} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iKnowMore],
    methods: {
      checkNum() {
        if (this.canGo) {
          this.uploadResult(this.stage, this.poinsts, this.status, this.page, this.answer, this.rawResponse)
          this.prevOnePause(37)
          this.audioLoad('audio')
          this.audioLoad('audio0')
          if (this.forNextPageData && this.forNextPageData.num !== 37) {
            if ((this.filterData(this.uploadData.scope, 'page36') && this.filterData(this.uploadData.scope, 'page37')) || (!this.filterData(this.uploadData.scope, 'page36') && !this.filterData(this.uploadData.scope, 'page37'))) {
              this.checkStatus = 1
              this.goNext(39)
              this.audioPlay('audio0')
            } else {
              this.checkStatus = 2
              this.goNext(38)
              this.audioPlay()
            }
          } else {
            if ((this.forNextPageData.forNextPageStatus && this.filterData(this.uploadData.scope, 'page37')) || (!this.forNextPageData.forNextPageStatus && !this.filterData(this.uploadData.scope, 'page37'))) {
              this.checkStatus = 1
              this.goNext(39)
              this.audioPlay('audio0')
            } else {
              this.checkStatus = 2
              this.goNext(38)
              this.audioPlay()
            }
          }
        }
      }
    },
    components: {
      page38,
      page39
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/iknowmore.scss";

</style>
