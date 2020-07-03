import MockAdapter from 'axios-mock-adapter'

export default ({ $axios }) => {
  const data = {
    rating: 4,
    name: 'Elon',
    surname: 'Musk',
    description: 'Engineer, industrial designer, technology entrepreneur and philanthropist',
    information: {
      born: 'Elon Reeve Musk\n June 28, 1971 (age 49)\nPretoria, South Africa',
      citizenship: 'South Africa (1971–present)\n' +
        'Canada (1971–present)\n' +
        'United States (2002–present)\n'
    }
  }
  const mock = new MockAdapter($axios)
  mock.onGet('/users/1', {}).reply(200, data)
  mock.onPost('/login',
    {
      password: 'adminadmin',
      email: 'admin@admin.com'
    })
    .reply(200, { token: 'TOKEN' })
}
