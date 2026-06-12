import jest from '@aboutbits/eslint-config/configs/jest'
import ts from '@aboutbits/eslint-config/configs/ts'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  ts,
  jest,
  {
    ignores: [
      'node_modules',
      'it.js',
      'it.d.ts',
      'de.js',
      'de.d.ts',
      'en.js',
      'en.d.ts',
      'ru.js',
      'ru.d.ts',
    ],
  },
])
