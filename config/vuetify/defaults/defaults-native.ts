export default {
  // Native Vuetify Components

  VMain: {
    // fixes problem with VMain rendering under the appbar on SSR
    style: 'padding-top: 104px;',
    class: 'pb-3',
  },

  VAppBar: {
    flat: true,
    density: 'compact',
    color: 'transparent',
    VBtn: {
      ripple: false,
    },
  },

  VRow: {
    class: 'w-100',
  },

  VToolbar: {
    VBtn: {
      ripple: false,
      color: 'primary-button',
      variant: 'elevated',
      border: true,
    },
  },

  VBtn: {
    ripple: false,
    color: 'primary-button',
    border: false,
  },

  VSheet: {
    style: 'z-index:1!important;',
  },

  VCard: {
    border: true,
    elevation: 0,
    ripple: false,
    class: 'rounded-lg',
  },

  VTextField: {
    hideDetails: false,
    density: 'comfortable',
    variant: 'outlined',
    color: 'field-outline-focus',
    bgColor: 'text-field-background',
    persistentPlaceholder: true,
    rounded: 'lg',
  },

  VCombobox: {
    rounded: 'lg',
    hideDetails: false,
    density: 'comfortable',
    variant: 'outlined',
    color: 'field-outline-focus',
    bgColor: 'text-field-background',
    menuProps: { contentClass: 'autocomplete-list-bg-color', maxHeight: '200' },
    persistentPlaceholder: true,
  },

  VAutocomplete: {
    rounded: 'lg',
    hideDetails: false,
    density: 'comfortable',
    variant: 'outlined',
    color: 'field-outline-focus',
    bgColor: 'text-field-background',
    menuProps: { contentClass: 'autocomplete-list-bg-color', maxHeight: '200' },
    persistentPlaceholder: true,

    VList: {
      density: 'compact',
    },
  },

  VSelect: {
    rounded: 'lg',
    autoSelectFirst: true,
    hideDetails: false,
    density: 'comfortable',
    variant: 'outlined',
    color: 'field-outline-focus',
    bgColor: 'text-field-background',
    menuProps: { contentClass: 'autocomplete-list-bg-color', maxHeight: '200' },
    persistentPlaceholder: true,
  },

  VTextarea: {
    rounded: 'lg',
    density: 'comfortable',
    hideDetails: false,
    variant: 'outlined',
    color: 'field-outline-focus',
    bgColor: 'text-field-background',
    rows: 3,
    persistentPlaceholder: true,

  },

  VImg: { class: 'dark:opacity-90 prevent-select pointer-events-none' },

  VAlert: {
    border: 'start',
    borderColor: 'purple-accent-4',
    elevation: true,
  },

  VCheckbox: {
    hideDetails: true,
  },

  VChip: {
    class: 'border-sm',
  },

  VFooter: {
    color: 'transparent',
  },

}
