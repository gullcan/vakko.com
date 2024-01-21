module.exports = {
    configureWebpack: {
       module: {
         rules: [
           {
             test: /\.vue$/,
             loader: 'vue-loader',
           },
           {
             test: /\.tsx?$/,
             loader: 'ts-loader',
             options: {
               appendTsSuffixTo: [/\.vue$/],
             },
             exclude: /node_modules/,
           },
         ],
       },
    },
   };