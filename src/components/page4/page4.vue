<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page4 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page4.png" alt="">
          <div class="page4_start_wrapper">
            <div class="empty"></div>
            <div class="page4_start_content">
              <div
                class="start_btn"
                @click="checkToNext(5)"
              >
                <img src="./start-btn-large.gif" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <page5 v-if="!pageStatus"></page5>
      <audio id="audio_page5" ref="audio" src="./static/MonkeyBusiness/4.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Page5 from 'components/page5/page5'
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
      Page5
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .page4_start_wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .empty {
      flex: 218;
    }
    .page4_start_content {
      flex: 420;
      display: flex;
      justify-content: center;
      .start_btn {
        width: percent(460);
        height: percent(210, 420);
        border-radius: 6%;
        overflow: hidden;
        /*animation: box-s .8s ease-in-out alternate infinite;*/
        /*-webkit-animation: box-s .8s ease-in-out alternate infinite;*/
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @keyframes box-s {
    0% {
      box-shadow: 0 0 50px rgba(255, 248, 0, 1);
    }
    100% {
      box-shadow: 0 0 50px rgba(255, 248, 0, 0);
    }
  }
  @-webkit-keyframes box-s {
    0% {
      box-shadow: 0 0 50px rgba(255, 248, 0, 1);
    }
    100% {
      box-shadow: 0 0 50px rgba(255, 248, 0, 0);
    }
  }


</style>
