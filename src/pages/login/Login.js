import React from 'react'
import { useHistory } from 'react-router-dom'
import { apiPath, handleError, postFullPath } from '../../utils/rest'
import qs from 'qs'
import LoginForm from '../../containers/login'

const Login = () => {
  const history = useHistory()

  const handleLogin = (credentials) => {
    postFullPath(apiPath, qs.stringify(credentials))
      .then((response) => {
        sessionStorage.setItem('token', response.data.token)
        history.push('/dashboard')
      })
      .catch(handleError)
      .finally(() => {
        console.log('Submit login success', credentials)
      })
  }

  return <LoginForm onSubmit={(data) => handleLogin(data)} />
}

export default Login
