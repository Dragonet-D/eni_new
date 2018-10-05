import {axios} from 'axios'
export function postInfo() {
  return axios.post('url', {}).then(res => {
    return Promise.resolve(res.data)
  }).catch(error => {
    console.log(error)
  })
}
