const path = require('path')

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '~pages': path.resolve(__dirname, './src/pages'),
      '~components': path.resolve(__dirname, './src/components'),
      '~graphql': path.resolve(__dirname, './src/services/graphql')
    }
  }
  return config
}
