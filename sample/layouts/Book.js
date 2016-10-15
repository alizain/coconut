import React from "react"
import { Registry } from "@alizain/coconut"

function Book({ node }) {
  return (
    <h1>{node.title}</h1>
  )
}

Registry.set("book", Book)
