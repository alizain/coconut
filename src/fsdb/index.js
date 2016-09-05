import initFolders from "./trees/initFolders"
import parseData from "./trees/parseData"
import mergeByName from "./trees/mergeByName"
import mergeIndex from "./trees/mergeIndex"
import getRefs from "./trees/getRefs"
import inheritProxy from "./trees/inheritProxy"
import catalyzer from "./trees/catalyzer"
import defaultParsers from "./parsers"

export default function(root, usedParsers) {
  return initFolders(root)()
    .then(parseData(usedParsers || defaultParsers))
    .then(mergeByName())
    .then(mergeIndex())
    .then(inheritProxy())
    .then(getRefs())
    .then(catalyzer())
}
