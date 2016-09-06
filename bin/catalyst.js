#!/usr/bin/env node
"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var loadConfig = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(file) {
    var config;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fs.readFileAsync(file, { encoding: "utf8" });

          case 2:
            config = _context.sent;
            return _context.abrupt("return", JSON.parse(config));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function loadConfig(_x) {
    return _ref.apply(this, arguments);
  };
}();

var run = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var root, config;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            root = process.cwd();
            _context2.next = 3;
            return loadConfig(_path2.default.join(root, "catalyst.json"));

          case 3:
            config = _context2.sent;

            console.log(config);
            return _context2.abrupt("return", (0, _once2.default)(config));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function run() {
    return _ref2.apply(this, arguments);
  };
}();

require("babel-register");

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _once = require("../lib/once");

var _once2 = _interopRequireDefault(_once);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = _bluebird2.default.promisifyAll(require("fs"));

_bluebird2.default.onPossiblyUnhandledRejection(function (error) {
  throw error;
});

run().then(function () {
  console.log("Done");
}).catch(function (err) {
  throw err;
});