import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    css: false,
  },

  stylistic: {
    quotes: 'single',
  },

  // Don't lint/format these paths.
  ignores: [
    'node_modules',
    'public',
    '**/*.d.ts', // ignore all .d.ts files
    '**/.*', // ignore all files and directories starting with a dot
    '**/*.lock', // ignore all files and directories ending with .lock
  ],

  rules: {
    'node/prefer-global/process': 'off',
  },
})
