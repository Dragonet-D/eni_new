<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page11 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page44.png" alt="">
          <div
            id="remind_count"
            v-show="false"
          >
            <div class="remind_content">
              <img src="./page44-remind.png" alt="">
            </div>
          </div>
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
                    :class="[item.className, index === btnActiveIndex ? 'choose_btn_active':'', item.remind ? 'choose_btn_active': '']"
                    :style="item.remind ? item.remind : ''"
                    @click="numClick(index, item.id)"
                    :key="index"
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
      <page45 v-if="!pageStatus"></page45>
      <audio id="" ref="audio" src="./static/MonkeyBusiness/39.mp3"></audio>
      <audio ref="audio1" src="./static/MonkeyBusiness/35.mp3"></audio>
      <audio ref="audio2" src="./static/MonkeyBusiness/36.mp3"></audio>
      <audio ref="audio3" src="./static/MonkeyBusiness/37.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page45 from 'components/page45/page45'
  import {goToNext, iCanCunt} from 'common/js/mixins'

  export default {
    mixins: [goToNext, iCanCunt],
    data() {
      return {
        countNums: [
          {
            id: '',
            src: './static/count-images/count-num2.png',
            className: 'choose_a'
          },
          {
            id: '',
            src: './static/count-images/count-num1.png',
            className: 'choose_b'
          },
          {
            id: '1',
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
        this.Scope(stage, poinsts, status, '3', this.clickIndex)
      },
      clickNum() {
        if (this.canGo) {
          this.audioLoad()
          if (this.checkStatuss === 1) {
            this.uploadResults(3, 1, true, 'page44')
          } else {
            this.uploadResults(3, 1, false, 'page44')
            this.btnActiveIndex = 10
          }
          this.goNext(45)
          this.audioPlay()
        }
      },
      numClick(index, id) {
        this.prevOnePause()
        this.canGo = true
        this.btnActiveIndex = index
        if (index === 0) {
          this.$refs.audio2.load()
          this.$refs.audio2.play()
          this.getIndex('1')
        } else if (index === 1) {
          this.$refs.audio1.load()
          this.$refs.audio1.play()
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
      }
    },
    components: {
      page45
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/icancount.scss";

  #remind_count {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(177, 247, 247, .2);
    .remind_content {
      width: percent(338);
      height: percent(270);
      margin-left: percent(80);
      margin-top: percent(500);
    }
  }
</style>
