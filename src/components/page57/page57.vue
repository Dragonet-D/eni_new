<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page57 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page57.png" alt="">
          <div class="page28_start_wrapper">
            <div class="empty"></div>
            <div class="start_btn_wrapper">
              <div
                class="start_btn needclick"
                @click="goNextpage"
              >
                <img src="./start-btn-medium.gif" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <page58 v-if="!pageStatus"></page58>
      <audio ref="audio0" src="./static/MonkeyBusiness/62.mp3"></audio>
      <audio ref="audio1" src="./static/MonkeyBusiness/18.mp3"></audio>
      <audio ref="audio2" src="./static/MonkeyBusiness/64.mp3"></audio>
      <audio ref="audio3" src="./static/MonkeyBusiness/65.mp3"></audio>
      <audio ref="audio4" src="./static/MonkeyBusiness/21.mp3"></audio>
      <audio ref="audio5" src="./static/MonkeyBusiness/11.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {goToNext} from 'common/js/mixins'
  import page58 from 'components/page58/page58'

  export default {
    mixins: [goToNext],
    data() {
      return {
        guideNum: 0,
        canGoNext: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.canGoNext = true
      }, 5000)
    },
    methods: {
      init() {
        this.guideTimer = setInterval(() => {
          this.guideNum++
        }, 1000)
      },
      goNextpage() {
        this.$refs.audio0.load()
        this.$refs.audio1.load()
        this.$refs.audio2.load()
        this.$refs.audio3.load()
        this.$refs.audio4.load()
        this.$refs.audio5.load()
        if (this.canGoNext) {
          this.init()
          this.goNext(58)
          // this.audioPlay('audio0')
        }
      }
    },
    watch: {
      guideNum(newValue) {
        if (newValue === 0) {
        } else if (newValue === 1) {
          this.$refs.audio1.play()
        } else if (newValue === 4) {
          this.$refs.audio2.play()
        } else if (newValue === 7) {
          this.$refs.audio3.play()
        } else if (newValue === 10) {
          this.$refs.audio4.play()
        } else if (newValue === 13) {
          this.$refs.audio5.play()
        } else if (newValue === 15) {
          clearInterval(this.guideTimer)
        }
      }
    },
    components: {
      page58
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
        border-radius: 4%;
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
