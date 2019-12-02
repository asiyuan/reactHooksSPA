import axios from 'axios'

const KEY = 'ac0814ceceec49c2adeba87a7a04caa3'

const url = 'https://free-api.heweather.net/s6/weather/now?'

const params = {
  location: 'wuhan',
  Key: KEY,
}

// create an instance
const API = axios.create({
  timeout: 10000,

})

API.interceptors.response.use(response => {
  return response
}, error => {

  return Promise.reject(error)
})

export default API