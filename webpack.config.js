const path = require('path');

module.exports = {
    entry: {
      'chat.web-component': './src/components/chat/chat.web-component.ts',
      'test.web-component': './src/components/test/test.web-component.ts'
    },
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      modules: [path.resolve(__dirname, 'node_modules')],
      extensions: ['.ts'],
      alias: {
        react: 'preact/compat', 
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      }
    },
    plugins: []
}
