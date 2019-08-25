<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <div class="q-gutter-md" style="width: 500px">
        <q-input v-model="userName" label="Username" filled autogrow/>
        <q-input type="password" v-model="password" label="Password" filled autogrow/>
      </div>
    </div>
    <div class="q-gutter-md">
      <q-btn label="Log In" class="q-mt-md" color="teal" @click="login()">
      </q-btn>
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
