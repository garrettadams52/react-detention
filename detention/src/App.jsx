import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Output from "./Output.jsx"

function App() {
  let str = "I will never mutate state or props directly"
 
  return (
    <div className="App">
        <Output myValue = {str}/>
    </div>
  )
}

export default App
