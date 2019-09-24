'use strict';

const fs = require('fs');
const path =require('path');

module.exports = (bundler) => {
  if (process.env.NODE_ENV === 'production') {
    const { homepage } = require(path.join('..', '..', 'package.json'));

    bundler.on('buildEnd', () => {
      fs.writeFileSync(path.join(bundler.options.outDir, 'CNAME'), (new URL(homepage)).host)
    });
  }
};
