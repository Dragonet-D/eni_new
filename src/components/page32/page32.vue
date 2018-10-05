<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page32 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page32.png" alt="">
          <div class="page31_start_wrapper">
            <div class="empty"></div>
            <div class="btn_wrapper">
              <div
                class="start_btn needclick"
                @click="goNext(33)"
              >
                <img src="./next-btn.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <page33 v-if="!pageStatus"></page33>
      <audio ref="audio" src="./static/MonkeyBusiness/24.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page33 from 'components/page33/page33'
  import {goToNext} from 'common/js/mixins'

  export default {
    mixins: [goToNext],
    components: {
      page33
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .page31_start_wrapper {
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
