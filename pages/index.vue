<template>
  <v-app>
    <div class="card">
      <v-form v-model="valid" @submit.prevent="login">
        <v-container>
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
            <v-btn type="submit" depressed color="primary">
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
  mounted () {
    console.log(localStorage.getItem('user-token'))
    console.log(this.$store.state.auth.isAuthenticated)
  },
  data: () => ({
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
  methods: {
    login () {
      console.log('start login')
      const email = 'admin@admin.com'
      const password = 'adminadmin'
      this.$store.dispatch('auth/login', { email, password })
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
