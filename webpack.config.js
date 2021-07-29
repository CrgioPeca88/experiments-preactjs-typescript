const path = require('path')
const fs = require('fs')

let mainPathCustomElement = './src/components/chat/'
let arrayCE = []
let entry = {}
const wcParam = process.env.WC || null

const fillEntry = (wc, mainPathCustomElement) => {
  entry = {
    ...entry,
    [wc]: `${mainPathCustomElement}${wc}.ts`
  };
}

module.exports = () => {
  if (wcParam) {
    arrayCE = wcParam.split(',')
    arrayCE.forEach((wc) => {
      fillEntry(wc, mainPathCustomElement)
    })
  } else {
    fs.readdirSync(mainPathCustomElement).forEach((file) => {
      if (!file.includes('.web-component.ts')) return
      const wc = file.split('.ts')[0]
      fillEntry(wc, mainPathCustomElement)
    })
  }

  return {
    entry,
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist')
    },
    performance: {
      hints: false
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.html$/,
          loader: ['html-loader']
        },
        {
          test: /\.css$/,
          loader: ['css-loader']
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      modules: [path.resolve(__dirname, 'node_modules')],
      extensions: ['.js', '.ts', '.tsx'],
      alias: {
        react: 'preact/compat', 
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      }
    },
    plugins: []
  }
}
