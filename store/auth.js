import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import users from '../mocks/users'
const mock = new MockAdapter(axios)

mock.onGet('/users').reply(200, users)
mock.onPost('/login',
  { password: 'adminadmin', email: 'admin@admin.com' })
  .reply(200, { token: 'TOKEN' })

function getToken () {
  if (process.browser) {
    return localStorage.getItem('user-token')
  } else {
    return ''
  }
}
export const state = () => {
  return {
    token: getToken(),
    status: ''
  }
}
export const mutations = {
  loginSuccess: (state, token) => {
    state.status = 'success'
    state.token = token
  },
  loginRequest: (state) => {
    state.status = 'loading'
  },
  loginFail: (state) => {
    state.status = 'error'
  }
}

export const actions = {
  async login ({ commit }, { password, email }) {
    try {
      console.log('enter store action')
      commit('loginRequest')
      const response = await this.$axios.post('/login', {
        email,
        password
      })
      const token = response.data.token
      if (process.browser) {
        localStorage.setItem('user-token', token)
        axios.defaults.headers.common.Authorization = token
      }
      commit('loginSuccess', token)
    } catch (e) {
      console.log('error')
      commit('loginFail')
      if (process.browser) {
        localStorage.removeItem('user-token')
      }
    }
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      localStorage.removeItem('user-token') // clear your user's token from localstorage
      delete axios.defaults.headers.common.Authorization
      resolve()
    })
  }
}

export const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
}
