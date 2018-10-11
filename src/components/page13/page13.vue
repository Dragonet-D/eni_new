<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div
        class="page13 page"
        v-show="pageStatus"
      >
        <div class="page_content">
          <img class="page_bg" src="./page13.png" alt="">
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
            <div
              class="btn_wrapper"
            >
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
                  @click.stop="checkAnswer(1, 2)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <page14 v-if="checkStatus === 1"></page14>
      <page15 v-if="checkStatus === 2"></page15>
      <audio id="audio_page14" class="audio_page14" ref="audio" src="./static/MonkeyBusiness/12.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page14 from 'components/page14/page14'
  import page15 from 'components/page15/page15'
  import {goToNext, patterns} from 'common/js/mixins'

  let list = [
    {
      id: '1',
      className: 'choose_a',
      src: './static/page13/page13-1.png',
      index: '1'
    },
    {
      id: '2',
      className: 'choose_b',
      src: './static/page13/page13-4.png',
      index: '2'
    },
    {
      id: '3',
      className: 'choose_c',
      src: './static/page13/page13-2.png',
      index: '3'
    },
    {
      id: '4',
      className: 'choose_d',
      src: './static/page13/page13-3.png',
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
          this.prevOnePause(13)
          this.upLoadAnswer(stage, poinsts, 'page13', '1')
          if (this.forNextPageData && this.forNextPageData.num !== 13) {
            if ((this.filterData(this.uploadData.scope, 'page11') && this.filterData(this.uploadData.scope, 'page13')) || (!this.filterData(this.uploadData.scope, 'page11') && !this.filterData(this.uploadData.scope, 'page13'))) {
              this.checkStatus = 2
              this.goNext(15)
            } else {
              this.checkStatus = 1
              this.goNext(14)
            }
          } else {
            if ((this.forNextPageData.forNextPageStatus && this.filterData(this.uploadData.scope, 'page13')) || (!this.forNextPageData.forNextPageStatus && !this.filterData(this.uploadData.scope, 'page13'))) {
              this.checkStatus = 2
              this.goNext(15)
            } else {
              this.checkStatus = 1
              this.goNext(14)
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
      page14,
      page15
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";
</style>
