/*
 * Require overrides
 *
 * Override require to enable including markdown as compiled HTML
 */

import fs from 'fs';
import path from 'path';
import Module from 'module';
import marked from 'marked';

var originalRequire = Module.prototype.require;

Module.prototype.require = function (name) {
  if (/\.md$/.test(name)) {
    var filePath = this.id.split('/').slice(0, -1).join('/'),
      mdown = fs.readFileSync(path.resolve(filePath, name), 'utf8');

    return marked(mdown);
  }

  return originalRequire.apply(this, arguments);
};