import { defineBuildConfig } from 'unbuild'
import fs from 'fs-extra'

export default defineBuildConfig({

  entries: [
    { builder: 'mkdist', input: './src', pattern: ['**/*.vue'], loaders: ['vue'] },
    { builder: 'mkdist', input: './src', pattern: ['**/*.ts'], format: 'cjs', loaders: ['js'] },
    { builder: 'mkdist', input: './src', pattern: ['**/*.ts'], format: 'esm', loaders: ['js'] },
  ],
  declaration: true,
  clean: true,
  hooks: {
    'build:done': async () => {
      await fs.copy('./src/assets', './dist/assets');
    },
  },
  // externals: [
  //   'vue',
  //   'naive-ui',
  //   'unplugin-vue-components',
  // ],
})
