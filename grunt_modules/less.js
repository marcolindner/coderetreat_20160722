module.exports = {
  development: {
    options: {
      paths: ['assets/css']
    },
    files: {
      'generated/dist/styles/main.css': 'src/assets/styles/main.less'
    }
  },
  production: {
    options: {
      paths: ['assets/css'],
      plugins: [
        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
        new (require('less-plugin-clean-css'))({advanced: true})
      ],
    },
    files: {
      'generated/dist/styles/result.css': 'src/assets/styles/styles.less'
    }
  }
};