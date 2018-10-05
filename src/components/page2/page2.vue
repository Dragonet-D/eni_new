<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page2 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page2.png" alt="">
          <div class="page2_next_wrapper">
            <div class="empty"></div>
            <div class="page2_next_btn">
              <div
                class="next_btn"
                @click="checkToNext(3)"
              >
                <img class="next_btn_img" src="./next-btn.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <Page3 v-if="!pageStatus"></Page3>
      <audio id="audio_page3" ref="audio" src="./static/MonkeyBusiness/2.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Page3 from 'components/page3/page3'
  import {goToNext} from 'common/js/mixins'

  export default {
    mixins: [goToNext],
    methods: {
      checkToNext(num) {
        this.prevOnePause(num - 1)
        this.audioPlay()
        this.goNext(num)
      }
    },
    components: {
      Page3
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .page2_next_wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    .empty {
      flex: 495;
    }
    .page2_next_btn {
      flex: 225;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .next_btn {
        margin-left: percent(850, 1280);
        width: percent(120, 1280);
        height: percent(130, 225);
        user-select: none;
        .next_btn_img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
