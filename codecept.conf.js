/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://swapi.dev/api'
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    }
  },
  name: 'automacao-codeceptjs-api'
}