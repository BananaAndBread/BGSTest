import LocalScheme from '@nuxtjs/auth/lib/schemes/local'

export default class CustomScheme extends LocalScheme {
  async login (endpoint) {
    this.$auth.setToken(this.name, 'TOKEN123')
    if (this.options.autoFetchUser) {
      await this.fetchUser()
    }
    console.log('login')
  }
  async fetchUser (endpoint) {
    this.$auth.setUser({ name: 'admin' })
  }
}
