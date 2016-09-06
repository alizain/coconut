import initFolders from "./trees/initFolders"
import parseData from "./trees/parseData"
import mergeByName from "./trees/mergeByName"
import mergeIndex from "./trees/mergeIndex"
import getRefs from "./trees/getRefs"
import inheritFrom from "./trees/inheritFrom"
import catalyzer from "./trees/catalyzer"
import parsers from "./parsers"

export default function(config) {
  return initFolders(config.data)()
    .then(parseData(parsers))
    .then(mergeByName())
    .then(mergeIndex())
    .then(inheritFrom(config.inheritFrom))
    .then(getRefs())
    .then(catalyzer())
}
