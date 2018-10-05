<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page11 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page48.png" alt="">
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
      <page49 v-if="checkStatus === 1"></page49>
      <page50 v-if="checkStatus === 2"></page50>
      <audio id="audio_page49" ref="audio" src="./static/MonkeyBusiness/39.mp3"></audio>
      <audio ref="audio1" src="./static/MonkeyBusiness/45.mp3"></audio>
      <audio ref="audio2" src="./static/MonkeyBusiness/46.mp3"></audio>
      <audio ref="audio3" src="./static/MonkeyBusiness/47.mp3"></audio>
      <audio ref="audio50" src="./static/MonkeyBusiness/50.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page49 from 'components/page49/page49'
  import page50 from 'components/page50/page50'
  import {goToNext, iCanCunt} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iCanCunt],
    data() {
      return {
        countNums: [
          {
            id: '1',
            src: './static/count-images/count-num8.png',
            className: 'choose_a'
          },
          {
            id: '',
            src: './static/count-images/count-num6.png',
            className: 'choose_b'
          },
          {
            id: '',
            src: './static/count-images/count-num7.png',
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
      filterData(data, page) {
        let result = null
        for (let value of data) {
          if (value.page === page) {
            result = value.result
            break
          }
        }
        return result
      },
      clickNum() {
        if (this.canGo) {
          this.audioLoad('audio50')
          this.audioLoad()
          if (this.checkStatuss === 1) {
            this.uploadResults(3, 5, true, 'page48')
          } else {
            this.uploadResults(3, 5, false, 'page48')
          }
          if ((this.filterData(this.uploadData.scope, 'page47') && this.filterData(this.uploadData.scope, 'page48')) || (!this.filterData(this.uploadData.scope, 'page47') && !this.filterData(this.uploadData.scope, 'page48'))) {
            this.checkStatus = 2
            // window.location.hash = 50
            setTimeout(() => {
              this.audioPlay('audio50')
              this.pageStatus = false
            }, 1000)
          } else {
            this.checkStatus = 1
            // window.location.hash = 49
            setTimeout(() => {
              this.audioPlay()
              this.pageStatus = false
            }, 1000)
          }
        }
      },
      numClick(index, id) {
        this.prevOnePause(48)
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
      },
      goNextpage() {
        this.goNext(49)
      }
    },
    components: {
      page49,
      page50
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/icancount.scss";
</style>
