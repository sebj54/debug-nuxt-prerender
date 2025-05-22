import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },

    modules: [
        '@formkit/nuxt',
    ],

    vite: {
        plugins: [
            svgLoader({
                defaultImport: 'raw',
            }),
        ],
    },
})
