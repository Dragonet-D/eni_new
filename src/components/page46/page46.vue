<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page11 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page46.png" alt="">
          <goodjob
            @goNextpage="goNextpage"
            v-if="checkStatus === 1"
          ></goodjob>
          <wronganswer
            v-if="checkStatus === 2"
            @goRemind="wrongAnswerClick(47)"
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
                    :data-id="item.id"
                    @click="numClick(index, item.id)"
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
      <page47 v-if="!pageStatus"></page47>
      <audio id="audio_page47" ref="audio" src="./static/MonkeyBusiness/39.mp3"></audio>
      <audio ref="audio1" src="./static/MonkeyBusiness/36.mp3"></audio>
      <audio ref="audio2" src="./static/MonkeyBusiness/37.mp3"></audio>
      <audio ref="audio3" src="./static/MonkeyBusiness/43.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page47 from 'components/page47/page47'
  import {goToNext, iCanCunt} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iCanCunt],
    data() {
      return {
        countNums: [
          {
            id: '1',
            src: './static/count-images/count-num4.png',
            className: 'choose_a'
          },
          {
            id: '',
            src: './static/count-images/count-num2.png',
            className: 'choose_b'
          },
          {
            id: '',
            src: './static/count-images/count-num3.png',
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
        this.Scope(stage, poinsts, status, '1', this.clickIndex)
      },
      clickNum() {
        if (this.canGo) {
          this.$refs.audio.load()
          if (this.checkStatuss === 1) {
            this.$refs.audio.play()
            this.pageStatus = false
            // window.location.hash = 45
            this.uploadResults(3, 3, true, 'page46')
          } else {
            this.uploadResults(3, 3, false, 'page46')
            this.btnActiveIndex = 10
            this.$refs.audio.play()
            this.pageStatus = false
            // window.location.hash = 47
          }
        }
      },
      numClick(index, id) {
        this.prevOnePause(46)
        this.canGo = true
        this.btnActiveIndex = index
        if (index === 0) {
          this.$refs.audio3.load()
          this.$refs.audio3.play()
          this.getIndex('1')
        } else if (index === 1) {
          this.$refs.audio1.load()
          this.$refs.audio1.play()
          this.getIndex('2')
        } else if (index === 2) {
          this.$refs.audio2.load()
          this.$refs.audio2.play()
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
      page47
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/icancount.scss";
</style>
