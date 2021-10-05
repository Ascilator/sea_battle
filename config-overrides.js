const path = require('path')
const { override, addWebpackAlias, addWebpackResolve, addWebpackPlugin } = require('customize-cra')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
  }),
  addWebpackResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
  addWebpackPlugin(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'node_modules/pdfjs-dist/build/pdf.worker.min.js',
          to: '',
        },
      ],
    })
  )
)
