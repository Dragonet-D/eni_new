// 存取localStorage中的数据

export const historystore = {
  save(value) {
    sessionStorage.setItem('eni-user-info', JSON.stringify(value))
  },
  fetch() {
    return JSON.parse(sessionStorage.getItem('eni-user-info')) || {}
  },
  clearall(key = 'eni-user-info') {
    sessionStorage.clear(key)
  }
}

function stageOne(question) {
  let result
  switch (question) {
    case 0:
      return 5
    case 1:
      return 11
    case 2:
      result = 13
      break
    case 3:
      result = 14
      break
    case 4:
      result = 15
      break
    case 5:
      result = 16
      break
    case 6:
      result = 17
      break
    case 7:
      result = 18
      break
    case 8:
      result = 19
      break
    case 9:
      result = 20
      break
    case 10:
      result = 21
      break
    case 11:
      result = 22
      break
    case 12:
      result = 23
      break
    case 13:
      result = 24
      break
    case 14:
      result = 25
      break
    case 15:
      result = 26
      break
    default:
      break
  }
  return result
}
function stageTwo(question) {
  let result
  switch (question) {
    case 0:
      return 27
    case 1:
      return 33
    case 2:
      return 34
    case 3:
      return 35
    case 4:
      return 36
    case 5:
      return 37
    case 6:
      return 38
    default:
      break
  }
  return result
}
function stageThree(question) {
  let result
  switch (question) {
    case 0:
      return 39
    case 1:
      return 44
    case 2:
      return 45
    case 3:
      return 46
    case 4:
      return 47
    case 5:
      return 48
    case 6:
      return 49
    default:
      break
  }
  return result
}
function stageFour(question) {
  let result
  switch (question) {
    case 0:
      return 50
    case 1:
      return 55
    case 2:
      return 55
    case 3:
      return 55
    case 4:
      return 55
    default:
      break
  }
  return result
}
function stageFive(question) {
  let result
  switch (question) {
    case 0:
      return 56
    case 1:
      return 61
    case 2:
      return 62
    case 3:
      return 63
    case 4:
      return 64
    case 5:
      return 65
    case 6:
      return 66
    default:
      break
  }
  return result
}
function stageSix(question) {
  let result
  switch (question) {
    case 0:
      return 67
    case 1:
      return 72
    case 2:
      return 73
    case 3:
      return 74
    case 4:
      return 75
    case 5:
      return 76
    case 6:
      return 77
    default:
      break
  }
  return result
}
// 计算跳转页面
export const calcPage = (stage, question) => {
  switch (stage) {
    case 0:
      return 5
    case 1:
      return stageOne(question)
    case 2:
      return stageTwo(question)
    case 3:
      return stageThree(question)
    case 4:
      return stageFour(question)
    case 5:
      return stageFive(question)
    case 6:
      return stageSix(question)
    case 7:
      return 78
    default:
      return true
  }
}
