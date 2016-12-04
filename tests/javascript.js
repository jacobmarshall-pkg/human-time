#!/usr/bin/env node

var assert = require('assert');

var human = require('../');

var rel;

rel = human(new Date());
assert.equal(rel, 'just now');

rel = human(new Date(), false);
assert.equal(rel, 'now');

rel = human(new Date(Date.now() - 6000));
assert.equal(rel, '6 seconds ago');

rel = human(new Date(Date.now() - 6000), false);
assert.equal(rel, '6 seconds');

rel = human(new Date(Date.now() + 6000));
assert.equal(rel, '6 seconds from now');

rel = human(new Date(Date.now() + 3000), false);
assert.equal(rel, '3 seconds');
