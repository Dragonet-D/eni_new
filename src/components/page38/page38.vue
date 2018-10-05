<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page38 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page38.png" alt="">
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
                  @click="checkAnswers(2, 6, true, 1, 39, 'page38', '1', '1')"
                  :class="chooseimg === 1 ? 'choose_img' : ''"
                >
                  <img src="./more6-1.png" alt="">
                </div>
                <div
                  class="btn_right choose_btn"
                  @click="checkAnswers(2, 6, false, 2, 39, 'page38', '1', '2')"
                  :class="chooseimg === 2 ? 'choose_img' : ''"
                >
                  <img src="./more6-2.png" alt="">
                </div>
              </div>
            </div>
            <div class="btn_wrapper">
              <div
                class="start_btn needclick"
                @click.stop="checkNum(38)"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <page39 v-if="!pageStatus"></page39>
      <audio id="audio_page39" ref="audio" src="./static/MonkeyBusiness/31.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page39 from 'components/page39/page39'
  import {goToNext, iKnowMore} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iKnowMore],
    components: {
      page39
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/iknowmore.scss";

</style>
