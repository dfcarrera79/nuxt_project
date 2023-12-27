<script setup lang="ts">
import { useLocalStore } from "../stores/index";
import { storeToRefs } from "pinia";

const localStore = useLocalStore();

// const { count } = storeToRefs(localStore);
// const { increment } = localStore;
// const { decrement } = localStore;
</script>

<template>
  <q-page class="column justify-center content-center">
    <div
      class="text-body1 text-weight-medium q-pa-md"
      style="text-align: center"
    >
      <img src="../assets/loxasoluciones.png" alt="loxasoluciones" />
      <p>
        Producto desarrollado por Loxasoluciones bajo la dirección de Diego
        Fernando Carrera
      </p>

      <!-- <p>You have clicked the button {{ count }} times.</p>
      <div class="row q-gutter-md justify-center">
        <q-btn round color="primary" icon="add" @click="increment" />
        <q-btn round color="primary" icon="remove" @click="decrement" />
      </div> -->

      <p>
        <a href="https://wa.me/593986704083" target="_blank">0986704083</a> -
        <a href="mailto:dfcarrera@outlook.com">dfcarrera@outlook.com</a>
      </p>

      <p>
        <a href="https://www.loxasoluciones.com/" target="_blank"
          >Loxasoluciones</a
        >, Loja - Ecuador
      </p>
    </div>
  </q-page>
</template>
