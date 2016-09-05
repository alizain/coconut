import Promise from "bluebird"
import { inspect } from "util"

import initFolders from "./initFolders"
import parseData from "./parseData"
import mergeByName from "./mergeByName"
import mergeIndex from "./mergeIndex"
import getRefs from "./getRefs"
import inheritProxy from "./inheritProxy"
import catalyzer from "./catalyzer"
import parsers from "./parsers"

// Automtically handled when using bluebird promises
// Promise.onPossiblyUnhandledRejection((error) => {
//   throw error
// })

let start = Date.now()

initFolders({ root: "./sample/data" })()
  .then(parseData(parsers))
  .then(mergeByName())
  .then(mergeIndex())
  .then(inheritProxy())
  .then(getRefs())
  .then(catalyzer())
  // .then((tree) => { console.log(inspect(tree, { depth: null })) })

let end = Date.now()

console.log(start)
console.log(end)
