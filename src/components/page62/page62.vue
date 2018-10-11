<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page62 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page62.png" alt="">
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
                  @click="checkAnswers(5, 2, true,1,62,'page62', '1', '1')"
                  :class="chooseimg === 1 ? 'choose_img' : ''"
                >
                  <img src="./page45-1.png" alt="">
                </div>
                <div
                  class="btn_right choose_btn"
                  @click="checkAnswers(5, 2, false,2,62,'page62', '1', '2')"
                  :class="chooseimg === 2 ? 'choose_img' : ''"
                >
                  <img src="./page45-2.png" alt="">
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
      <page63 v-if="checkStatus === 2"></page63>
      <page64 v-if="checkStatus === 1"></page64>
      <audio id="audio_page63" ref="audio" src="./static/MonkeyBusiness/69.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page63 from 'components/page63/page63'
  import page64 from 'components/page64/page64'
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
          this.prevOnePause(62)
          this.uploadResult(this.stage, this.poinsts, this.status, this.page, this.answer, this.rawResponse)
          if (this.$refs.audio) {
            this.$refs.audio.load()
            this.$refs.audio.play()
          }
          if (this.forNextPageData && this.forNextPageData.num !== 62) {
            if ((this.filterData(this.uploadData.scope, 'page61') && this.filterData(this.uploadData.scope, 'page62')) || (!this.filterData(this.uploadData.scope, 'page61') && !this.filterData(this.uploadData.scope, 'page62'))) {
              this.checkStatus = 1
            } else {
              this.checkStatus = 2
            }
          } else {
            if ((this.forNextPageData.forNextPageStatus && this.filterData(this.uploadData.scope, 'page62')) || (!this.forNextPageData.forNextPageStatus && !this.filterData(this.uploadData.scope, 'page62'))) {
              this.checkStatus = 1
            } else {
              this.checkStatus = 2
            }
          }
          this.pageStatus = false
        }
      },
      goNextpage() {
        this.goNext(35)
      }
    },
    components: {
      page63,
      page64
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/iknowmore.scss";

</style>
