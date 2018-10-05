<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page33 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page33.png" alt="">
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
                  @click="checkAnswers(2, 1, false, 2, 34, 'page33', '2', '1')"
                  :class="chooseimg === 2 ? 'choose_img' : ''"
                >
                  <img src="./more1-1.png" alt="">
                </div>
                <div
                  class="btn_right choose_btn"
                  :style="answerRemind ? answerRemind:''"
                  @click="checkAnswers(2, 1, true, 1, 34, 'page33', '2', '2')"
                  :class="chooseimg === 1 ? 'choose_img' : ''"
                >
                  <img src="./more1-2.png" alt="">
                </div>
              </div>
            </div>
            <div class="btn_wrapper">
              <div
                class="start_btn needclick"
                @click.stop="checkNum(33)"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <page34 v-if="!pageStatus"></page34>
      <audio id="audio_page34" class="audio_page34" ref="audio" src="./static/MonkeyBusiness/23.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page34 from 'components/page34/page34'
  import {goToNext, iKnowMore} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iKnowMore],
    components: {
      page34
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/iknowmore.scss";
</style>
