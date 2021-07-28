const RunAfterBuildPlugin = require('webpack-run-after-build-plugin')

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

  console.log('---------------------------------\n')
  console.log('ENTRY -> \n', entry)
  console.log('---------------------------------\n')

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
    plugins: [
      new RunAfterBuildPlugin(() => {
        console.log(
          `---------------------------------\nHTML CREATED\n----------------------------------`
        )

        fs.writeFile(
          path.resolve(__dirname, `${folderDist}/html.html`),
          `

        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
          </head>
          <body>
            ${[...Object.keys(wcRegisterName).map((key) => `<${key} />`)]}
            ${[
              ...Object.keys(wcRegisterName).map(
                (key) => `${wcRegisterName[key]}`
              )
            ]}
          </body>
        </html>


        `,
          (err) => {
            console.log(err)
          }
        )

        Object.keys(wcRegisterName).map((key) => {
          console.log('KEY', key)

          fs.writeFile(
            path.resolve(__dirname, `${folderDist}/${key}.html`),
            `
              <div>
                <${key} />
                ${wcRegisterName[key].replace(/'/g, '')}
              </div>
          `,
            (err) => {
              console.log(err)
            }
          )
        })
      })
    ]
  }
}
