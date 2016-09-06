#!/usr/bin/env node

import "babel-register"
import Promise from "bluebird"
import path from "path"
import once from "../lib/once"

const fs = Promise.promisifyAll(require("fs"))

Promise.onPossiblyUnhandledRejection((error) => {
  throw error
})

async function loadConfig(file) {
  let config = await fs.readFileAsync(file, { encoding: "utf8" })
  return JSON.parse(config)
}

async function run() {
  let root = process.cwd()
  let config = await loadConfig(path.join(root, "catalyst.json"))
  console.log(config)
  return once(config)
}

run().then(() => { console.log("Done") }).catch((err) => { throw err })
