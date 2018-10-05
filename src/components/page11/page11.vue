<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div
        class="page11 page"
        v-show="pageStatus"
      >
        <div class="page_content">
          <img class="page_bg" src="./page11.png" alt="">
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
                    @start="start"
                    @end="isDragging=false"
                    style="width: 100%;height: 100%"
                  >
                    <div
                      v-for="(item, index) in list"
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
                  @click.stop="checkAnswer(1, 1)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <page13 v-if="!pageStatus"></page13>
      <audio id="audio_page13" class="audio_page13" ref="audio" src="./static/MonkeyBusiness/12.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page13 from 'components/page13/page13'
  import {goToNext, patterns} from 'common/js/mixins'

  let list = [
    {
      id: '4',
      className: 'choose_a',
      src: './static/page11/page11-4.png',
      index: '1'
    },
    {
      id: '3',
      className: 'choose_b',
      src: './static/page11/page11-3.png',
      index: '2'
    },
    {
      id: '2',
      className: 'choose_c',
      src: './static/page11/page11-2.png',
      index: '3'
    },
    {
      id: '1',
      className: 'choose_d',
      src: './static/page11/page11-1.png',
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
          this.prevOnePause(11)
          this.upLoadAnswer(stage, poinsts, 'page11', '4')
          this.audioPlay()
          this.goNext(13)
        }
      },
      testClick(index) {
        console.log(this.$refs.drags[index])
        this.$refs.drags[index].ondrag = () => {
          console.log(index)
        }
      },
      start() {
        this.isDragging = true
      },
      cancleAnswer() {
        if (this.list2.length) {
          this.list = list
          this.list2 = []
        }
      }
    },
    components: {
      page13
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";
</style>
