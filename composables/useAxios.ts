import axios from "axios";
import { deducirMensajeError } from "./AppUtils";

const runtimeConfig = useRuntimeConfig();
import { useLocalStore } from "../stores/index";
const localStore = useLocalStore();
// const { getHttpHeaders } = localStore;

export const useAxios = () => {
  const get = async (url: string, params: object) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${runtimeConfig.public.API_URL}${url}`,
        params,
        headers: localStore.getHttpHeaders,
      });
      return response.data;
    } catch (error) {
      return {
        error: "S",
        mensaje: deducirMensajeError(error),
        objetos: [],
      };
    }
  };

  const post = async (url: string, params: object, jsonData: object) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${runtimeConfig.public.API_URL}${url}`,
        params,
        data: jsonData,
        headers: {
          ...localStore.getHttpHeaders,
          "Content-Type": "application/json", // Set the Content-Type header to specify JSON data
        },
      });
      return response.data;
    } catch (error) {
      return {
        error: "S",
        mensaje: deducirMensajeError(error),
        objetos: [],
      };
    }
  };

  const put = async (url: string, params: object, jsonData: object) => {
    try {
      const response = await axios({
        method: "PUT",
        url: `${runtimeConfig.public.API_URL}${url}`,
        params,
        data: jsonData,
        headers: {
          ...localStore.getHttpHeaders,
          "Content-Type": "application/json", // Set the Content-Type header to specify JSON data
        },
      });
      return response.data;
    } catch (error) {
      return {
        error: "S",
        mensaje: deducirMensajeError(error),
        objetos: [],
      };
    }
  };

  const deletes = async (url: string, params: object, jsonData: object) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${runtimeConfig.public.API_URL}${url}`,
        params,
        data: jsonData,
        headers: {
          ...localStore.getHttpHeaders,
          "Content-Type": "application/json", // Set the Content-Type header to specify JSON data
        },
      });
      const data = await response.data;
      return data;
    } catch (error) {
      return {
        error: "S",
        mensaje: deducirMensajeError(error),
        objetos: [],
      };
    }
  };

  return {
    get,
    post,
    put,
    deletes,
  };
};
