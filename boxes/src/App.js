import React from "react"
import boxes from "./boxes.js"
import Box from "./Box.js"

export default function App() {
  const [squares, setSquares] = React.useState(boxes)


  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square
      })
    })
  }

  const squareElements = squares.map(square => (
    <Box
      key={square.id}
      on={square.on}
      toggle={() => toggle(square.id)}
    />
  ))

  return (
    <main>
      {squareElements}
      <p className="description">Click on any box to change the state!</p>
    </main >
  )
}