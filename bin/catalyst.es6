#!/usr/bin/env node

import "regenerator-runtime/runtime"
import Promise from "bluebird"
import path from "path"
import once from "../lib/once"
import { fromFile } from "../lib/config"

Promise.onPossiblyUnhandledRejection((error) => {
  throw error
})

async function run() {
  try {
    let config = await fromFile(process.cwd())
    return once(config)
  } catch (e) {
    console.error(e)
  }
}

run().then(() => { console.log("Done") }).catch((err) => { throw err })
