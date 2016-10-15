import React from "react"
import { Registry } from "@alizain/coconut"

function Default({ node }) {
  return (
    <h1>{node.title}</h1>
  )
}

Registry.setDefault(Default)
