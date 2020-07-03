<template>
  <div>
    <v-app>
      <v-card class="d-inline-block mx-auto">
        <v-container>
          <v-row justify="space-between">
            <v-col cols="auto">
              <v-avatar
                class="profile"
                color="grey"
                size="164"
                tile
              >
                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" />
              </v-avatar>
            </v-col>
            <v-col
              cols="auto"
              class="text-center pl-0"
            >
              <v-card-title>John Snow</v-card-title>
              <v-card-text> Greyhound divisively hello coldly wonderfully marginally far upon excluding.</v-card-text>
              <v-card-actions class="pa-4">
                <span class="grey--text text--lighten-2 caption mr-2">
                  ({{ rating }})
                </span>
                <v-rating v-model="rating" readonly />
              </v-card-actions>
              <p class="text-uppercase">
                Contact information
              </p>
              <div class="info-custom">
                <v-col>
                  <p class="info-key">
                    Info
                  </p>
                </v-col>
                <v-col class="info-value">
                  <div>Value</div>
                </v-col>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data: () => {
    return {
      rating: 4
    }
  }
}
</script>
<style scoped>
  .info-custom{
    display: flex;
    justify-content: flex-start;
  }
  .info-key{
    font-weight: bold;
    width: 25%;
  }
  .info-value{
  }
</style>
