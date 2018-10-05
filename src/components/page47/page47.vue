<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page11 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page47.png" alt="">
          <div class="page_start_wrapper">
            <div class="empty">
              <div class="voice_btns">
                <div class="voice"></div>
                <div
                  class="close"
                  @click="relisten"
                ></div>
              </div>
            </div>
            <div class="btn_wrapper">
              <div class="btns_content">
                <div
                  class="choose_btns"
                >
                  <div
                    class="choose_btn"
                    v-for="(item, index) in countNums"
                    :class="[item.className, index === btnActiveIndex ? 'choose_btn_active':'']"
                    :style="item.remind ? item.remind : ''"
                    @click="numClick(index, item.id)"
                    :data-id="item.id"
                  >
                    <img :src="item.src" alt="">
                  </div>
                </div>
                <div
                  class="start_btn needclick"
                  @click.stop="clickNum"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <page48 v-if="!pageStatus"></page48>
      <audio id="audio_page48" ref="audio" src="./static/MonkeyBusiness/39.mp3"></audio>
      <audio ref="audio1" src="./static/MonkeyBusiness/44.mp3"></audio>
      <audio ref="audio2" src="./static/MonkeyBusiness/45.mp3"></audio>
      <audio ref="audio3" src="./static/MonkeyBusiness/46.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page48 from 'components/page48/page48'
  import {goToNext, iCanCunt} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iCanCunt],
    data() {
      return {
        countNums: [
          {
            id: '',
            src: './static/count-images/count-num7.png',
            className: 'choose_a'
          },
          {
            id: '1',
            src: './static/count-images/count-num6.png',
            className: 'choose_b'
          },
          {
            id: '',
            src: './static/count-images/count-num5.png',
            className: 'choose_c'
          }
        ],
        btnActiveIndex: -1,
        goodjobStatus: false,
        remindCount: true,
        checkStatus: 0,
        checkOnOff: true,
        canGo: false,
        checkStatuss: 0
      }
    },
    methods: {
      uploadResults(stage, poinsts, status, page) {
        this.uploadData.scope.push({
          stage: stage,
          poinsts: poinsts,
          result: status,
          page: page
        })
        this.Scope(stage, poinsts, status, '2', this.clickIndex)
      },
      clickNum() {
        if (this.canGo) {
          this.$refs.audio.load()
          if (this.checkStatuss === 1) {
            this.$refs.audio.play()
            this.pageStatus = false
            // window.location.hash = 47
            this.uploadResults(3, 4, true, 'page47')
          } else {
            this.uploadResults(3, 4, false, 'page47')
            this.btnActiveIndex = 10
            this.$refs.audio.play()
            this.pageStatus = false
            // window.location.hash = 47
          }
        }
      },
      numClick(index, id) {
        this.prevOnePause(46)
        this.prevOnePause(47)
        this.canGo = true
        this.btnActiveIndex = index
        if (index === 0) {
          this.$refs.audio3.load()
          this.$refs.audio3.play()
          this.getIndex('1')
        } else if (index === 1) {
          this.$refs.audio2.load()
          this.$refs.audio2.play()
          this.getIndex('2')
        } else if (index === 2) {
          this.$refs.audio1.load()
          this.$refs.audio1.play()
          this.getIndex('3')
        }
        if (id) {
          this.checkStatuss = 1
        } else {
          this.checkStatuss = 2
        }
      }
    },
    components: {
      page48
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/icancount.scss";
</style>
