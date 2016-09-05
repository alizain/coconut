import Promise from "bluebird"
import { inspect } from "util"

import initFolders from "./trees/initFolders"
import parseData from "./trees/parseData"
import mergeByName from "./trees/mergeByName"
import mergeIndex from "./trees/mergeIndex"
import getRefs from "./trees/getRefs"
import inheritProxy from "./trees/inheritProxy"
import catalyzer from "./trees/catalyzer"
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
