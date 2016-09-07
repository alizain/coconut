#!/usr/bin/env node
"use strict";

require("regenerator-runtime/runtime");

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _once = require("../lib/once");

var _once2 = _interopRequireDefault(_once);

var _config = require("../lib/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bluebird2.default.onPossiblyUnhandledRejection(function (error) {
  throw error;
});

function run() {
  var config;
  return regeneratorRuntime.async(function run$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _config.fromFile)(process.cwd()));

        case 3:
          config = _context.sent;
          return _context.abrupt("return", (0, _once2.default)(config));

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);

          console.error(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, this, [[0, 7]]);
}

run().then(function () {
  console.log("Done");
}).catch(function (err) {
  throw err;
});