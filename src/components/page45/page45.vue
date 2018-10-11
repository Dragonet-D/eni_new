<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page11 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page45.png" alt="">
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
                    :key="index"
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
      <page46 v-if="checkStatus === 1"></page46>
      <page47 v-if="checkStatus === 2"></page47>
      <audio id="audio_page46" ref="audio" src="./static/MonkeyBusiness/39.mp3"></audio>
      <audio ref="audio1" src="./static/MonkeyBusiness/35.mp3"></audio>
      <audio ref="audio2" src="./static/MonkeyBusiness/36.mp3"></audio>
      <audio ref="audio3" src="./static/MonkeyBusiness/37.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page46 from 'components/page46/page46'
  import page47 from 'components/page47/page47'
  import {goToNext, iCanCunt} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iCanCunt],
    data() {
      return {
        countNums: [
          {
            id: '',
            src: './static/count-images/count-num1.png',
            className: 'choose_a'
          },
          {
            id: '1',
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
        this.Scope(stage, poinsts, status, '2', this.clickIndex)
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
          if (this.checkStatuss === 1) {
            this.uploadResults(3, 2, true, 'page45')
          } else {
            this.uploadResults(3, 2, false, 'page45')
          }
          if (this.forNextPageData  && this.forNextPageData.num !== 45) {
            if ((this.filterData(this.uploadData.scope, 'page44') && this.filterData(this.uploadData.scope, 'page45')) || (!this.filterData(this.uploadData.scope, 'page44') && !this.filterData(this.uploadData.scope, 'page45'))) {
              this.checkStatus = 2
            } else {
              this.checkStatus = 1
            }
          } else {
            if ((this.forNextPageData.forNextPageStatus && this.filterData(this.uploadData.scope, 'page45')) || (!this.forNextPageData.forNextPageStatus && !this.filterData(this.uploadData.scope, 'page45'))) {
              this.checkStatus = 2
            } else {
              this.checkStatus = 1
            }
          }          
          setTimeout(() => {
            this.$refs.audio.load()
            this.$refs.audio.play()
            this.pageStatus = false
          }, 1000)
        }
      },
      numClick(index, id) {
        this.prevOnePause(45)
        this.canGo = true
        this.btnActiveIndex = index
        if (index === 0) {
          this.$refs.audio1.load()
          this.$refs.audio1.play()
          this.getIndex('1')
        } else if (index === 1) {
          this.$refs.audio2.load()
          this.$refs.audio2.play()
          this.getIndex('2')
        } else if (index === 2) {
          this.$refs.audio3.load()
          this.$refs.audio3.play()
          this.getIndex('3')
        }
        if (id) {
          this.checkStatuss = 1
        } else {
          this.checkStatuss = 2
        }
      },
      goNextpage() {
        this.goNext(46)
      }
    },
    components: {
      page46,
      page47
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/icancount.scss";
</style>
