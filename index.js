'use strict';

var fs = require('fs');
var path = require('path');

var buildTimeInfoText = fs.readFileSync(path.join(__dirname, 'build-time-info.json'));
var buildTimeInfo = JSON.parse(buildTimeInfoText);

if (buildTimeInfo.modules !== process.versions.modules || process.arch !== buildTimeInfo.arch) {
  console.error('nodejs version used at npm install time does not match current version.');
  console.error('Please rerun `npm install` using node ' + process.version + ' (' + process.arch+ ') or rerun this command using node ' + buildTimeInfo.version + ' (' + buildTimeInfo.arch + ')');

  process.exit(1);
}
