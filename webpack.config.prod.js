const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  // HtmlWebpackPlugin is in webpack.common.js; merge concatenates plugins[].
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'css', to: 'css' },
        { from: 'nodes', to: 'nodes' },
        { from: 'tiles', to: 'tiles' },
        { from: 'img', to: 'img' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: 'logo.png', to: 'logo.png' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
      ],
    }),
  ],
});
