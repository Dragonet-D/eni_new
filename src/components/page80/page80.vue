<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page79 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page79.png" alt="">
          <goodjob
            @goNextpage="goNextpage"
            v-if="showStatus === 1"
          />
          <div
            class="remind"
            @click="startDrag"
            v-show="instructions"
          >
            <div class="content">
              <img src="./instructions.png" alt="">
              <div class="start_btn">
                <img src="./start-btn-medium.gif" alt="">
              </div>
            </div>
          </div>
          <div
            class="retry"
            v-show="showStatus === 2"
          >
            <div class="retry_content">
              <div class="img_content">
                <img src="./retry.png" alt="">
              </div>
              <div
                class="retry_btn"
                @click="retry"
              ></div>
            </div>
          </div>
          <wronganswer
            v-if="showStatus === 3"
            @goRemind="wrongAnswerClick"
          >
          </wronganswer>
          <div class="content_inner">
            <div class="top_bar">
              <div class="progress_bar">
                <div
                  class="progress_content"
                  :style="{width: progressWidth}"
                ></div>
              </div>
              <div
                class="voice"
                @click="relisten"
              ></div>
            </div>
            <div
              class="drag_wrapper"
            >
              <div
                class="drag drag_left"
              >
                <draggable
                  class="drag_left_content"
                  v-model="list"
                  :options="dragOptions"
                  :move="onMove"
                  @start="isDragging=true"
                  @end="isDragging=false"
                  @click.stop
                >
                  <div
                    class="drag_drag"
                    v-for="item in list"
                    :class="item.className"
                    :data-id="item.id"
                  >
                    <img :src="item.src" alt="">
                  </div>
                </draggable>
              </div>
              <div
                class="drag drag_right"
                @click.stop
              >
                <div class="drag_right_content">
                  <draggable
                    class="right_drag right_1"
                    v-model="list1"
                    :options="dragOptions1"
                    :move="onMove"
                    @change="change1"
                  >
                    <div
                      class="img_wrapper"
                      v-for="item in list1"
                      :style="item.remind ? item.remind : ''"
                      :data-id="item.id"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                  <draggable
                    class="right_drag right_2"
                    v-model="list2"
                    :options="dragOptions2"
                    :move="onMove"
                    @change="change2"
                  >
                    <div
                      class="img_wrapper"
                      v-for="item in list2"
                      :style="item.remind ? item.remind : ''"
                      :data-id="item.id"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                  <draggable
                    class="right_drag right_3"
                    v-model="list3"
                    :options="dragOptions3"
                    :move="onMove"
                    @change="change3"
                  >
                    <div
                      class="img_wrapper"
                      v-for="item in list3"
                      :style="item.remind ? item.remind : ''"
                      :data-id="item.id"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                  <draggable
                    class="right_drag right_4"
                    v-model="list4"
                    :options="dragOptions4"
                    :move="onMove"
                    @change="change4"
                  >
                    <div
                      class="img_wrapper"
                      v-for="item in list4"
                      :style="item.remind ? item.remind : ''"
                      :data-id="item.id"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                  <draggable
                    class="right_drag right_5"
                    v-model="list5"
                    :options="dragOptions5"
                    :move="onMove"
                    @change="change5"
                  >
                    <div
                      class="img_wrapper"
                      v-for="item in list5"
                      :style="item.remind ? item.remind : ''"
                      :data-id="item.id"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                  <draggable
                    class="right_drag right_6"
                    v-model="list6"
                    :options="dragOptions6"
                    :move="onMove"
                    @change="change6"
                  >
                    <div
                      class="img_wrapper"
                      v-for="item in list6"
                      :style="item.remind ? item.remind : ''"
                      :data-id="item.id"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                  <draggable
                    class="right_drag right_7"
                    v-model="list7"
                    :options="dragOptions7"
                    :move="onMove"
                    @change="change7"
                  >
                    <div
                      class="img_wrapper"
                      v-for="item in list7"
                      :style="item.remind ? item.remind : ''"
                      :data-id="item.id"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                  <draggable
                    class="right_drag right_8"
                    v-model="list8"
                    :options="dragOptions8"
                    :move="onMove"
                    @change="change8"
                  >
                    <div
                      class="img_wrapper"
                      v-for="item in list8"
                      :style="item.remind ? item.remind : ''"
                      :data-id="item.id"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                  <draggable
                    class="right_drag right_9"
                    v-model="list9"
                    :options="dragOptions9"
                    :move="onMove"
                    @change="change9"
                  >
                    <div
                      class="img_wrapper"
                      v-for="item in list9"
                      :style="item.remind ? item.remind : ''"
                      :data-id="item.id"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                </div>

              </div>
              <div
                class="start_btn"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
      <audio ref="audio6" src="./static/MonkeyBusiness/80good.mp3"></audio>
      <audio ref="audio7" src="./static/MonkeyBusiness/81.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {goToNext, bonus} from 'common/js/mixins'
  import draggable from 'vuedraggable'
  import goodjob from 'components/goodjob/goodjob'
  import wronganswer from 'components/wronganswer/wronganswer'
  import $ from 'jquery'
  import {historystore} from 'common/js/utils'

  let list = [
    {
      id: '1',
      src: './static/page79/page79-1.png',
      className: 'drag_1'
    },
    {
      id: '2',
      src: './static/page79/page79-2.png',
      className: 'drag_2'
    },
    {
      id: '3',
      src: './static/page79/page79-3.png',
      className: 'drag_3'
    },
    {
      id: '4',
      src: './static/page79/page79-4.png',
      className: 'drag_4'
    },
    {
      id: '5',
      src: './static/page79/page79-5.png',
      className: 'drag_5'
    },
    {
      id: '6',
      src: './static/page79/page79-6.png',
      className: 'drag_6'
    },
    {
      id: '7',
      src: './static/page79/page79-7.png',
      className: 'drag_7'
    },
    {
      id: '8',
      src: './static/page79/page79-8.png',
      className: 'drag_8'
    },
    {
      id: '9',
      src: './static/page79/page79-9.png',
      className: 'drag_9'
    }
  ]
  export default {
    mixins: [goToNext, bonus],
    mounted() {
      // this.init()
      if (this.$refs.audio) {
        this.$refs.audio.play()
      }
    },
    data() {
      return {
        list: list,
        list1: [],
        list2: [],
        list3: [],
        list4: [],
        list5: [],
        list6: [],
        list7: [],
        list8: [],
        list9: [],
        editable: true,
        editable1: true,
        editable2: true,
        editable3: true,
        editable4: true,
        editable5: true,
        editable6: true,
        editable7: true,
        editable8: true,
        editable9: true,
        isDragging: false,
        delayedDragging: false,
        progress: 0,
        progressWidth: 0,
        retryStatus: false,
        gotoNext: false,
        goToNextStatus: 0,
        showStatus: 0,
        instructions: true,
        onOff: true
      }
    },
    methods: {
      init() {
        this.timer = setInterval(() => {
          this.progress++
        }, 1000)
      },
      startDrag() {
        this.audioLoad('audio6')
        this.audioLoad('audio7')
        this.instructions = false
        this.retry()
      },
      retry() {
        if (this.timer) {
          clearInterval(this.timer)
        }
        this.list = list
        this.list1 = []
        this.list2 = []
        this.list3 = []
        this.list4 = []
        this.list5 = []
        this.list6 = []
        this.list7 = []
        this.list8 = []
        this.list9 = []
        this.editable = true
        this.editable1 = true
        this.editable2 = true
        this.editable3 = true
        this.editable4 = true
        this.editable5 = true
        this.editable6 = true
        this.editable7 = true
        this.editable8 = true
        this.editable9 = true
        this.isDragging = false
        this.delayedDragging = false
        this.progress = 0
        this.progressWidth = 0
        this.showStatus = 0
        this.init()
      },
      checkAnswer() {
        if (this.onOff) {
          if (this.list1[0].id === '9' && this.list2[0].id === '2' && this.list3[0].id === '4' && this.list4[0].id === '7' && this.list5[0].id === '6' && this.list6[0].id === '1' && this.list7[0].id === '5' && this.list8[0].id === '3' && this.list9[0].id === '8') {
            $.ajax({
              /* eslint-disable no-undef */
              url: answerCompleted,
              dataType: 'json',
              type: 'POST',
              data: {
                'PassCode': historystore.fetch('eni-user-info').password
              }
            })
            this.showStatus = 1
            this.$refs.audio6.play()
            clearInterval(this.timer)
          } else {
            if (!this.retryStatus) {
              this.showStatus = 3
              this.$refs.audio7.play()
              this.remindTimer = setTimeout(() => {
                this.showStatus = 0
                this.currentAnswer()
                setTimeout(() => {
                  this.initChooese()
                  this.onOff = true
                }, 3000)
              }, 6000)
            }
          }
          this.onOff = false
        }
        if (this.$refs.audio) {
          this.$refs.audio.pause()
        }
      },
      currentAnswer() {
        this.editable = false
        this.editable1 = false
        this.editable2 = false
        this.editable3 = false
        this.editable4 = false
        this.editable5 = false
        this.editable6 = false
        this.editable7 = false
        this.editable8 = false
        this.editable9 = false
        this.list = []
        this.list1 = [
          {
            id: '9',
            src: './static/page79/page79-9.png',
            className: 'drag_1',
            remind: 'border: 4px solid red;'
          }
        ]
        this.list2 = [
          {
            id: '2',
            src: './static/page79/page79-2.png',
            className: 'drag_2',
            remind: 'border: 4px solid red;'
          }
        ]
        this.list3 = [
          {
            id: '4',
            src: './static/page79/page79-4.png',
            className: 'drag_3',
            remind: 'border: 4px solid red;'
          }
        ]
        this.list4 = [
          {
            id: '7',
            src: './static/page79/page79-7.png',
            className: 'drag_4',
            remind: 'border: 4px solid red;'
          }
        ]
        this.list5 = [
          {
            id: '6',
            src: './static/page79/page79-6.png',
            className: 'drag_5',
            remind: 'border: 4px solid red;'
          }
        ]
        this.list6 = [
          {
            id: '1',
            src: './static/page79/page79-1.png',
            className: 'drag_6',
            remind: 'border: 4px solid red;'
          }
        ]
        this.list7 = [
          {
            id: '5',
            src: './static/page79/page79-5.png',
            className: 'drag_7',
            remind: 'border: 4px solid red;'
          }
        ]
        this.list8 = [
          {
            id: '3',
            src: './static/page79/page79-3.png',
            className: 'drag_8',
            remind: 'border: 4px solid red;'
          }
        ]
        this.list9 = [
          {
            id: '8',
            src: './static/page79/page79-8.png',
            className: 'drag_9',
            remind: 'border: 4px solid red;'
          }
        ]
      },
      initChooese() {
        this.editable = true
        this.editable1 = true
        this.editable2 = true
        this.editable3 = true
        this.editable4 = true
        this.editable5 = true
        this.editable6 = true
        this.editable7 = true
        this.editable8 = true
        this.editable9 = true
        this.list = list
        this.list1 = []
        this.list2 = []
        this.list3 = []
        this.list4 = []
        this.list5 = []
        this.list6 = []
        this.list7 = []
        this.list8 = []
        this.list9 = []
        this.goToNextStatus = 0
      },
      wrongAnswerClick() {
      },
      cancleAnswer() {
        if (!this.gotoNext) {
          this.initChooese()
        }
      },
      goNextpage() {
        this.$refs.audio6.pause()
        window.location.reload()
      },
      onMove({relatedContext, draggedContext}) {
        const relatedElement = relatedContext.element
        const draggedElement = draggedContext.element
        return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      }
    },
    watch: {
      list(newValue) {
        if (!newValue.length) {
          this.checkAnswer()
          this.gotoNext = true
        }
      },
      progress(newValue) {
        if (newValue > 86) {
          this.retryStatus = true
          this.showStatus = 2
          clearInterval(this.timer)
        }
        this.progressWidth = newValue + '%'
      },
      isDragging(newValue) {
        if (newValue) {
          this.delayedDragging = true
          return
        }
        this.$nextTick(() => {
          this.delayedDragging = false
        })
      }
    },
    components: {
      draggable,
      goodjob,
      wronganswer
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/pure.scss";

  .page_content {
    .content_inner {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .top_bar {
        height: percent(105, 720);
        display: flex;
        .progress_bar {
          flex: 1;
          height: 100%;
          position: relative;
          .progress_content {
            position: absolute;
            height: percent(30, 105);
            background-color: #f15a29;
            border-radius: 20px;
            top: percent(40, 105);
            left: percent(40, 1280);
            // width: percent(925, 1080);
            // 85.64815%
          }
        }
        .voice {
          width: percent(90, 1280);
          height: percent(90, 105);
          margin-top: percent(5, 720);
          margin-right: percent(20, 1280);
          border-radius: 50%;
          overflow: hidden;
        }
      }
      .drag_wrapper {
        height: percent(615, 720);
        position: relative;
        .drag {
          position: absolute;
          width: percent(510, 1280);
          height: percent(510, 615);
          box-sizing: border-box;
          top: percent(60, 615);
        }
        .drag_left {
          width: percent(510, 1280);
          height: percent(520, 615);
          left: percent(71, 1280);
          top: percent(60, 615);
          .drag_left_content {
            position: relative;
            width: 100%;
            height: 100%;
            .drag_drag {
              position: absolute;
              width: percent(150, 510);
              height: percent(150, 520);
              .img_wrapper {
                width: 100%;
                height: 100%;
              }
            }
            .drag_1 {
              top: 0;
              left: 0;
            }
            .drag_2 {
              top: 0;
              left: percent(180, 510);
            }
            .drag_3 {
              right: 0;
              top: 0;
            }
            .drag_4 {
              top: percent(180, 520);
              left: 0;
            }
            .drag_5 {
              top: percent(180, 520);
              left: percent(180, 510);
            }
            .drag_6 {
              top: percent(180, 520);
              right: 0;
            }
            .drag_7 {
              bottom: percent(10, 520);
              left: 0;
            }
            .drag_8 {
              bottom: percent(10, 520);
              left: percent(180, 510);
            }
            .drag_9 {
              bottom: percent(10, 520);
              right: 0;
            }
          }
        }
        .drag_right {
          left: percent(689, 1280);
          .drag_right_content {
            width: 100%;
            height: 100%;
            .right_drag {
              position: absolute;
              width: percent(149, 510);
              height: percent(149, 510);
              box-sizing: border-box;
              .img_wrapper {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
              }
            }
            .right_1 {
              top: percent(30, 510);
              left: percent(30, 510);
            }
            .right_2 {
              top: percent(30, 510);
              left: percent(181, 510);
            }
            .right_3 {
              top: percent(30, 510);
              right: percent(30, 510);
            }
            .right_4 {
              left: percent(30, 510);
              top: percent(181, 510);
            }
            .right_5 {
              left: percent(181, 510);
              top: percent(181, 510);
            }
            .right_6 {
              right: percent(30, 510);
              top: percent(181, 510);
            }
            .right_7 {
              left: percent(30, 510);
              bottom: percent(30, 510);
            }
            .right_8 {
              left: percent(181, 510);
              bottom: percent(30, 510);
            }
            .right_9 {
              right: percent(30, 510);
              bottom: percent(30, 510);
            }
          }
        }
        .start_btn {
          position: absolute;
          width: percent(91, 1280);
          height: percent(104, 615);
          right: percent(9, 1280);
          top: percent(260, 615);
          border-radius: 50%;
        }
      }
    }
    .remind {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 100;
      background-color: rgba(177, 147, 247, .5);
      .content {
        position: relative;
        width: 100%;
        height: 100%;
        .start_btn {
          position: absolute;
          width: percent(300);
          height: percent(150, 720);
          left: percent(344);
          bottom: percent(86, 720);
          user-select: none;
          border-radius: 4%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .retry {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(144, 113, 83, .6);
      z-index: 10;
      right: 0;
      .retry_content {
        position: relative;
        .retry_btn {
          position: absolute;
          width: percent(260, 1280);
          height: percent(90, 720);
          top: percent(390, 720);
          left: percent(510, 1280)
        }
      }
    }
  }

  @keyframes box-s {
    0% {
      box-shadow: 0 0 50px rgba(255, 248, 0, 1);
    }
    100% {
      box-shadow: 0 0 50px rgba(255, 248, 0, 0);
    }
  }

  @-webkit-keyframes box-s {
    0% {
      box-shadow: 0 0 50px rgba(255, 248, 0, 1);
    }
    100% {
      box-shadow: 0 0 50px rgba(255, 248, 0, 0);
    }
  }
</style>
