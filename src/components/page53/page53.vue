<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div id="page53" class="page53 page" v-show="pageStatus">
        <div class="page_content">
          <div class="match_wrapper">
            <div class="match_content">
              <img class="page_bgs" src="./page53.png" alt="">
              <div
                class="good_job"
                v-show="gotoNextoNOff"
              >
                <div class="next_btn_wrapper">
                  <img src="./goodjob-matchnumbers.png" alt="">
                  <div
                    class="next_btn_content"
                    @click="goNextPage"
                  >
                    <img src="./next-btn.png" alt="">
                  </div>
                </div>
              </div>
              <div class="drag_wrapper">
                <div class="drag_content">
                  <div
                    class="drag_left drag_drag"
                  >
                    <draggable
                      class="drag_target"
                      v-model="list1"
                      :options="dragOptions1"
                      :move="onMove"
                    >
                      <div
                        class="drag_target_content"
                        v-for="(item, index) in list1"
                        :data-id="item.id"
                      >
                        <img :src="item.src" alt="">
                      </div>
                    </draggable>
                    <draggable
                      class="drag_target"
                      v-model="list2"
                      :options="dragOptions2"
                      :move="onMove"
                    >
                      <div
                        class="drag_target_content"
                        v-for="(item, index) in list2"
                        :data-id="item.id"
                      >
                        <img :src="item.src" alt="">
                      </div>
                    </draggable>
                    <draggable
                      class="drag_target"
                      v-model="list3"
                      :options="dragOptions3"
                      :move="onMove"
                    >
                      <div
                        class="drag_target_content"
                        v-for="(item, index) in list3"
                        :data-id="item.id"
                      >
                        <img :src="item.src" alt="">
                      </div>
                    </draggable>
                    <draggable
                      class="drag_target"
                      v-model="list4"
                      :options="dragOptions4"
                      :move="onMove"
                    >
                      <div
                        class="drag_target_content"
                        v-for="(item, index) in list4"
                        :data-id="item.id"

                      >
                        <img :src="item.src" alt="">
                      </div>
                    </draggable>
                  </div>
                  <draggable
                    class="drag_right drag_drag"
                    v-model="list"
                    :options="dragOptions"
                    :move="onMove"
                    @start="isDragging=true"
                    @end="isDragging=false"
                  >
                    <div
                      class="drag_targets"
                      v-for="item in list"
                      :data-id="item.id"
                      :class="item.className"
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                </div>
                <div
                  class="voice_btn"
                  @click="cancelAnswer"
                >
                  <div
                    class="voice_btn_content"
                    @click.stop="replay"
                  ></div>
                </div>
              </div>
              <div
                class="guide_page"
                v-show="guideStatus.guidewrapper"
              >
                <div class="guide_page_content">
                  <div
                    class="show_guide show_guide_1"
                    v-show="guideStatus.guide1"
                  >
                    <img src="./page53-1.png" alt="">
                  </div>
                  <div
                    class="show_guide show_guide_2"
                    v-show="guideStatus.guide2"
                  >
                    <img src="./page53-2.png" alt="">
                  </div>
                  <div
                    class="show_guide show_guide_3"
                    v-show="guideStatus.guide3"
                  >
                    <img src="./page53-3.png" alt="">
                  </div>
                  <div
                    class="show_guide show_guide_4"
                    v-show="guideStatus.guide4"
                  >
                    <img src="./page53-4.png" alt="">
                  </div>
                  <div
                    class="show_guide show_guide_5"
                    v-show="guideStatus.guide5"
                  >
                    <img src="./page53-5.png" alt="">
                  </div>
                  <div
                    class="show_guide show_guide_6"
                    v-show="guideStatus.guide6"
                  >
                    <img src="./page53-6.png" alt="">
                  </div>
                  <div class="show_guide show_guide_remind">
                    <img src="./page53-remind.png" alt="">
                  </div>
                  <div
                    class="show_guide show_guide_hand"
                    :class="{show_guide_hand_a: handstatus}"
                    v-show="guideStatus.guidehand"
                  >
                    <img src="./page53-hand.png" alt="">
                  </div>
                  <div class="show_guide show_guide_red show_guide_red1">
                    <img src="./page53-red1.png" alt="">
                  </div>
                  <div class="show_guide show_guide_red show_guide_red2">
                    <img src="./page53-red2.png" alt="">
                  </div>
                  <div class="show_guide show_guide_red show_guide_red3">
                    <img src="./page53-red3.png" alt="">
                  </div>
                  <div class="show_guide show_guide_red show_guide_red4">
                    <img src="./page53-red4.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <page55 v-if="!pageStatus"></page55>
      <audio ref="audio" src="./static/MonkeyBusiness/52.mp3"></audio>
      <audio ref="audio1" src="./static/MonkeyBusiness/53.mp3"></audio>
      <audio ref="audio2" src="./static/MonkeyBusiness/54.mp3"></audio>
      <audio ref="audio3" src="./static/MonkeyBusiness/55.mp3"></audio>
      <audio ref="audio4" src="./static/MonkeyBusiness/56.mp3"></audio>
      <audio ref="audio5" src="./static/MonkeyBusiness/11.mp3"></audio>
      <audio ref="audio6" src="./static/MonkeyBusiness/59.mp3"></audio>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import page55 from 'components/page55/page55'
  import {goToNext, matchNumbers} from 'common/js/mixins'

  let list = [
    {
      id: '2',
      src: './static/match-numbers/guide-two.png',
      className: 'drag_target_a'
    },
    {
      id: '1',
      src: './static/match-numbers/guide-one.png',
      className: 'drag_target_b'
    },
    {
      id: '4',
      src: './static/match-numbers/guide-four.png',
      className: 'drag_target_c'
    },
    {
      id: '3',
      src: './static/match-numbers/guide-three.png',
      className: 'drag_target_d'
    }
  ]

  export default {
    mixins: [goToNext, matchNumbers],
    created() {
      this.init()
    },
    data() {
      return {
        list: list,
        list1: [],
        list2: [],
        list3: [],
        list4: [],
        editable: true,
        editable1: true,
        editable2: true,
        editable3: true,
        editable4: true,
        isDragging: false,
        delayedDragging: false,
        goToNextStatus: 0,
        guideRemidnum: 0,
        guideStatus: {
          guide1: true,
          guide2: false,
          guide3: false,
          guide4: false,
          guide5: false,
          guide6: false,
          guidehand: false,
          guidewrapper: true
        },
        handstatus: false,
        gotoNextoNOff: false
      }
    },
    methods: {
      cancelAnswer() {
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
      },
      replay() {
        this.guideRemidnum = 0
        this.cancelAnswer()
        this.$refs.audio.play()
        this.guideStatus = {
          guide1: true,
          guide2: false,
          guide3: false,
          guide4: false,
          guide5: false,
          guide6: false,
          guidehand: false,
          guidewrapper: true
        }
        this.handstatus = false
        this.init()
      },
      init() {
        this.timer = setInterval(() => {
          this.guideRemidnum++
        }, 1000)
      },
      goNextPage() {
        this.$refs.audio6.pause()
        this.goNext(54)
      }
    },
    watch: {
      guideRemidnum() {
        let nums = this.guideRemidnum
        if (nums === 4) {
          this.$refs.audio1.play()
          this.guideStatus.guide1 = false
          this.guideStatus.guide2 = true
        } else if (nums === 8) {
          this.$refs.audio2.play()
          this.guideStatus.guide2 = false
          this.guideStatus.guide3 = true
        } else if (nums === 10) {
          this.$refs.audio3.play()
          this.guideStatus.guide3 = false
          this.guideStatus.guide4 = true
        } else if (nums === 14) {
          this.guideStatus.guide4 = false
          this.guideStatus.guidehand = true
          this.list[1].src = ''
        } else if (nums === 15) {
          this.handstatus = true
        } else if (nums === 16) {
          this.$refs.audio4.play()
          this.guideStatus.guide5 = true
        } else if (nums === 20) {
          this.$refs.audio5.play()
          this.guideStatus.guide5 = false
          this.guideStatus.guide6 = true
        } else if (nums === 22) {
          this.guideStatus.guide6 = false
          this.list[1].src = './static/match-numbers/guide-one.png'
          this.guideStatus.guidewrapper = false
          clearInterval(this.timer)
        }
      }
    },
    components: {
      page55
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/matchnumber.scss";

  .good_job {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
    z-index: 100;
    background-color: rgba(177, 247, 247, .9);
    .next_btn_wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      .next_btn_content {
        position: absolute;
        width: percent(120, 1280);
        height: percent(120, 720);
        right: percent(15, 1280);
        bottom: percent(105, 720);
      }
    }
  }
</style>
