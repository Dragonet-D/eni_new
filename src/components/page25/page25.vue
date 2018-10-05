<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page25 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page25.png" alt="">
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
                    v-for="item in list2"
                    :class="item.className"
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
                  @click.stop="checkAnswer(1, 14)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <page26 v-if="checkStatus === 1"></page26>
      <page27 v-if="checkStatus === 2"></page27>
      <audio id="audio_page26" class="audio_page26" ref="audio" src="./static/MonkeyBusiness/12.mp3"></audio>
      <audio ref="audio27" src="./static/MonkeyBusiness/16.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page26 from 'components/page26/page26'
  import page27 from 'components/page27/page27'
  import {goToNext, patterns} from 'common/js/mixins'

  let list = [
    {
      id: '2',
      className: 'choose_a',
      src: './static/page25/page25-1.png',
      index: '1'
    },
    {
      id: '1',
      className: 'choose_b',
      src: './static/page25/page25-2.png',
      index: '2'
    },
    {
      id: '3',
      className: 'choose_c',
      src: './static/page25/page25-3.png',
      index: '3'
    },
    {
      id: '4',
      className: 'choose_d',
      src: './static/page25/page25-4.png',
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
        if (this.checkOnOff && this.list2.length) {
          this.prevOnePause(25)
          this.upLoadAnswer(stage, poinsts, 'page25', '2')
          this.audioLoad()
          this.audioLoad('audio27')
          if ((this.filterData(this.uploadData.scope, 'page24') && this.filterData(this.uploadData.scope, 'page25')) || (!this.filterData(this.uploadData.scope, 'page24') && !this.filterData(this.uploadData.scope, 'page25'))) {
            this.checkStatus = 2
            this.goNext(27)
            this.audioPlay('audio27')
          } else {
            this.checkStatus = 1
            this.goNext(26)
            this.audioPlay()
          }
        }
      },
      cancleAnswer() {
        if (this.list2.length) {
          this.list = list
          this.list2 = []
          this.editable = true
        }
      },
      goNextpage() {
        this.goNext(26)
      }
    },
    components: {
      page26,
      page27
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";
</style>
