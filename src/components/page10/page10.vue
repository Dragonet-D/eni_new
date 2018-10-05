<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page10 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page10.png" alt="">
          <div class="page10_start_wrapper">
            <div class="empty"></div>
            <div class="btn_wrapper">
              <div
                class="start_btn needclick"
                @click="goNext(11)"
              >
                <img src="./next-btn.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <Page11 v-if="!pageStatus"></Page11>
      <audio ref="audio" src="./static/MonkeyBusiness/13.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Page11 from 'components/page11/page11'
  import {goToNext} from 'common/js/mixins'

  export default {
    mixins: [goToNext],
    components: {
      Page11
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .page10_start_wrapper {
    @extend %page_start_wrapper;
    .empty {
      flex: 495;
    }
    .btn_wrapper {
      flex: 225;
      .start_btn {
        width: percent(120);
        height: percent(130, 225);
        margin-left: percent(1145);
        border-radius: 50%;
      }
    }
  }
</style>
