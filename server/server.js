var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

var path = require('path');
app.use(loopback.static(path.resolve(__dirname, '../client')));



// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname);

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};



// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}