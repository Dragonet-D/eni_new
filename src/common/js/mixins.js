import draggable from 'vuedraggable'
import goodjob from 'components/goodjob/goodjob'
import wronganswer from 'components/wronganswer/wronganswer'
import $ from 'jquery'
import {historystore} from 'common/js/utils'

// let audioReload = ''
// go to next page
export const goToNext = {
  data() {
    return {
      pageStatus: true,
      StartTime: ''
    }
  },
  mounted() {
    this.StartTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
  },
  methods: {
    // Scope
    Scope(StageId, QuestionId, Result, Answer, RawResponse, StartTime, EndTime, UserId) {
      $.ajax({
        /* eslint-disable no-undef */
        url: scoreUrl,
        dataType: 'json',
        type: 'POST',
        data: {
          'StageId': StageId,
          'QuestionId': QuestionId,
          'Result': Result,
          'Answer': Answer,
          'RawResponse': RawResponse,
          'StartTime': this.StartTime,
          'EndTime': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
          'UserId': historystore.fetch().userid
        },
        success: function (data) {
          // console.log(data)
        }
      })
    },
    // listen again
    relisten() {
      this.$refs.audio.load()
      this.$refs.audio.play()
    },
    // go next page
    goNext(num) {
      this.pageStatus = false
      // window.location.hash = num
    },
    // let prev audio pause
    prevOnePause(id) {
      let obj = document.getElementById(`audio_page${id}`)
      // console.log(obj)
      if (obj) {
        obj.pause()
      }
    },
    // load before play
    audioLoad(ref = 'audio') {
      let obj = this.$refs[ref]
      if (obj) {
        obj.load()
      }
    },
    // this page audio play
    audioPlay(ref = 'audio') {
      let obj = this.$refs[ref]
      if (obj) {
        obj.load()
        obj.play()
      }
    },
    // audio pause
    audioPause(ref = 'audio') {
      let obj = this.$refs[ref]
      if (obj) {
        obj.load()
        obj.pause()
      }
    },
    filterDataaa(data) {
      for (let value of data) {
        if (value.id === '1') {
          value.remind = 'border: 6px solid red;'
        }
      }
      return data
    }
  },
  computed: {
    currentAnswerIndex() {
      let valueNeed = ''
      for (let value of list) {
        if (value.id === '1') {
          valueNeed = value.index
        }
      }
      return valueNeed
    }
  }
}

// patterns mixins
export const patterns = {
  data() {
    return {
      list2: [],
      editable: true,
      editable1: true,
      isDragging: false,
      delayedDragging: false,
      goToNextStatus: 0,
      checkStatus: 0,
      checkOnOff: true
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    }
  },
  methods: {
    uploadResult(stage, poinsts, page, status, answer) {
      this.uploadData.scope.push({
        stage: stage,
        poinsts: poinsts,
        result: status,
        page: page
      })
      this.Scope(stage, poinsts, status, answer, this.list2[0].index)
    },
    upLoadAnswer(stage, poinsts, page, answer) {
      let status = this.goToNextStatus === 1
      this.uploadResult(stage, poinsts, page, status, answer)
    },
    filterDataRemind(data) {
      for (let value of data) {
        if (value.id === '1') {
          value.remind = 'border: 6px solid red;'
        }
      }
      return data
    },
    filterData(data, page) {
      let result = null
      for (let value of data) {
        if (value.page === page) {
          result = value.result
          break
        }
      }
      return result
    },
    onMove({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    },
    checkAnswers(stage, poinsts) {
      if (this.checkOnOff) {
        if (this.goToNextStatus === 1) {
          this.checkStatus = 1
          this.uploadResult(stage, poinsts, true)
        } else {
          this.checkStatus = 2
          this.uploadResult(stage, poinsts, false)
          this.timer = setTimeout(() => {
            this.checkStatus = 0
            this.goRemind()
          }, 6000)
        }
        this.checkOnOff = false
        if (this.$refs.audio) {
          this.$refs.audio.pause()
        }
      }
    },
    wrongAnswerClick() {
      this.checkStatus = 0
      this.goRemind()
      if (this.timer) {
        clearTimeout(this.timer)
      }
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    },
    list2(newValue) {
      if (newValue.length) {
        // this.editable = false
        this.goToNextStatus = newValue[0].id === '1' ? 1 : 0
      }
    }
  },
  components: {
    draggable,
    goodjob,
    wronganswer
  }
}

// patterns remind mixins
export const patternsRemind = {
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    }
  },
  methods: {
    onMove({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    },
    start() {
      this.isDragging = true
      this.cancleAnswer()
      console.log('开始移动')
    }
  },
  watch: {
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
    draggable
  }
}

// i know more mixins
export const iKnowMore = {
  data() {
    return {
      goNextStatus: false,
      gotoNext: false,
      checkStatus: 0,
      answerRemind: '',
      checkOnOff: true,
      canGo: false,
      checkStatuss: 0,
      chooseimg: 0,
      stage: 0,
      poinsts: 0,
      status: false,
      page: '',
      num: 0,
      answer: '',
      rawResponse: ''
    }
  },
  methods: {
    uploadResult(stage, poinsts, status, page, answer, rawResponse) {
      this.uploadData.scope.push({
        stage: stage,
        poinsts: poinsts,
        result: status,
        page: page
      })
      this.Scope(stage, poinsts, status, answer, rawResponse)
    },
    filterData(data, page) {
      let result = null
      for (let value of data) {
        if (value.page === page) {
          result = value.result
          break
        }
      }
      return result
    },
    checkAnswer(stage, poinsts, status, checkStatus, page) {
      this.canGo = true
      this.stage = stage
      this.status = status
      this.page = page
      this.poinsts = poinsts
      this.checkStatuss = checkStatus
      this.chooseimg = checkStatus
    },
    checkAnswers(stage, poinsts, status, checkStatus, num, page, answer, rawResponse) {
      this.chooseimg = checkStatus
      this.stage = stage
      this.num = num
      this.poinsts = poinsts
      this.status = status
      this.page = page
      this.canGo = true
      this.answer = answer
      this.rawResponse = rawResponse
    },
    checkNum(num) {
      if (this.canGo) {
        this.uploadResult(this.stage, this.poinsts, this.status, this.page, this.answer, this.rawResponse)
        this.goNext(this.num)
        this.audioPlay()
        this.prevOnePause(num - 1)
      }
    }
  },
  components: {
    goodjob,
    wronganswer
  }
}

// i can count mixins
export const iCanCunt = {
  data() {
    return {
      clickIndex: ''
    }
  },
  methods: {
    btnNumClick(index, id) {
      this.btnActiveIndex = index
      if (id) {
        this.goodjobStatus = true
      }
    },
    wrongAnswerClick(num) {
      this.checkStatus = 0
      this.countNums = this.filterData(this.countNums)
      this.btnActiveIndex = 10
      setTimeout(() => {
        this.goNext(num)
      }, 2000)
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    getIndex(index) {
      this.clickIndex = index
    }
  },
  components: {
    goodjob,
    wronganswer
  }
}

// match numbers mixins
export const matchNumbers = {
  data() {
    return {
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
      handstatus: false,
      gotoNextoNOff: false,
      checkStatus: 0,
      checkOnOff: true,
      goToNextStatus: 0,
      guideRemidnum: 0
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    },
    dragOptions1() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable1,
        ghostClass: 'ghost'
      }
    },
    dragOptions2() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable2,
        ghostClass: 'ghost'
      }
    },
    dragOptions3() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable3,
        ghostClass: 'ghost'
      }
    },
    dragOptions4() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable4,
        ghostClass: 'ghost'
      }
    }
  },
  methods: {
    listClick(lists, targetList, editable) {
      // this.list.push(lists[0])
      // this[targetList] = []
      // this[editable] = true
      return false
    },
    onMove({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    },
    change1(evt) {
      if (evt.added) {
        this.list1.forEach(element => {
          if (element.id === evt.added.element.id) {
            return
          }
          this.list.push(element)
        })
        this.list1 = [evt.added.element]
      }
    },
    change2(evt) {
      if (evt.added) {
        this.list2.forEach(element => {
          if (element.id === evt.added.element.id) {
            return
          }
          this.list.push(element)
        })
        this.list2 = [evt.added.element]
      }
    },
    change3(evt) {
      if (evt.added) {
        this.list3.forEach(element => {
          if (element.id === evt.added.element.id) {
            return
          }
          this.list.push(element)
        })
        this.list3 = [evt.added.element]
      }
    },
    change4(evt) {
      if (evt.added) {
        this.list4.forEach(element => {
          if (element.id === evt.added.element.id) {
            return
          }
          this.list.push(element)
        })
        this.list4 = [evt.added.element]
      }
    }
  },
  watch: {
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

// know numbers mixins
export const knowNumbers = {
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    }
  },
  methods: {
    onMove({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    }
  },
  isDragging(newValue) {
    if (newValue) {
      this.delayedDragging = true
      return
    }
    this.$nextTick(() => {
      this.delayedDragging = false
    })
  },
  watch: {
    list1(newValue) {
      if (newValue.length) {
        if (newValue[0].id === '1') {
          this.goToNextStatus = true
        }
      }
    }
  },
  components: {
    draggable,
    goodjob
  }
}

// bonus
export const bonus = {
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    },
    dragOptions1() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable1,
        ghostClass: 'ghost'
      }
    },
    dragOptions2() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable2,
        ghostClass: 'ghost'
      }
    },
    dragOptions3() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable3,
        ghostClass: 'ghost'
      }
    },
    dragOptions4() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable4,
        ghostClass: 'ghost'
      }
    },
    dragOptions5() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable5,
        ghostClass: 'ghost'
      }
    },
    dragOptions6() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable6,
        ghostClass: 'ghost'
      }
    },
    dragOptions7() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable7,
        ghostClass: 'ghost'
      }
    },
    dragOptions8() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable8,
        ghostClass: 'ghost'
      }
    },
    dragOptions9() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable9,
        ghostClass: 'ghost'
      }
    }
  },
  methods: {
    listClick(list1, targetlist, editable) {
      // this.list.push(list1[0])
      // this[targetlist] = []
      // this[editable] = true
      return false
    },
    change1(evt) {
      if (evt.added) {
        this.list1.forEach(element => {
          if (element.id === evt.added.element.id) {
            return
          }
          this.list.push(element)
        })
        this.list1 = [evt.added.element]
      }
    },
    change2(evt) {
      if (evt.added) {
        this.list2.forEach(element => {
          if (element.id === evt.added.element.id) {
            return
          }
          this.list.push(element)
        })
        this.list2 = [evt.added.element]
      }
    },
    change3(evt) {
      if (evt.added) {
        this.list3.forEach(element => {
          if (element.id === evt.added.element.id) {
            return
          }
          this.list.push(element)
        })
        this.list3 = [evt.added.element]
      }
    },
    change4(evt) {
      if (evt.added) {
        this.list4.forEach(element => {
          if (element.id === evt.added.element.id) {
            return
          }
          this.list.push(element)
        })
        this.list4 = [evt.added.element]
      }
    },
    change5(evt) {
      if (evt.added) {
        this.list5.forEach(element => {
          if (element.id === evt.added.element.id) {
            return
          }
          this.list.push(element)
        })
        this.list5 = [evt.added.element]
      }
    },
    change6(evt) {
      if (evt.added) {
        this.list6.forEach(element => {
          if (element.id === evt.added.element.id) {
            return
          }
          this.list.push(element)
        })
        this.list6 = [evt.added.element]
      }
    },
    change7(evt) {
      if (evt.added) {
        this.list7.forEach(element => {
          if (element.id === evt.added.element.id) {
            return
          }
          this.list.push(element)
        })
        this.list7 = [evt.added.element]
      }
    },
    change8(evt) {
      if (evt.added) {
        this.list8.forEach(element => {
          if (element.id === evt.added.element.id) {
            return
          }
          this.list.push(element)
        })
        this.list8 = [evt.added.element]
      }
    },
    change9(evt) {
      if (evt.added) {
        this.list9.forEach(element => {
          if (element.id === evt.added.element.id) {
            return
          }
          this.list.push(element)
        })
        this.list9 = [evt.added.element]
      }
    }
  }
}
