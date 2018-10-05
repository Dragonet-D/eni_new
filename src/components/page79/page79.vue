<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page79 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page79.png" alt="">
          <div class="page28_start_wrapper">
            <div class="empty"></div>
            <div class="start_btn_wrapper">
              <div
                class="start_btn needclick"
                @click="goPage"
              >
                <img src="./start-btn-medium.gif" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <page80 v-if="!pageStatus"></page80>
      <audio ref="audio" src="./static/MonkeyBusiness/80.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {goToNext} from 'common/js/mixins'
  import page80 from 'components/page80/page80'

  export default {
    mixins: [goToNext],
    methods: {
      goPage() {
        this.audioLoad()
        this.audioPlay()
        this.goNext(80)
      }
    },
    components: {
      page80
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .page28_start_wrapper {
    @extend %page_start_wrapper;
    .empty {
      flex: 320;
    }
    .start_btn_wrapper {
      flex: 280;
      .start_btn {
        margin-left: percent(290);
        width: percent(300);
        height: percent(140, 280);
        user-select: none;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
