'use strict';

var fs = require('fs');
var path = require('path');

var data = {
  modules: process.versions.modules,
  arch: process.arch,
  version: process.version
};

fs.writeFileSync(path.join(__dirname, 'build-time-info.json'), JSON.stringify(data));
