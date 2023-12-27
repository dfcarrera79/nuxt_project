<script setup lang="ts">
// Data
const tab = ref("");
</script>

<template>
  <div class="q-pt-sm">
    <h4
      class="row text-uppercase text-grey-8 justify-center content-center q-my-sm q-pb-md"
      style="font-family: &quot;Bebas Neue&quot;"
    >
      <div class="q-pt-sm">CONFIGURACIÓN DE HORARIOS</div>
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
        style="font-family: &quot;Oswald&quot;"
        align="justify"
        narrow-indicator
      >
        <q-tab name="horarios" label="Creación de Horarios" />
        <q-tab name="asignacion" label="Asignación de Horarios a Grupos" />
        <q-tab
          name="visualizacion"
          label="Visualización de Horarios Asignados"
        />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="horarios"> </q-tab-panel>

        <q-tab-panel name="asignacion"> </q-tab-panel>

        <q-tab-panel name="visualizacion"> </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>
