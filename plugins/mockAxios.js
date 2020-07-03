import MockAdapter from 'axios-mock-adapter'
export default async ({ $axios }) => {
  const data = {
    rating: 4,
    name: 'Elon',
    surname: 'Musk',
    description: 'Engineer, industrial designer, technology entrepreneur and philanthropist',
    information: {
      born: 'Elon Reeve Musk\n June 28, 1971 (age 49)\nPretoria, South Africa',
      citizenship: 'South Africa (1971–present)\n' +
        'Canada (1971–present)\n' +
        'United States (2002–present)\n',
      email: 'Press@tesla.com'
    }
  }
  const image = await $axios
    .get('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/440px-Elon_Musk_Royal_Society.jpg', {
      responseType: 'arraybuffer'
    })
  const buffer = `data:${image.data.mimetype};base64,${Buffer.from(image.data).toString('base64')}`
  const mock = new MockAdapter($axios)
  mock.onGet('/users/1', {}).reply(200, data)
  mock.onGet('/users/1/image')
    .reply(200, { image: buffer })
  mock.onGet('/users/me')
    .reply(200, { id: '1' })
}
