<template>
  <q-layout view="lHh Lpr lFf">
      <q-header style="background-color:#0B7482">
        <q-toolbar>
          <q-toolbar-title>Cervecería Teotihuacan</q-toolbar-title>
        </q-toolbar>
      </q-header>
    <q-page-container>
      <div class="row">
        <div class="col-2 shadow-1">
          <q-list elevated>
            <q-item class="q-my-sm q-py-sm" style="border-bottom:solid 1px #F6F6F6;font-size:18px;min-height:80px" v-for="item in menuList" v-bind:key="item.id" clickable v-ripple @click="redirect(item.url)">
                <q-item-section avatar>
                  <a :href="item.url" style="text-decoration:none;">
                    <q-icon :name="item.icon" :style="item.style"/>
                  </a>
                </q-item-section>

                <q-item-section>
                  <a :href="item.url" :style="item.text_style">
                    {{item.label}}
                  </a>
                </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col" style="background-color:#F6F6F6">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

const menuList = [
  {
    icon: 'fas fa-beer',
    style: 'font-size:25px;color:#0B7482;text-decoration:none;',
    text_style: 'color:#6A6A6A;text-decoration:none;',
    url: '#/beer',
    label: 'Cerveza',
    separator: true
  },
  {
    icon: 'fas fa-store-alt',
    style: 'font-size:25px;color:#0B7482',
    text_style: 'color:#6A6A6A;text-decoration:none;',
    url: '#/store',
    label: 'Tienda',
    separator: false
  },
  {
    icon: 'fas fa-beer',
    style: 'font-size:25px;color:#6A6A6A',
    text_style: 'color:#6A6A6A;text-decoration:none;',
    url: '#/beerPrediction',
    label: 'Cerveza Prediccion',
    separator: true
  },
  {
    icon: 'fas fa-store-alt',
    style: 'font-size:25px;color:#6A6A6A',
    text_style: 'color:#6A6A6A;text-decoration:none;',
    url: '#/storePrediction',
    label: 'Tienda Prediccion',
    separator: false
  }
]

export default {
  name: 'MyLayout',
  data () {
    return {
      drawer: true,
      menuList
    }
  },
  methods: {
    openURL,
    redirect: function (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style>
</style>
