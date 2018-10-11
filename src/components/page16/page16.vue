<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page16 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page16.png" alt="">
          <div class="page_start_wrapper">
            <div class="empty">
              <div class="voice_btns">
                <div class="voice"></div>
                <div
                  class="close"
                  @click="relisten"
                ></div>
              </div>
              <div class="target_box">
                <draggable
                  class="target_box_content"
                  v-model="list2"
                  :options="dragOptions"
                  :move="onMove"
                >
                  <div
                    class="choose_btn"
                    v-for="(item, index) in list2"
                    :class="item.className"
                    :key="index"
                  >
                    <img :src="item.src" alt="">
                  </div>
                </draggable>
              </div>
            </div>
            <div class="btn_wrapper">
              <div class="btns_content">
                <div
                  class="choose_btns"
                  @touchstart.stop="cancleAnswer"
                >
                  <draggable
                    v-model="list"
                    :options="dragOptions"
                    :move="onMove"
                    @start="isDragging=true"
                    @end="isDragging=false"
                    style="width: 100%;height: 100%"
                  >
                    <div
                      v-for="item in list"
                      class="choose_btn"
                      :class="item.className"
                      :style="item.remind ? item.remind : ''"
                      :key="item.id"
                      :data-id="item.id"
                      @mousedown.stop="cancleAnswer"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                </div>
                <div
                  class="start_btn needclick"
                  @click.stop="checkAnswer(1, 5)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <page17 v-if="checkStatus === 1"></page17>
      <page18 v-if="checkStatus === 2"></page18>
      <audio id="audio_page17" class="audio_page17" ref="audio" src="./static/MonkeyBusiness/12.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page17 from 'components/page17/page17'
  import page18 from 'components/page18/page18'
  import {goToNext, patterns} from 'common/js/mixins'

  let list = [
    {
      id: '1',
      className: 'choose_a',
      src: './static/page16/page16-1.png',
      index: '1'
    },
    {
      id: '4',
      className: 'choose_b',
      src: './static/page16/page16-2.png',
      index: '2'
    },
    {
      id: '2',
      className: 'choose_c',
      src: './static/page16/page16-11.png',
      index: '3'
    },
    {
      id: '3',
      className: 'choose_d',
      src: './static/page16/page16-22.png',
      index: '4'
    }
  ]

  export default {
    mixins: [goToNext, patterns],
    data() {
      return {
        list: list
      }
    },
    methods: {
      checkAnswer(stage, poinsts) {
        if (this.list2.length) {
          this.prevOnePause(16)
          this.upLoadAnswer(stage, poinsts, 'page16', '1')
          if (this.forNextPageData && this.forNextPageData.num !== 16) {
            if ((this.filterData(this.uploadData.scope, 'page15') && this.filterData(this.uploadData.scope, 'page16')) || (!this.filterData(this.uploadData.scope, 'page15') && !this.filterData(this.uploadData.scope, 'page16'))) {
              this.checkStatus = 2
              this.goNext(18)
            } else {
              this.checkStatus = 1
              this.goNext(17)
            }
          } else {
            if ((this.forNextPageData.forNextPageStatus && this.filterData(this.uploadData.scope, 'page16')) || (!this.forNextPageData.forNextPageStatus && !this.filterData(this.uploadData.scope, 'page16'))) {
              this.checkStatus = 2
              this.goNext(18)
            } else {
              this.checkStatus = 1
              this.goNext(17)
            }
          }
          this.audioPlay()
        }
      },
      cancleAnswer() {
        if (this.list2.length) {
          this.list = list
          this.list2 = []
          this.editable = true
        }
      }
    },
    components: {
      page17,
      page18
    }
}
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";
</style>
