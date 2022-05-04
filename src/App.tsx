import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  function setIncrement(){
    setCount(count + 1)
  }
  function setDecrement(){
    setCount(count - 1)
  }

  return (
    <div className="App">
      {count}
      <button onClick={setIncrement}>+</button>
      <button onClick={setDecrement}>-</button>
    </div>
  )
}

export default App
