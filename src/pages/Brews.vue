<template>
  <div class="col q-px-xl q-py-lg">
    <div class="row" style="background-color: white;">
      <div class="col q-px-md shadow-1">
        <div class="row q-my-md items-center">
          <div class="col">
            <q-input class="filter-input q-py-none" filled v-model="initialDate" mask="date" :rules="['date']" label="Fecha inicial:">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="initialDate" @input="() => $refs.qDateProxy.hide()" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col">
            <q-input class="filter-input q-py-none" filled v-model="endDate" mask="date" :rules="['date']" label="Fecha final:">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="endDate" @input="() => $refs.qDateProxy.hide()" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col">
            <q-select
              class="filter-input"
              filled
              v-model="brewType.model"
              multiple
              :options="this.brewType.options"
              label="Tipo de cerveza:"
              counter
              max-values="10"
              hint="10 selecciones máximo"
            />
          </div>
          <div class="col">
            <q-select class="filter-input" filled v-model="locations.model" :options="this.locations.options" label="Sucursal:"/>
          </div>
          <div class="col row justify-center">
            <q-btn color="primary" label="Buscar" @click="updateData()"/>
            <q-dialog v-model="dialog.visibility" :position="dialog.position">
              <div class="dialogCustom q-pa-md">
                <p class="text-h5 text-white"><q-icon name="warning"></q-icon> {{ this.dialog.message }}</p>
              </div>
            </q-dialog>
          </div>
        </div>
      </div>
    </div>
    <div class="row q-pa-md q-mt-md shadow-1" style="background-color: white;">
      <div class="col q-pa-md div-padre">
        <div class="div-hijo">
        </div>
        <p class="text-h5">{{ this.firstGraph.name }}</p>
        <graphics :graph="this.firstGraph"></graphics>
      </div>
      <div class="col q-pa-md div-padre">
        <div class="div-hijo">
        </div>
        <p class="text-h5">{{ this.secondGraph.name }}</p>
        <graphics :graph="this.secondGraph"></graphics>
      </div>
    </div>
  </div>
</template>

<style>
  .filter-text{
    color: #646464;
    font-size: 14px;
    font-weight: 700;
  }

  .filter-input{
    margin: 0 auto;
    width: 80%;
  }

  .div-padre{
    position: relative;
  }

  .div-hijo{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #64646400
  }

  .dialogCustom{
    background-color: rgb(167, 27, 27)
  }
</style>

<script>
import Graphics from './Graphics'
// import fakeData from '../assets/fake-data.json'
import fakeDataArrays from '../assets/fake-data-array.json'
// import { appendFile } from 'fs';

export default {
  name: 'brews',
  components: {
    Graphics
  },
  data () {
    return {
      dialog: {
        visibility: false,
        position: 'top',
        message: ''
      },
      dates: ['2019/08/26', '2019/08/27', '2019/08/28', '2019/08/29', '2019/08/30', '2019/08/31'],
      // cities: ['Guadalupe', 'San Pedro', 'Monterrey', 'Santiago', 'Apodaca'],
      // cervezas: ['Indio', 'Sol', 'Corona', 'Tecate', 'Dos Equis'],
      initialDate: this.getToday(1),
      endDate: this.getToday(1),
      brewType: {
        model: null,
        options: ['Indio', 'Sol', 'Corona', 'Tecate', 'Dos Equis']
      },
      locations: {
        model: null,
        options: ['Guadalupe', 'San Pedro', 'Monterrey', 'Santiago', 'Apodaca']
      },
      firstGraph: {
        id: 'firstGraph',
        name: 'grap',
        headers: [],
        results: [],
        label: 'MXN Peso'
      },
      secondGraph: {
        id: 'secondGraph',
        name: 'Grap',
        headers: [],
        results: [],
        label: 'Unidades'
      }
    }
  },
  methods: {
    updateData: function () {
      if (this.brewType.model && this.initialDate && this.endDate) {
        var beers = []
        for (var i = 0; i < this.brewType.model.length; i++) {
          beers.push(this.brewType.options.indexOf(this.brewType.model[i]))
        }
        var condition1 = this.dates.indexOf(this.initialDate) === -1 || this.dates.indexOf(this.endDate) === -1
        var condition2 = new Date(this.initialDate) > new Date(this.endDate)
        if (condition1 || condition2) {
          this.dialog.message = 'Una o ambas fechas son inválidas'
          this.dialog.visibility = true
          return 0
        }
        var dates = [this.dates.indexOf(this.initialDate), this.dates.indexOf(this.endDate)]
        var location = this.locations.options.indexOf(this.locations.model)
        var result = this.createData(beers, dates, location)
        this.sumData(result)
      } else {
        this.dialog.message = 'Por favor llene los campos requeridos'
        this.dialog.visibility = true
        return 0
      }
      // fruits.slice(1, 3);

      // this.firstGraph = null
      // this.secondGraph = null

      // this.secondGraph = {
      //   id: 'graphChanged2',
      //   name: 'Tipo de Cerveza vs. Unidades',
      //   headers: this.brewType.model,
      //   results: [15, 29, 13, 55, 32, 33],
      //   label: 'Unidades'
      // }
    },
    getToday: function (plus) {
      var date = new Date()
      var month = date.getMonth() + 1
      var day = date.getDate() + plus
      return date.getFullYear() + '/' + (month <= 9 ? '0' + month : month) + '/' + (day <= 9 ? '0' + day : day)
    },
    createData: function (beers, dates, location) {
      var keep = []
      var k
      var json = fakeDataArrays.splice(dates[0], dates[1] + 1)
      for (var i = 0; i < json.length; i++) {
        if (location === -1) {
          keep = []
          for (k = 0; k < beers.length; k++) {
            keep.push(json[i][0][beers[k]])
          }
          json[i][0] = []
          json[i][0] = keep
        } else {
          for (var j = 0; j < json[i].length; j++) {
            if (location === j) {
              var templine = json[i][j]
              json[i] = []
              json[i][0] = templine
              keep = []
              for (k = 0; k < beers.length; k++) {
                keep.push(json[i][0][beers[k]])
              }
              json[i][0] = []
              json[i][0] = keep
              break
            }
          }
        }
      }
      return json
    },
    sumData: function (json) {
      var suma = []

      for (var m = 0; m < 999; m++) {
        suma[m] = 0
      }
      console.log(json.length)
      for (var i = 0; i < json.length; i++) {
        for (var j = 0; j < json[i].length; j++) {
          console.log(json[i].length)
          for (var k = 0; k < json[i][j].length; k++) {
            console.log(i + ' - ' + j + ' - ' + k + ' - ')
            console.log(json[i][j][k][0] + ' ' + json[i][j][k][1])
            suma[k] += (json[i][j][k][0] * json[i][j][k][1])
            if (isNaN(suma[k]) || suma[k] === 0) {
              suma[k] = 0
            }
          }
        }
      }
      this.firstGraph = {
        id: 'firstGraph',
        name: 'Tipo de Cerveza vs Precio',
        headers: this.brewType.model,
        results: suma,
        label: 'MXN Peso'
      }
    }
  }
}
</script>
