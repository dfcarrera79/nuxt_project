// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/css/app.scss"],
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    [
      "nuxt-quasar-ui",
      {
        lang: "es",
        plugins: [
          "BottomSheet",
          "Dialog",
          "Loading",
          "LoadingBar",
          "Notify",
          "Dark",
        ],
        extras: {
          font: "roboto-font",
        },
        components: {
          defaults: {
            QBtn: {
              unelevated: true,
            },
          },
        },
      },
    ],
  ],
  ssr: true,
});
