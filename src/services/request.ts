import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 5000
})

request.interceptors.request.use(config => {
  // You can add headers or other configurations here
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
    return config
  }, error => {
    return Promise.reject(error)
  }
)


export default request
