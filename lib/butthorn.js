'use strict';

// import utility functions //
const utils = require('./utils');

// import default config //
const defaults = require('./defaults');

// import lexicon //
const lexicon = require('./lexicon');

function Butthorn(length) {
  this.length = length;
}

Butthorn.prototype.lexicon = function() {
  return lexicon;
}

Butthorn.prototype.defaults = defaults;

module.exports = Butthorn;