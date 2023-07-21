import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1)
  };
  const handleClick2 = () => {
    setCounter(counter - 1)
  };

  return (
    <div className='count'>
      <h1 className='tittle'>Number Counter</h1>
      {counter}
      <div className='buttons'>
      <button className='add' onClick={handleClick1}>Increment</button>
      <button className='remove' onClick={handleClick2}>Remove</button>
      </div>
    </div>

  )
}

export default App
