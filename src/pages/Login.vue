<template>
  <q-page>
    <q-input class="q-my-sm" v-model="userName" label="Username" filled autogrow/>
    <q-input type="Password" v-model="password" label="Password" filled/>
    <div class="row justify-center">
      <q-btn label="Iniciar Sesión" class="q-mt-md" style="background-color: #0B7482;color:white" @click="login()"></q-btn>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageLogin',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.userName !== '' && this.password !== '') {
        this.$router.push('/')
      }
    }
  }
}
</script>
