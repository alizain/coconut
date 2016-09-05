import React from "react"
import { Registry } from "catalyst"

function Book({ title }) {
  return (
    <h1>{title}</h1>
  )
}

Registry.add("Book", Book)
