<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page65 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page65.png" alt="">
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
                  @click="checkAnswers(5, 5, true, 1, 65, 'page65', '1', '1')"
                  :class="chooseimg === 1 ? 'choose_img' : ''"
                >
                  <img src="./page48-1.png" alt="">
                </div>
                <div
                  class="btn_right choose_btn"
                  @click="checkAnswers(5, 5, false, 2, 65, 'page65', '1', '2')"
                  :class="chooseimg === 2 ? 'choose_img' : ''"
                >
                  <img src="./page48-2.png" alt="">
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
      <page66 v-if="checkStatus === 2"></page66>
      <page67 v-if="checkStatus === 1"></page67>
      <audio id="audio_page66" ref="audio" src="./static/MonkeyBusiness/69.mp3"></audio>
      <audio ref="audio70" src="./static/MonkeyBusiness/70.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page66 from 'components/page66/page66'
  import page67 from 'components/page67/page67'
  import {goToNext, iKnowMore} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iKnowMore],
    data() {
      return {
        chooseimg: 0,
        stage: 0,
        canGo: false,
        poinsts: 0,
        status: false,
        page: '',
        num: 0,
        checkStatus: 0,
        checkStatuss: 0
      }
    },
    methods: {
      filterData(data, page) {
        let result = null
        for (let value of data) {
          if (value.page === page) {
            result = value.result
            break
          }
        }
        return result
      },
      checkNum() {
        if (this.canGo) {
          this.prevOnePause(65)
          this.$refs.audio.load()
          this.$refs.audio70.load()
          this.uploadResult(this.stage, this.poinsts, this.status, this.page, this.answer, this.rawResponse)
          if ((this.filterData(this.uploadData.scope, 'page64') && this.filterData(this.uploadData.scope, 'page65')) || (!this.filterData(this.uploadData.scope, 'page64') && !this.filterData(this.uploadData.scope, 'page65'))) {
            this.checkStatus = 1
            // window.location.hash = 67
            this.$refs.audio70.play()
          } else {
            this.checkStatus = 2
            // window.location.hash = 66
            this.$refs.audio.play()
          }
          this.pageStatus = false
        }
      },
      goNextpage() {
        this.goNext(35)
      }
    },
    components: {
      page66,
      page67
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/iknowmore.scss";

</style>
