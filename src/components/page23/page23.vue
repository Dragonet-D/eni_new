<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page23 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page23.png" alt="">
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
                  class="target_box_content_l"
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
                  @touchstart = "cancleAnswer"
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
                      class="choose_btn_l"
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
                  @click.stop="checkAnswer(1, 12)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <page24 v-if="!pageStatus"></page24>
      <audio id="audio_page24" class="audio_page24" ref="audio" src="./static/MonkeyBusiness/12.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page24 from 'components/page24/page24'
  import {goToNext, patterns} from 'common/js/mixins'

  let list = [
    {
      id: '2',
      className: 'choose_a_l',
      src: './static/page23/page23-1.png',
      index: '1'
    },
    {
      id: '3',
      className: 'choose_b_l',
      src: './static/page23/page23-2.png',
      index: '2'
    },
    {
      id: '1',
      className: 'choose_c_l',
      src: './static/page23/page23-3.png',
      index: '3'
    },
    {
      id: '4',
      className: 'choose_d_l',
      src: './static/page23/page23-4.png',
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
          this.prevOnePause(23)
          this.upLoadAnswer(stage, poinsts, 'page23', '3')
          this.audioPlay()
          this.goNext(24)
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
      page24
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";
</style>
