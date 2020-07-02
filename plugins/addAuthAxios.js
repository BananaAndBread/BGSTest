import axios from 'axios'
window.onNuxtReady(() => {
  const token = localStorage.getItem('user-token')
  if (token) {
    axios.defaults.headers.common.Authorization = token
  }
})
