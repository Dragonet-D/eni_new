<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page61 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page61.png" alt="">
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
                  @click="checkAnswers(5, 1, false, 1, 62, 'page61', '2', '1')"
                  :class="chooseimg === 1 ? 'choose_img' : ''"
                >
                  <img src="./page44-1.png" alt="">
                </div>
                <div
                  class="btn_right choose_btn"
                  :style="answerRemind ? answerRemind:''"
                  @click="checkAnswers(5, 1, true, 2, 62, 'page61', '2', '2')"
                  :class="chooseimg === 2 ? 'choose_img' : ''"
                >
                  <img src="./page44-2.png" alt="">
                </div>
              </div>
            </div>
            <div class="btn_wrapper">
              <div
                class="start_btn needclick"
                @click.stop="checkNum(62)"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <page62 v-if="!pageStatus"></page62>
      <audio id="audio_page62" ref="audio" src="./static/MonkeyBusiness/69.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page62 from 'components/page62/page62'
  import {goToNext, iKnowMore} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iKnowMore],
    components: {
      page62
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/iknowmore.scss";

</style>
