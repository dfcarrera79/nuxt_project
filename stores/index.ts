// Example using Composition API
import { defineStore } from "pinia";

export const useLocalStore = defineStore(
  "store",
  () => {
    // state
    const isDarkActive = ref(false);
    const estaLogeado = ref(false);
    const token = ref("");
    const usuario = ref("");
    const codigo = ref(0);
    const acceso = ref(false);

    // getters
    // const getURLApi = computed(() => {
    //   return API_URL;
    // })
    // const getUsuario = computed(() => {
    //   return usuario;
    // });
    // const getCodigo = computed(() => {
    //   return codigo;
    // })
    const getHttpHeaders = computed(() => {
      return {
        "Content-Type": "application/json",
        token: token,
        usucodigo: codigo,
      };
    });
    // actions
    const toggleDarkMode = (val: boolean) => {
      isDarkActive.value = val;
    };

    const iniciarSesion = (tok: string, usu: string, cod: number) => {
      estaLogeado.value = true;
      token.value = tok;
      usuario.value = usu;
      codigo.value = cod;
    };

    const actualizarUsuario = (newUsuario: string, newCodigo: number) => {
      usuario.value = newUsuario;
      codigo.value = newCodigo;
    };

    return {
      isDarkActive,
      estaLogeado,
      token,
      usuario,
      codigo,
      acceso,
      getHttpHeaders,
      toggleDarkMode,
      iniciarSesion,
      actualizarUsuario,
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
