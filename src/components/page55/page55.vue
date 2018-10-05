<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page55 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page55.png" alt="">
          <div class="page55_start_wrapper">
            <div class="page55_top">
              <div class="voice_btns">
                <div class="voice"></div>
                <div
                  class="close"
                  @click="relisten"
                ></div>
              </div>
            </div>
            <div class="page55_bottom">
              <div
                class="drag_wrapper"
              >
                <div
                  class="drag_content drag_left"
                  @click.stop
                >
                  <draggable
                    class="drag_target needclick"
                    v-model="list1"
                    :options="dragOptions1"
                    :move="onMove"
                    @change="change1"
                  >
                    <div
                      class="drag_target_content"
                      v-for="(item, index) in list1"
                      :data-id="item.id"
                      @click="listClick(list1, 'list1', 'editable1')"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                  <draggable
                    class="drag_target"
                    v-model="list2"
                    :options="dragOptions2"
                    :move="onMove"
                    @change="change2"
                  >
                    <div
                      class="drag_target_content"
                      v-for="(item, index) in list2"
                      :data-id="item.id"
                      @click="listClick(list2, 'list2', 'editable2')"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                  <draggable
                    class="drag_target"
                    v-model="list3"
                    :options="dragOptions3"
                    :move="onMove"
                    @change="change3"
                  >
                    <div
                      class="drag_target_content"
                      v-for="(item, index) in list3"
                      :data-id="item.id"
                      @click="listClick(list3, 'list3', 'editable3')"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                  <draggable
                    class="drag_target"
                    v-model="list4"
                    :options="dragOptions4"
                    :move="onMove"
                    @change="change4"
                  >
                    <div
                      class="drag_target_content"
                      v-for="(item, index) in list4"
                      :data-id="item.id"
                      @click="listClick(list4, 'list4', 'editable4')"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                </div>
                <draggable
                  class="drag_content drag_right"
                  v-model="list"
                  :options="dragOptions"
                  :move="onMove"
                  @start="listStart"
                  @end="listEnd"
                >
                  <div
                    class="drag_targets"
                    v-for="(item, index) in list"
                    :data-id="item.id"
                    :class="item.className"
                  >
                    <img :src="item.src" alt="">
                  </div>
                </draggable>
              </div>
              <div
                class="go_wrapper"
              >
                <div
                  class="start_btn needclick"
                  @click="checkAnswer(4, 1)"
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <page56 v-if="!pageStatus"></page56>
      <audio ref="audio" src="./static/MonkeyBusiness/58.mp3"></audio>
      <audio id="audio_page56" ref="audio56" src="./static/MonkeyBusiness/61.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page56 from 'components/page56/page56'
  import {goToNext, matchNumbers} from 'common/js/mixins'

  let list = [
    {
      id: '3',
      src: './static/match-numbers/page55-nine.png',
      className: 'drag_target_a',
      index: 0,
      number: '9'
    },
    {
      id: '4',
      src: './static/match-numbers/page55-ten.png',
      className: 'drag_target_b',
      index: 1,
      number: '10'
    },
    {
      id: '1',
      src: './static/match-numbers/page55-three.png',
      className: 'drag_target_c',
      index: 2,
      number: '3'
    },
    {
      id: '2',
      src: './static/match-numbers/page55-six.png',
      className: 'drag_target_d',
      index: 3,
      number: '6'
    }
  ]
  export default {
    mixins: [goToNext, matchNumbers],
    data() {
      return {
        list: list
      }
    },
    methods: {
      listStart(e) {
        this.isDragging = true
      },
      listEnd(e) {
        this.isDragging = false
      },
      cancelAnswer() {
        if (this.list1.length || this.list2.length || this.list3.length || this.list4.length) {
          this.goToNextStatus = 0
          this.list = list
          this.list1 = []
          this.list2 = []
          this.list3 = []
          this.list4 = []
          this.editable = true
          this.editable1 = true
          this.editable2 = true
          this.editable3 = true
          this.editable4 = true
        }
      },
      resetData() {
        this.list = []
        this.list1 = [
          {
            id: '11',
            src: './static/match-numbers/page55-three.png',
            className: 'drag_target_c'
          }
        ]
        this.list2 = [
          {
            id: '2',
            src: './static/match-numbers/page55-six.png',
            className: 'drag_target_d'
          }
        ]
        this.list3 = [
          {
            id: '3',
            src: './static/match-numbers/page55-nine.png',
            className: 'drag_target_a'
          }
        ]
        this.list4 = [
          {
            id: '4',
            src: './static/match-numbers/page55-ten.png',
            className: 'drag_target_b'
          }
        ]
      },
      uploadResults(stage, poinsts, status, page, answer, rawResponse) {
        this.Scope(stage, poinsts, status, answer, rawResponse)
      },
      upChoose(list, questionId, id, answer, rawResponse) {
        if (list[0].id === id) {
          this.uploadResults(4, questionId, true, 'page55', answer, rawResponse)
        } else {
          this.uploadResults(4, questionId, false, 'page55', answer, rawResponse)
        }
      },
      checkAnswer(stage, poinsts) {
        if (!this.list.length) {
          this.upChoose(this.list1, 1, '1', '3', this.list1[0].number)
          this.upChoose(this.list2, 2, '2', '6', this.list2[0].number)
          this.upChoose(this.list3, 3, '3', '9', this.list3[0].number)
          this.upChoose(this.list4, 4, '4', '10', this.list4[0].number)
          this.prevOnePause(55)
          this.audioLoad('audio56')
          this.audioPlay('audio56')
          this.goNext(56)
        }
      }
    },
    components: {
      page56
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .page55_start_wrapper {
    @extend %page_start_wrapper;
    .page55_top {
      flex: 105;
      .voice_btns {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        .voice {
          cursor: pointer;
          height: percent(90, 105);
          width: percent(80);
          margin-right: percent(20);
          margin-top: percent(15);
          border-radius: 50%;
        }
        .close {
          @extend .voice;
        }
      }
    }
    .page55_bottom {
      flex: 610;
      display: flex;
      .drag_wrapper {
        flex: 965;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .drag_content {
          width: percent(170, 965);
          height: percent(550, 615);
          box-sizing: border-box;
          position: relative;
        }
        .drag_left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .drag_target {
            width: 100%;
            height: percent(130, 550);
            border-radius: percent(12, 130);
            overflow: hidden;
            .drag_target_content {
              height: 100%;
              border-radius: percent(12, 130);
              overflow: hidden;
            }
          }
        }
        .drag_right {
          margin-left: percent(120, 965);
          .drag_targets {
            position: absolute;
            width: 100%;
            height: percent(130, 550);
            left: 0;
            border-radius: percent(12, 130);
            overflow: hidden;
          }
          .drag_target_a {
            top: 0;
          }
          .drag_target_b {
            top: percent(140, 550);
          }
          .drag_target_c {
            top: percent(280, 550);
          }
          .drag_target_d {
            bottom: 0;
          }
        }
      }
      .go_wrapper {
        flex: 315;
        position: relative;
        .start_btn {
          position: absolute;
          width: percent(120, 315);
          height: percent(130, 610);
          right: percent(20, 315);
          top: percent(390, 610);
          border-radius: 50%;
        }
      }
    }

  }
</style>
