import { fileURLToPath } from 'node:url'
import { config } from 'dotenv'

const nodeEnviroment = process.env.NODE_ENV // 'development' or 'production'
const productionOnly = nodeEnviroment === 'production'
config({ path: `.env.${nodeEnviroment}` })

export default defineNuxtConfig({

  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'vuetify-nuxt-module',
    '@nuxt/image',
    'nuxt-lodash',
  ],

  ssr: true,

  vuetify: {
    moduleOptions: {
      styles: {
        // Causes problems, breaks the UI, for some reason instead of customizing the vuetify theme,
        // it messses up the the UI, breaking styles.
        configFile: 'assets/scss/settings.scss',
      },
    },
  },

  css: [
    'assets/css/progress-bar.css',
  ],

  nitro: {
    static: productionOnly,
    prerender: {
      crawlLinks: false,
    },

    // Vercel deployment region set to Sweden.
    vercel: {
      regions: ['arn1'],
    },

  },

  routeRules: {
    // SSG Render the home page.
    '/': { prerender: true },
  },

  unocss: {
    icons: true,
  },

  lodash: {
    // naming colision with vuetify
    // removes the console warning about naming conflicts.
    exclude: ['defaults'],
  },

  image: {
    quality: 30,
  },

  colorMode: {
    preference: 'light',
    storageKey: 'color-scheme',
    classPrefix: '',
    classSuffix: '',
  },

  imports: {
    injectAtEnd: true,
    presets: [
      {
        from: 'vuetify',
        imports: ['useDisplay', 'useTheme'],
      },

    ],
  },

  components:
  [{
    path: '@/components',
    pathPrefix: false,
  }],

  vite: {

    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },

    optimizeDeps: {
      // pre-bundle 'yup' and avoid app reload after optimized.
      exclude: ['vuetify'],
      entries: [
        './**/*.vue',
      ],
    },

    define: {
      'process.env.DEBUG': false,
    },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
      },
    },

  },

  // ℹ️ Disable source maps until this is resolved: https://github.com/vuetifyjs/vuetify-loader/issues/290
  sourcemap: {
    server: false,
    client: false,
  },

  /* For Nuxt 3.9.0+ */
  // Needed when customizing vuetfiy's scss via configFile module.
  features: {
    inlineStyles: false,
  },

  experimental: {
    typedPages: true,
  },

  devtools: { enabled: false },

})
