<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page64 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page64.png" alt="">
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
                  @click="checkAnswers(5, 4, false,1, 64, 'page64', '2', '1')"
                  :class="chooseimg === 1 ? 'choose_img' : ''"
                >
                  <img src="./page47-1.png" alt="">
                </div>
                <div
                  class="btn_right choose_btn"
                  :style="answerRemind ? answerRemind:''"
                  @click="checkAnswers(5, 4, true,2, 64, 'page64', '2', '2')"
                  :class="chooseimg === 2 ? 'choose_img' : ''"
                >
                  <img src="./page47-2.png" alt="">
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
      <page65 v-if="!pageStatus"></page65>
      <audio id="audio_page65" ref="audio" src="./static/MonkeyBusiness/69.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page65 from 'components/page65/page65'
  import {goToNext, iKnowMore} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iKnowMore],
    components: {
      page65
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/iknowmore.scss";

</style>
