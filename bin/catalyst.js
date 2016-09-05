#!/usr/bin/env node

import Promise from "bluebird"
import path from "path"
import process from "process"

const fs = Promise.promisifyAll(require("fs"))

console.log(process.cwd())
