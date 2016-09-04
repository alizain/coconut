import React from "react"
import Registry from "../../registry"

function Book({ title }) {
  return (
    <h1>{title}</h1>
  )
}

Registry.add("Book", Book)
