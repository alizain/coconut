#!/usr/bin/env node
"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var run = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var config;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _config.fromFile)(process.cwd());

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
    }, _callee, this, [[0, 7]]);
  }));

  return function run() {
    return _ref.apply(this, arguments);
  };
}();

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

run().then(function () {
  console.log("Done");
}).catch(function (err) {
  throw err;
});