import { resolve } from "path"

export default {
  data: {
    description: "the folder that contains all content/data",
    defaultValue: "./data",
    transform: val => resolve(val)
  },
  layouts: {
    description: "the folder that contains all React layout components",
    defaultValue: "./layouts",
    transform: val => resolve(val)
  },
  dist: {
    description: "the folder to output all compiled HTML",
    defaultValue: "./dist",
    transform: val => resolve(val)
  },
  inheritFrom: {
    description: "file containting shared props for all sibling nodes",
    defaultValue: "common"
  }
}
