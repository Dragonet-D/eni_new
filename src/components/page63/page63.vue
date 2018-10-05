<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page63 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page63.png" alt="">
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
                  @click="checkAnswers(5, 3, false, 1, 63, 'page63', '2', '1')"
                  :class="chooseimg === 1 ? 'choose_img' : ''"
                >
                  <img src="./page46-1.png" alt="">
                </div>
                <div
                  class="btn_right choose_btn"
                  :style="answerRemind ? answerRemind:''"
                  @click="checkAnswers(5, 3, true, 2, 63, 'page63', '2', '2')"
                  :class="chooseimg === 2 ? 'choose_img' : ''"
                >
                  <img src="./page46-2.png" alt="">
                </div>
              </div>
            </div>
            <div class="btn_wrapper">
              <div
                class="start_btn needclick"
                @click.stop="checkNum(64)"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <page64 v-if="!pageStatus"></page64>
      <audio id="audio_page64" ref="audio" src="./static/MonkeyBusiness/69.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page64 from 'components/page64/page64'
  import {goToNext, iKnowMore} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iKnowMore],
    components: {
      page64
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/iknowmore.scss";

</style>
