<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Data Viewer
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="row">
      </div>
      <div class= "row">
        <div class= "col">
        </div>
        <div class= "col" style="top: 100px;left: 100px ;right: 100px; position: relative">
        <p style="color:black;font-size:32px;font-family:arial;font-style:bold">
          Login to System
        </p>
        </div>
        <div class= "col">
        </div>
      </div>
      <router-view />
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
