import React, { useState } from 'react'
import "./App.css"
function App() {

  const [input, setInput] = useState(0)

  function handleChange(event) {
    setInput(event.target.value)
  }
  function addButton(event) {
    setResult(Number(result) + Number(input))
  }
  function subButton() {
    setResult(Number(result) - Number(input))
  }

  let [result, setResult] = useState(0)
  return (
    <div className="container">
      <h2 className="h2" >ADD & SUBTRACT</h2>

      <p><input class="second" onChange={handleChange} type="number" name="" id="" placeholder='0' /></p>

      <div className="button">

        <button onClick={addButton}>Additon</button>

        <button onClick={subButton}>Substract</button>

      </div>

      <p class="finalresult" >
        {result}
      </p>



    </div >
  )
}

export default App
