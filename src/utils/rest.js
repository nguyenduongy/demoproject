import axios from 'axios'

// const apiPath = 'http://localhost:3001'
const apiPath = 'https://1295-2001-ee0-52d7-4e00-e96e-ded4-b8b7-3c9e.ngrok.io'

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
