import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let[counter,setCounter] = useState(15)
  

//  let counter = 15
const addvalue= ()=>{
  // console.log("clicked", counter);
  // counter = counter + 1
  setCounter(counter+1)
}
const removevalue=()=>{
  setCounter(counter-1)
}
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addvalue}>Add value{counter}</button>
      <br />
      <button 
      onClick={removevalue}>decrease value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
