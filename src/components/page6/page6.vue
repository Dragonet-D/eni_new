<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page6 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page6.png" alt="">
          <div class="page6_start_wrapper">
            <div class="empty"></div>
            <div class="start_btn_wrapper">
              <div class="start_btn needclick" @click="checkToNext(7)">
                <img src="./start-btn-medium.gif" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <page7 v-if="!pageStatus"></page7>
      <audio id="audio_page7" class="audio_page7" ref="audio" src="./static/MonkeyBusiness/5.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {goToNext} from 'common/js/mixins'
  import page7 from 'components/page7/page7'

  export default {
    mixins: [goToNext],
    data() {
      return {
        sumGuidsTime: 0,
        canGoNext: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.canGoNext = true
      }, 6000)
    },
    methods: {
      init() {
        this.timer = setInterval(() => {
          this.sumGuidsTime++
        }, 1000)
      },
      checkToNext(num) {
        this.audioLoad('audio')

        if (this.canGoNext) {
          this.init()
          this.goNext(num)
          // this.audioPlay()
          document.querySelector('#audio_page7_1').play()
        }
      }
    },
    watch: {
      sumGuidsTime(newVaule) {
        if (newVaule === 0) {
          // 1 播放
        } else if (newVaule === 9) {
          // 2 播放 第一段
          document.querySelector('#audio_page7_2').play()
        } else if (newVaule === 12) {
          // 2 播放 第二段
        } else if (newVaule === 14) {
          // 3 播放
          document.querySelector('#audio_page7_3').play()
        } else if (newVaule === 20) {
          // 3 播放完毕 手移动
        } else if (newVaule === 22) {
          // 4 播放
          document.querySelector('#audio_page7_4').play()
        } else if (newVaule === 27) {
          // 5 播放
          document.querySelector('#audio_page7_5').play()
        } else if (newVaule === 31) {
          // 6 播放
          document.querySelector('#audio_page7_6').play()
          clearInterval(this.timer)
        }
      }
    },
    components: {
      page7
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .page6_start_wrapper {
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
</style>
