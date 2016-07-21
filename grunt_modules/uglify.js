module.exports = function () {
  'use strict';

  var _ = require('underscore');
  var config = require('./config/config.js');

  var uglify = {
  };

  var distJsPath = 'generated/dist/js/';

  config.eachModule(function (module, moduleName) {
    uglify[moduleName] = {
      options: {
        mangle: false,
        compress: false,
        enclose: {
          angular: 'angular'
        },
        beautify: {
          width: 120,
          beautify: true,
          indent_level: 2
        },
        banner: '// Banner \n'
      },
      files: {}
    };

    uglify[moduleName].files[module.dest] = [module.dest];

    uglify[moduleName + 'Min'] = {
      options: {
        mangle: true,
        sourceMap: true,
        banner: '// BannerMin \n'
      },
      files: {}
    };

    uglify[moduleName + 'Min'].files[module.minDest] = [module.dest];
  });

  return uglify;
};
