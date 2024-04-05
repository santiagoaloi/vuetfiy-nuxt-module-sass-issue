![Vuetify](https://img.shields.io/static/v1?style=flat&message=Vuetify&color=373e47&logo=Vuetify&logoColor=8DD6F9&label=)
![Tailwind CSS](https://img.shields.io/static/v1?style=flat&message=Tailwind+CSS&color=373e47&logo=Tailwind+CSS&logoColor=06B6D4&label=)
![Vue.js](https://img.shields.io/static/v1?style=flat&message=Vue.js&color=373e47&logo=Vue.js&logoColor=4FC08D&label=)
![Vite](https://img.shields.io/static/v1?style=flat&message=Vite&color=373e47&logo=Vite&logoColor=967cff&label=)
![Vercel](https://img.shields.io/static/v1?style=flat&message=Nuxt&color=373e47&logo=Vercel&logoColor=FFFFFF&label=)

![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)

> [!IMPORTANT]
> This repo is to reproduce the issue I'm experiencing with configFile: 'assets/scss/settings.scss',

```js
  vuetify: {
    moduleOptions: {
      styles: {
    // This section has been problematic as it inadvertently disrupts the UI rather than customizing the Vuetify theme as intended.
    // By commenting out the settings below, the UI functions as expected without any style disruptions. However,
    // this means sacrificing /the ability to customize using SASS.
        configFile: 'assets/scss/settings.scss',
      },
    },
  },
```

```scss
@forward 'vuetify/settings' with (
  // Buttons
  $button-disabled-opacity: 0.5,
  $button-disabled-overlay: 0.1,
  $button-text-transform: '',
  $button-text-letter-spacing: 0px,
);
```

## CLI commands

```bash
# clone
git clone https://github.com/santiagoaloi/vuetfiy-nuxt-module-sass-issue.git

# enter the project directory
cd vuetfiy-nuxt-module-sass-issue

# install dependencies
pnpm i

# start the dev web server
pnpm dev

# Build and preview on local enviroment
pnpm build-preview

```

## Linting and formatting

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)
