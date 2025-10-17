import type { Config, ConfigOptions } from 'karma'

export default function(config: Config) {
  const options: ConfigOptions = {
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
      tsconfig: 'tsconfig.app.json',
      plugins: [],
      define: {
        'process.env.NODE_ENV': '"test"'
      },
      loader: {
        '.ts': 'ts',
        '.tsx': 'tsx',
      }
    },
    reporters: ['progress'],
    browsers: ['ChromeHeadless'],
    singleRun: false,
    autoWatch: true,
    client: {
      jasmine: {
        random: false
      },
      clearContext: false
    }
  }

  config.set(options)
}
