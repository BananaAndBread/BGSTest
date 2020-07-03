import LocalScheme from '@nuxtjs/auth/lib/schemes/local'
/* Custom scheme to mock authentication */

export default class CustomScheme extends LocalScheme {
  async login (endpoint) {
    if (arguments[0].email === 'admin@admin.com' && arguments[0].password === 'adminadmin') {
      this.$auth.setToken(this.name, 'TOKEN123')
      if (this.options.autoFetchUser) {
        await this.fetchUser()
      }
    } else {
      throw new Error('InvalidCredentials')
    }
  }
}
