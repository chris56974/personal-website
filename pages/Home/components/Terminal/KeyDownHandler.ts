import type { KeyboardEvent } from "react"

export function keyDownEventHandler(event: KeyboardEvent) {
  if (event.key === "Enter") {
    console.log("Enter pressed")
  }

  if (event.ctrlKey && event.key === "L") {
    console.log("Ctrl + L pressed")
  }

  if (event.ctrlKey && event.key === "U") {
    console.log("Ctrl + U pressed")
  }
}