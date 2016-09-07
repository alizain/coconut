import React from "react"
import { Registry } from "../../src"

function Book({ node }) {
  return (
    <h1>{node.title}</h1>
  )
}

Registry.add("book", Book)
