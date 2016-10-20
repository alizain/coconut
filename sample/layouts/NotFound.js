import React from "react"
import { Registry } from "@alizain/coconut"

function NotFound() {
  return (
    <h1>Oops, not found!</h1>
  )
}

Registry.set("NotFound", NotFound)
