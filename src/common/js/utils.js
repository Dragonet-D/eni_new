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
  if (question === 1 || question === 2) {
    result = 11
  } else if (question === 3 || question === 4 || question === 5) {
    result = 15
  } else if (question === 6 || question === 7 || question === 8) {
    result = 18
  } else if (question === 9 || question === 10 || question === 11) {
    result = 21
  } else if (question === 12 || question === 13 || question === 14) {
    result = 24
  } else {
    result = 27
  }
  return result
}
function stageTwo(question) {
  let result
  if (question === 1 || question === 2) {
    result = 33
  } else if (question === 3 || question === 4 || question === 5) {
    result = 36
  } else {
    result = 39
  }
  return result
}
function stageThree(question) {
  let result
  if (question === 1 || question === 2) {
    result = 44
  } else if (question === 3 || question === 4 || question === 5) {
    result = 47
  } else {
    result = 50
  }
  return result
}
function stageFour(question) {
  let result
  if (question === 4) {
    result = 56
  } else {
    result = 55
  }
  return result
}
function stageFive(question) {
  let result
  if (question === 1 || question === 2) {
    result = 61
  } else if (question === 3 || question === 4 || question === 5) {
    result = 64
  } else {
    result = 67
  }
  return result
}
function stageSix(question) {
  let result
  if (question === 1 || question === 2) {
    result = 72
  } else if (question === 3 || question === 4 || question === 5) {
    result = 75
  } else {
    result = 75
  }
  return result
}
// 计算跳转页面
export const calcPage = (stage, question) => {
  switch (stage) {
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
    default:
      return true
  }
}
