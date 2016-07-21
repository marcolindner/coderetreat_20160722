module.exports = function () {

  var config = require('./config/config.js');

  var ngDocs = {
    options: {
      dest: 'generated/docs',
      title: config.projectName,
      scripts: [
        '//localhost:35729/livereload.js',
        'generated/dist/vendor/vendor.js',
        'generated/dist/vendor/docsVendor.js'
      ],
      styles: [
      ],
      editExample: false,
      sourceLink: true
    },
    all: ['src/**/*.js']
  };

return ngDocs;
};
