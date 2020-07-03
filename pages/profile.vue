<template>
  <div>
    <v-app>
      <v-card class="d-inline-block mx-auto custom-card">
        <v-container>
          <v-row justify="center">
            <v-col cols="auto">
              <v-avatar
                class="profile"
                color="grey"
                size="164"
                tile
              >
                <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/440px-Elon_Musk_Royal_Society.jpg" />
              </v-avatar>
            </v-col>
            <v-col
              cols="auto"
              class="text-center pl-0"
            >
              <v-card-title class="centralized">
                {{ info.name }} {{ info.surname }}
              </v-card-title>
              <v-card-text> {{ info.description }}</v-card-text>
              <v-card-actions class="pa-4 centralized">
                <span class="text--lighten-2">
                  ({{ info.rating }})
                </span>
                <v-rating v-model="info.rating" readonly />
              </v-card-actions>
              <p class="text-uppercase">
                information
              </p>
              <v-row v-for="infoKey of Object.keys(info.information)" :key="infoKey" justify="center">
                <v-col cols="3" class="info-key">
                  <p>
                    {{ infoKey }}:
                  </p>
                </v-col>
                <v-col cols="4" class="info-value">
                  <div>{{ info.information[infoKey] }}</div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <div class="logout-link">
            <a @click.prevent.stop="logout">Logout</a>
          </div>
        </v-container>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, $auth }) {
    const data = await $axios.$get('/users/1', { withCredentials: true })
    return { info: data }
  },
  middleware: 'auth',
  data: () => {
    return {
      info: {}
    }
  },
  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>
<style scoped>
  .info-key{
    font-weight: bold;
    text-align: left;
    width: 10%;
  }
  .info-value{
    text-align: left;
  }
  .centralized{
    justify-content: center;
  }
  .logout-link{
    margin-top: 3em;
    display: flex;
    justify-content: flex-end;
    margin-right: 2em;
  }
  .custom-card{
    margin-top: 5em;
  }
</style>
