let mainPathCustomElement = './src/components/chat/'
let folderDist = 'dist'

const path = require('path')
const fs = require('fs')

let wcRegisterName = {}
let arrayCE = []
let entry = {}

const wcParam = process.env.WC || null

const readFile = (file, mainPathCustomElement) => {
  fs.readFile(`${mainPathCustomElement}${file}.ts`, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    const registerName = data.split('mfTagName')[1].split(`'`)[1]

    wcRegisterName = {
      ...wcRegisterName,
      [`${registerName}`]: `'<script src="http://localhost:8080/${file}.min.js"></script>'`
    }
  })
}

const fillEntry = (wc, mainPathCustomElement) => {
  readFile(wc, mainPathCustomElement)
  return (entry = {
    ...entry,
    [wc]: `${mainPathCustomElement}${wc}.ts`
  })
}

module.exports = (process) => {
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
      path: path.resolve(__dirname, folderDist)
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
