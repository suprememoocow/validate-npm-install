# validate-npm-install

Fail fast if you're using the wrong version of node with your node_modules

# Why?

If you're using `nvm` or another node version manager, or run multiple versions of nodejs on your server, it's easy to run `npm install` with a different version of nodejs than the version being used at run time.

Depending on the dependencies you're using, your script may fail, or it may not work correctly.

# How?

At install time, the nodejs module version are architecture are saved. These are checked against the current versions at runtime.

Note that since it uses `process.versions.modules` (the modules version), not `process.version` (the nodejs version), modules compiled with a compatible but different version of nodejs will not fail (by design).

# Usage
```
npm i validation-npm-install --save

# At the start of your script
require('validate-npm-install');
```
