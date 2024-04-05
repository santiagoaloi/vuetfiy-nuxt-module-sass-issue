import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

import {
  defaultsCustom,
  defaultsNative,
  themes,
} from './config/vuetify'

export default defineVuetifyConfiguration({

  icons: {
    defaultSet: 'unocss-mdi',
  },

  theme: {
    defaultTheme: 'light',
    themes,
  },

  defaults: {
    ...defaultsNative,
    ...defaultsCustom,
  },

})
