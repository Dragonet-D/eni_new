<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page15 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page15.png" alt="">
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
                  @touchstart="cancleAnswer"
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
                      @mousedown="cancleAnswer"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                </div>
                <div
                  class="start_btn needclick"
                  @click.stop="checkAnswer(1, 4)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <page16 v-if="!pageStatus"></page16>
      <audio id="audio_page16" class="audio_page16" ref="audio" src="./static/MonkeyBusiness/12.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page16 from 'components/page16/page16'
  import {goToNext, patterns} from 'common/js/mixins'

  let list = [
    {
      id: '3',
      className: 'choose_a',
      src: './static/page15/page15-11.png',
      index: '1'
    },
    {
      id: '2',
      className: 'choose_b',
      src: './static/page15/page15-22.png',
      index: '2'
    },
    {
      id: '1',
      className: 'choose_c',
      src: './static/page15/page15-1.png',
      index: '3'
    },
    {
      id: '4',
      className: 'choose_d',
      src: './static/page15/page15-2.png',
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
          this.prevOnePause(14)
          this.prevOnePause(15)
          this.upLoadAnswer(stage, poinsts, 'page15', '3')
          this.audioPlay()
          this.goNext(16)
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
      page16
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";
</style>
