import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'src/**/*.test.ts', watched: false },
      { pattern: 'src/**/*.test.tsx', watched: false },
    ],
    preprocessors: {
      'src/**/*.test.ts': ['esbuild'],
      'src/**/*.test.tsx': ['esbuild'],
    },
    esbuild: {
      target: 'es2020',
      jsx: 'automatic',
      sourcemap: 'inline',
      tsconfig: resolve(__dirname, 'tsconfig.app.json'),
      loader: { '.ts': 'ts', '.tsx': 'tsx' },
      define: { 'process.env.NODE_ENV': '"test"' }
    },
    reporters: ['progress'],
    browsers: ['ChromeHeadless'],
    singleRun: false,
    autoWatch: true,
    client: {
      jasmine: { random: false },
      clearContext: false,
    },
  })
}
