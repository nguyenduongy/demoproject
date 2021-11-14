import axios from 'axios'

const apiPath = 'http://localhost:3001'

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
