import {loginUrl, scopeUrl} from 'api/url'
import axios from 'axios'

// success
export const ERR_OK = true

// login
export function Login(UserId, Password) {
  let data = {
    'UserId': UserId,
    'Password': Password
  }
  return axios.get(loginUrl, data).then(res => {
    return Promise.resolve(res.data)
  }).catch(error => {
    console.log(error)
  })
}

// upLoad answer
export function Scope(StageId, QuestionId, Result, StartTime, EndTime, UserId) {
  let data = {
    'StageId': StageId,
    'QuestionId': QuestionId,
    'Result': Result,
    'StartTime': StartTime,
    'EndTime': EndTime,
    'UserId': UserId
  }
  return axios.post(scopeUrl, data).then(res => {
    return Promise.resolve(res.data)
  }).catch(error => {
    console.log(error)
  })
}
