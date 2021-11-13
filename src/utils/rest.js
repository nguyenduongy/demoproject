import axios from 'axios'

const apiPath = 'https://61ea-2001-ee0-52d7-4e00-c46f-770c-4054-fd.ngrok.io'

const interceptor = () => {
  const token = sessionStorage.getItem('token')
  return token
    ? {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    : {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: token,
      }
}

const handleError = (error) => {
  console.log('Rest called error: ', error)
}

const get = (url) => {
  return axios.get(`${apiPath}/${url}`, interceptor())
}

const getFullPath = (fullPath) => {
  return axios.get(`${fullPath}`, interceptor())
}

const post = (url, body) => {
  return axios.post(`${apiPath}/${url}`, body, interceptor())
}

const postFullPath = (fullPath, body) => {
  return axios.post(`${fullPath}`, body, interceptor())
}

export { apiPath, handleError, get, getFullPath, post, postFullPath }
