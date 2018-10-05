<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page66 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page66.png" alt="">
          <goodjob
            @goNextpage="goNextpage"
            v-if="checkStatus === 1"
          ></goodjob>
          <wronganswer
            v-if="checkStatus === 2"
            @goRemind="wrongAnswerClick(67)"
          >
          </wronganswer>
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
                  @click="checkAnswers(5, 6, true, 1, 67, 'page66', '1', '1')"
                  :class="chooseimg === 1 ? 'choose_img' : ''"
                >
                  <img src="./page49-1.png" alt="">
                </div>
                <div
                  class="btn_right choose_btn"
                  @click="checkAnswers(5, 6, false, 2, 67, 'page66', '1', '2')"
                  :class="chooseimg === 2 ? 'choose_img' : ''"
                >
                  <img src="./page49-2.png" alt="">
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
      <page67 v-if="!pageStatus"></page67>
      <audio id="audio_page67" ref="audio" src="./static/MonkeyBusiness/70.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page67 from 'components/page67/page67'
  import {goToNext, iKnowMore} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iKnowMore],
    components: {
      page67
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/iknowmore.scss";

</style>
