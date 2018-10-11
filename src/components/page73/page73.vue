<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page73 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page73.png" alt="">
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
                    :key="item.className"
                  >
                    <img :src="item.src" alt="">
                  </div>
                </draggable>
              </div>
            </div>
            <div class="btn_wrapper" @click="cancleAnswer">
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
                  @click.stop="checkAnswer(6, 2)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <page74 v-if="checkStatus === 1"></page74>
      <page75 v-if="checkStatus === 2"></page75>
      <audio ref="audio" src="./static/MonkeyBusiness/77.mp3"></audio>
      <audio ref="audioo" src="./static/MonkeyBusiness/77a.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page74 from 'components/page74/page74'
  import page75 from 'components/page75/page75'
  import {goToNext, patterns} from 'common/js/mixins'

  let list = [
    {
      id: '1',
      className: 'choose_a',
      src: './static/page73/page73-5.png',
      index: '1'
    },
    {
      id: '2',
      className: 'choose_b',
      src: './static/page73/page73-1.png',
      index: '2'
    },
    {
      id: '3',
      className: 'choose_c',
      src: './static/page73/page73-8.png',
      index: '3'
    },
    {
      id: '4',
      className: 'choose_d',
      src: './static/page73/page73-7.png',
      index: '4'
    }
  ]

  export default {
    mixins: [goToNext, patterns],
    data() {
      return {
        list: list,
        list2: [],
        editable: true,
        isDragging: false,
        delayedDragging: false,
        goToNextStatus: false,
        checkStatus: 0,
        checkOnOff: true
      }
    },
    methods: {
      checkAnswer(stage, poinsts) {
        if (this.checkOnOff && this.list2.length) {
          if (this.$refs.audioo) {
            this.$refs.audioo.load()
          }
          if (this.$refs.audio) {
            this.$refs.audio.load()
          }
          if (this.goToNextStatus === 1) {
            this.uploadResult(stage, poinsts, 'page73', true, '1')
          } else {
            this.uploadResult(stage, poinsts, 'page73', false, '1')
          }
          if (this.forNextPageData && this.forNextPageData.num !== 73) {
            if ((this.filterData(this.uploadData.scope, 'page72') && this.filterData(this.uploadData.scope, 'page73')) || (!this.filterData(this.uploadData.scope, 'page72') && !this.filterData(this.uploadData.scope, 'page73'))) {
              this.checkStatus = 2
              this.$refs.audioo.play()
            } else {
              this.checkStatus = 1
              this.$refs.audio.play()
            }
          } else {
            if ((this.forNextPageData.forNextPageStatus && this.filterData(this.uploadData.scope, 'page73')) || (!this.forNextPageData.forNextPageStatus && !this.filterData(this.uploadData.scope, 'page73'))) {
              this.checkStatus = 2
              this.$refs.audioo.play()
            } else {
              this.checkStatus = 1
              this.$refs.audio.play()
            }
          } 
          this.checkOnOff = false
          this.pageStatus = false
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
        this.goNext(74)
      }
    },
    components: {
      page74,
      page75
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/pure.scss";

  .page_start_wrapper {
    @extend %page_start_wrapper;
    .empty {
      flex: 405;
      display: flex;
      flex-direction: column;
      .voice_btns {
        width: 100%;
        flex: 105;
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
      .target_box {
        flex: 300;
        display: flex;
        justify-content: flex-end;
        .target_box_content {
          width: percent(170);
          height: percent(190, 300);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: percent(325);
          margin-top: percent(90);
          .choose_btn {
            width: 100%;
            height: 100%;
            border-radius: percent(22, 170);
            overflow: hidden;
            img {
              @extend .choose_btn;
            }
          }
        }
        .target_box_content_l {
          @extend .target_box_content;
          width: percent(230);
          margin-right: percent(35);
        }
      }
    }
    .btn_wrapper {
      flex: 315;
      .btns_content {
        height: percent(190, 315);
        margin-top: percent(60);
        display: flex;
        align-items: center;
        .choose_btns {
          width: percent(1140);
          height: 100%;
          position: relative;
          .choose_btn {
            width: percent(170, 1140);
            height: 100%;
            position: absolute;
            border-radius: percent(22, 170);
            overflow: hidden;
            cursor: pointer;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .choose_btn_l {
            @extend .choose_btn;
            width: percent(230, 1140);
          }
          .choose_a {
            left: percent(139, 1140);
            background-size: cover;
          }
          .choose_b {
            left: percent(329, 1140);
            background-size: cover;
          }
          .choose_c {
            left: percent(519, 1140);
            background-size: cover;
          }
          .choose_d {
            left: percent(709, 1140);
            background-size: cover;
          }
          .choose_a_l {
            left: percent(35, 1140);
            background-size: cover;
          }
          .choose_b_l {
            left: percent(275, 1140);
            width: percent(250, 1140);
            background-size: cover;
          }
          .choose_c_l {
            left: percent(535, 1140);
            background-size: cover;
          }
          .choose_d_l {
            left: percent(775, 1140);
            background-size: cover;
          }
          .sortable-chosen {
            border-radius: percent(22, 170);
            overflow: hidden;
          }
        }
        .start_btn {
          width: percent(120);
          height: percent(130, 190);
          border-radius: 50%;
        }
      }

    }
  }

</style>
