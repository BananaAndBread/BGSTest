# BGSTest

## Build Setup (npm)

build environment--
Windows + OS X instructions here: https://github.com/nodejs/node-gyp
Ubuntu users please run: `sudo apt-get install g++ build-essential`
RHEL users please run: `yum install gcc-c++` and `yum groupinstall 'Development Tools'` 

```bash
# install dependencies
$ sudo npm install

# serve with hot reload at localhost:3000
$ sudo npm run dev

# build for production and launch server
$ sudo npm run build
$ sudo npm run start

# generate static project
$ sudo npm run generate
```
## Build Setup (docker)

```bash
# serve with hot reload at localhost:3000
$ docker-compose -f docker-compose.dev.yml up

# build for production and launch server
$ docker-compose up
```


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
