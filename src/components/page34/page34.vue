<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page34 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page34.png" alt="">
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
                  @click="checkAnswers(2, 2, true, 1, 35, 'page34', '1', '1')"
                  :class="chooseimg === 1 ? 'choose_img' : ''"
                >
                  <img src="./more2-1.png" alt="">
                </div>
                <div
                  class="btn_right choose_btn"
                  @click="checkAnswers(2, 2, false, 2, 35, 'page34', '1', '2')"
                  :class="chooseimg === 2 ? 'choose_img' : ''"
                >
                  <img src="./more2-2.png" alt="">
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
      <page35 v-if="checkStatus === 2"></page35>
      <page36 v-if="checkStatus === 1"></page36>
      <audio id="audio_page35" class="audio_page35" ref="audio" src="./static/MonkeyBusiness/23.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page35 from 'components/page35/page35'
  import page36 from 'components/page36/page36'
  import {goToNext, iKnowMore} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iKnowMore],
    methods: {
      checkNum() {
        if (this.canGo) {
          this.uploadResult(this.stage, this.poinsts, this.status, this.page, this.answer, this.rawResponse)
          this.prevOnePause(34)
          if (this.forNextPageData && this.forNextPageData.num !== 34) {
            if ((this.filterData(this.uploadData.scope, 'page33') && this.filterData(this.uploadData.scope, 'page34')) || (!this.filterData(this.uploadData.scope, 'page33') && !this.filterData(this.uploadData.scope, 'page34'))) {
              this.checkStatus = 1
              this.goNext(36)
            } else {
              this.checkStatus = 2
              this.goNext(35)
            }
          } else {
            if ((this.forNextPageData.forNextPageStatus && this.filterData(this.uploadData.scope, 'page34')) || (!this.forNextPageData.forNextPageStatus && !this.filterData(this.uploadData.scope, 'page34'))) {
              this.checkStatus = 1
              this.goNext(36)
            } else {
              this.checkStatus = 2
              this.goNext(35)
            }
          }
          this.audioPlay()
        }
      }
    },
    components: {
      page35,
      page36
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/iknowmore.scss";

</style>
