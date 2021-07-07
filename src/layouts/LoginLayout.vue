<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="text-white" style="background-color: #0B7482">
      <q-toolbar>
        <q-toolbar-title>
          <br>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container class="col">
      <div class= "row justify-center">
        <div class= "col-6">
          <p class="q-my-xl text-center" style="color:black;font-size:32px;font-family:arial;font-style:bold">
            Login to System
          </p>
        </div>
      </div>
      <div class="row q-my-xl justify-center">
        <div class="col-4">
          <router-view />
        </div>
      </div>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
