const Server = require('karma').Server;
const cfg = require('karma').config;
const path = require('path');
const karmaConfig = cfg.parseConfig(path.resolve('./karma.conf.js'));
const server = new Server(karmaConfig, function(exitCode) {
  if (exitCode === 1) {
    console.log('Karma exited with expected error code 1');
    process.exit(0);
  } else {
    console.log('Karma exited exit with code ' + exitCode + '. Expected code 1');
    process.exit(1);
  }
})
server.start();
