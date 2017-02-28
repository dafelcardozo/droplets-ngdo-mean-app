const webpack = require("webpack");
const path = require("path");

module.exports = {
 entry: [
   path.resolve('./client/dev/bower_components/ol3/ol.js'),
 path.resolve('./client/dev/index.js')
],

 output: {
   filename: 'bundle.js',
   path: 'client/dist/'
 },
 target: 'node',
 module: {
  loaders: [{
    test: /\.ts(x?)$/,
    exclude: /node_modules|server/,
    loader: 'babel-loader?presets[]=es2015!ts-loader'
  }, {
    test: /\.js$/,
    exclude: /node_modules|server/,
    loader: 'babel-loader',
    query: {
      presets: [ 'es2015']
    }
  }]
},
 // module: {
 //   rules: [
 //     /*
 //     {
 //      test:  /\.tsx$/,
 //       loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
 //      include:  /node_modules/,
 //      exclude:/server/
 //    },
 //    */
 //          {
 //            test: /\.jsx?$/,
 //            loader: 'babel-loader',
 //            exclude: /node_modules|lib/,
 //          },
 //           {
 //            test:  /\.ts(x?)$/,
 //            loaders: 'ts-loader!babel-loader',
 //
 //            include:  /node_modules/,
 //            exclude:/server/
 //            //[ /node_modules/, 'server/*', 'server/*.*', 'server/*/*', 'tests/*', '/node_modules/*', 'node_modules/*', '\\node_modules\\*'],
 //          },
 //          {
 //            test: /\.js$/,
 //            exclude: /(node_modules|bower_components)/,
 //            loaders: 'babel-loader',
 //            query: {
 //              presets: ['es2015']
 //            }
 //          }
 //        ]
 //
 //  },
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
 node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    },

};
