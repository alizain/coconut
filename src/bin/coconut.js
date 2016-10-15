#!/usr/bin/env node

import Promise from "bluebird"
import { once } from "../once"
import { fromFile } from "../config"

Promise.onPossiblyUnhandledRejection((error) => {
  throw error
})

function run() {
  return fromFile(process.cwd())
    .then((config) => {
      return once(config)
    })
}

run().then(() => { console.log("Done") }).catch((err) => { throw err })
