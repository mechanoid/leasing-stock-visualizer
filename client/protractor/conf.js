exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub'
  , specs: ['**/*.js']
  , capabilities: {
    browserName: "phantomjs"
  }
}
