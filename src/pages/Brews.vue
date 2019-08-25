<template>
  <div class="col q-pa-md">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col q-pa-sm">
            <p class="text-h6 q-my-sm">Fecha inicial: </p>
            <q-input filled v-model="initialDate" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="initialDate" @input="() => $refs.qDateProxy.hide()" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col q-pa-sm">
            <p class="text-h6 q-my-sm">Fecha final: </p>
            <q-input filled v-model="endDate" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="endDate" @input="() => $refs.qDateProxy.hide()" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
        <div class="row">
          <div class="col q-pa-sm">
            <p class="text-h6 q-my-sm">Tipo de cerveza: </p>
            <q-select filled v-model="brewType.model" :options="brewType.options" label="Filled" />
          </div>
          <div class="col q-pa-sm">
            <p class="text-h6 q-my-sm">Sucursal: </p>
            <q-select filled v-model="locations.model" :options="locations.options" label="Filled" />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <graphics :headers="this.headers" :results="this.results" :label="this.label"></graphics>
      </div>
      <div class="col">
        <graphics :headers="this.headers" :results="this.results" :label="this.label"></graphics>
      </div>
    </div>
  </div>
</template>

<script>
import Graphics from './Graphics'

export default {
  name: 'brews',
  components: {
    Graphics
  },
  data () {
    return {
      initialDate: '2019/02/01',
      endDate: '2019/02/01',
      brewType: {
        model: null,
        options: [
          'Corona', 'Carta Blanca', 'Dos equis', 'Indio'
        ]
      },
      locations: {
        model: null,
        options: [
          'Aqui', 'Alla', 'Cerca', 'Lejos'
        ]
      },
      headers: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      results: [12, 19, 3, 5, 2, 3],
      label: 'Calendario'
    }
  }
}
</script>
