<script setup lang="ts">
// Data
const tab = ref("");
</script>

<template>
  <div class="q-pt-sm">
    <div>
      <h4
        class="row text-uppercase text-grey-8 justify-center content-center q-my-sm q-pb-md"
        style="font-family: 'Bebas Neue'"
      >
        <div class="q-pt-sm">GESTIÓN DE EMPLEADOS</div>
      </h4>
    </div>

    <div class="q-gutter-y-sm">
      <q-card flat>
        <q-tabs
          v-model="tab"
          dense
          class="bg-grey-2 text-grey-9"
          active-color="primary"
          indicator-color="primary"
          style="font-family: 'Oswald'"
          align="justify"
          narrow-indicator
        >
          <q-tab name="grupos" label="Lugares de Trabajo" />
          <q-tab name="perfiles" label="Asignación de Lugares de Trabajo" />
          <q-tab name="lugares" label="Lista de empleados asignados" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="grupos"> </q-tab-panel>

          <q-tab-panel name="perfiles"> </q-tab-panel>

          <q-tab-panel name="lugares"> </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>
