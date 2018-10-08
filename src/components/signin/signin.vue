<template>
  <div
    class="page_wrapper"
  >
    <div class="sign_in page" v-show="pageStatus && siginPage">
      <div class="page_content">
        <div class="sign_content">
          <div class="username">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              v-model="userid"
            >
          </div>
          <div class="password">
            <label for="passwrod">Password</label>
            <input
              type="password"
              id="passwrod"
              placeholder="Password"
              @keyup.enter="signIn"
              v-model="password"
            >
          </div>
          <div class="sign_in">
            <button
              class="btn"
              @click="signIn"
            >Sign In
            </button>
          </div>
          <!-- <button @click="clear">clear</button> -->
        </div>
        <div
          class="layer"
          v-show="messageShow"
          @click="messageClick"
        >
          <div class="layer_content">
            <div class="message">{{message}}</div>
          </div>
        </div>
      </div>
    </div>
    <page1 v-if="!pageStatus"></page1>
    <page11 v-if="pageNumber === 11"></page11>
    <page15 v-if="pageNumber === 15"></page15>
    <page18 v-if="pageNumber === 18"></page18>
    <page21 v-if="pageNumber === 21"></page21>
    <page24 v-if="pageNumber === 24"></page24>

    <page27 v-if="pageNumber === 27"></page27>
    <page33 v-if="pageNumber === 33"></page33>
    <page36 v-if="pageNumber === 36"></page36>

    <page39 v-if="pageNumber === 39"></page39>
    <page44 v-if="pageNumber === 44"></page44>
    <page47 v-if="pageNumber === 47"></page47>

    <page50 v-if="pageNumber === 50"></page50>
    <page55 v-if="pageNumber === 55"></page55>

    <page56 v-if="pageNumber === 56"></page56>
    <page61 v-if="pageNumber === 61"></page61>
    <page64 v-if="pageNumber === 64"></page64>

    <page67 v-if="pageNumber === 67"></page67>
    <page72 v-if="pageNumber === 72"></page72>
    <page75 v-if="pageNumber === 75"></page75>

    <audio id="audio_page2" ref="audio" src="./static/MonkeyBusiness/1.mp3"></audio>
  </div>
</template>

<script type="text/ecmascript-6">
  import page1 from 'components/page1/page1'

  import page11 from 'components/page11/page11'
  import page15 from 'components/page15/page15'
  import page18 from 'components/page18/page18'
  import page21 from 'components/page21/page21'
  import page24 from 'components/page24/page24'

  import page27 from 'components/page27/page27'
  import page33 from 'components/page33/page33'
  import page36 from 'components/page36/page36'

  import page39 from 'components/page39/page39'
  import page44 from 'components/page44/page44'
  import page47 from 'components/page47/page47'

  import page50 from 'components/page50/page50'
  import page55 from 'components/page55/page55'

  import page56 from 'components/page56/page56'
  import page61 from 'components/page61/page61'
  import page64 from 'components/page64/page64'

  import page67 from 'components/page67/page67'
  import page72 from 'components/page72/page72'
  import page75 from 'components/page75/page75'

  import Vue from 'vue'
  import {goToNext} from 'common/js/mixins'
  import {historystore, calcPage} from 'common/js/utils'
  import $ from 'jquery'
  // let timer = null
  export default {
    mixins: [goToNext],
    data() {
      return {
        pageStatus: true,
        userid: '',
        password: '',
        message: '',
        messageShow: false,
        pageNumber: 0,
        siginPage: true
      }
    },
    methods: {
      messageClick() {
        this.messageShow = false
        clearTimeout(this.timer)
      },
      clear() {
        $.ajax({
          /* eslint-disable no-undef */
          url: loginOutUrl,
          dataType: 'json',
          type: 'POST',
          data: {
            'PassCode': 'aa02'
          }
        })
      },
      signIn() {
        if (!this.password.trim()) return
        let This = this
        this.audioLoad()
        // $.ajax({
        //   /* eslint-disable no-undef */
        //   url: loginOutUrl,
        //   dataType: 'json',
        //   type: 'POST',
        //   data: {
        //     'PassCode': 'aa03'
        //   }
        // })
        // return;
        // Login
        $.ajax({
          /* eslint-disable no-undef */
          url: loginUrl,
          dataType: 'json',
          type: 'POST',
          data: {
            'PassCode': this.password
          },
          success(data) {
            // console.log(data)
            if (data.Success === true) {
              // timer = setTimeout(() => {
              //   const h = This.$createElement
              //   This.$notify.error({
              //     title: 'Error Message',
              //     message: h('i', {style: 'color: teal'}, 'Your session has expired due to 15 minutes of inactivity, please login again')
              //   })
              //   setTimeout(() => {
              //     window.location.reload()
              //   }, 3000)
              // }, 1000 * 60 * 15)
              setInterval(() => {
                $.ajax({
                  /* eslint-disable no-undef */
                  url: keepValidate,
                  dataType: 'json',
                  type: 'POST',
                  data: {
                    'PassCode': historystore.fetch('eni-user-info').password
                  },
                  success(data) {
                    if (data.Success === false) {
                      const h = This.$createElement
                      This.$notify.error({
                        title: 'Error Message',
                        message: h('i', {style: 'color: teal'}, data.Message)
                      })
                      setTimeout(() => {
                        // if (timer) {
                        //   clearTimeout(timer)
                        // }
                        window.location.reload()
                      }, 3000)
                    }
                  }
                })
              }, 10000)
              historystore.save({
                userid: data.UserId,
                password: This.password
              })
              Vue.prototype.uploadData = {
                userid: historystore.fetch().userid,
                scope: []
              }
              window.onunload = () => {
                $.ajax({
                  /* eslint-disable no-undef */
                  url: loginOutUrl,
                  dataType: 'json',
                  type: 'POST',
                  data: {
                    'PassCode': historystore.fetch('eni-user-info').password
                  }
                })
              }
              if (data.QuestionId && data.StageId) {
                const h = This.$createElement
                This.$notify({
                  title: 'Remind Message',
                  message: h('i', {style: 'color: teal'}, 'You still have unfinished questions, please continue to answer')
                })
                This.pageNumber = calcPage(data.StageId, data.QuestionId)
                This.siginPage = false
              } else {
                This.audioLoad()
                setTimeout(() => {
                  This.audioPlay()
                }, 2000)
                This.goNext(1)
              }
            } else {
              This.message = data.Message
              // This.messageShow = true
              const h = This.$createElement
              This.$notify.error({
                title: 'Error Message',
                message: h('i', {style: 'color: teal'}, This.message)
              })
              setTimeout(() => {
                This.messageClick()
              }, 6000)
            }
          }
        })
      }
    },
    components: {
      page1,
      page11,
      page15,
      page18,
      page21,
      page24,
      page27,
      page33,
      page36,
      page39,
      page44,
      page47,
      page50,
      page55,
      page56,
      page61,
      page64,
      page67,
      page72,
      page75
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "~common/scss/pure.scss";

  .page_content {
    background-color: #fafbfc;
    width: percent(1110, 1280);
    height: percent(720, 768);
    border-radius: 30px;
    color: #586081;
    font-size: 28px;
    .sign_content {
      padding: percent(24, 295) percent(24, 380);
      width: percent(332, 380);
      height: percent(247, 295);
      display: flex;
      flex-direction: column;
      justify-content: center;
      .username {
        display: none;
      }
      div {
        height: percent(84, 247);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        input {
          width: 100%;
          height: 50%;
          text-indent: 1em;
          box-sizing: border-box;
          border: 1px solid #d1d5da;
          border-radius: 10px;
        }
        input::-webkit-input-placeholder {
          color: #bcbfc1;
        }
      }
      .sign_in {
        .btn {
          height: 50%;
          background-color: #2bb44b;
          border-radius: 10px;
          color: #fff;
          border: none;
          -webkit-tap-highlight-color: transparent;
        }
      }
    }
    .layer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .2);
      top: 0;
      left: 0;
      z-index: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      .layer_content {
        position: relative;
        width: 90%;
        height: 15%;
        border: 1px solid #fde2e2;
        background-color: #fef0f0;
        color: #f56c6c;
        display: flex;
        font-size: 26px;
        justify-content: center;
        align-items: center;
        text-align: center;
        .message {
          position: absolute;
        }
      }
    }
  }
</style>
