<template>
  <v-app>
    <div class="card">
      <v-form v-model="valid" @submit.prevent.stop="login">
        <v-container>
          <v-alert v-if="invalidCredentials" type="error">
            Invalid Credentials
          </v-alert>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          />
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[passwordRules.required, passwordRules.min]"
            :type="show1 ? 'text' : 'password'"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          />
          <div class="my-2">
            <v-btn type="submit" :disabled="!valid" depressed color="primary">
              Login
            </v-btn>
          </div>
        </v-container>
      </v-form>
    </div>
  </v-app>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    invalidCredentials: false,
    valid: false,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    show1: false,
    password: '',
    passwordRules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => ('The email and password you entered don\'t match')
    }
  }),
  middleware: 'login',
  methods: {
    login () {
      if (this.valid) {
        const email = this.email
        const password = this.password
        this.$auth.loginWith('customStrategy', {
          email,
          password
        }).then(() => {
          this.$router.push('/profile')
        }).catch(() => {
          this.invalidCredentials = true
        })
      }
    }
  }
}
</script>

<style>
.card{
  width: 75%;
  border: 1px #a2a2a2 solid;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10em;
}
</style>
