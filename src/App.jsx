import './App.css'
import Example from './components/Toggle'
import UiDeco from './components/UiDeco'
import Userinput from './components/Userinput'
import { DarkModeProvider } from './components/DarkModeContext'
import Info from './components/Info'
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  return (
    <DarkModeProvider> 
      <div>
        <UiDeco />
        <Example />
        <Userinput input={input} setInput={setInput} />
        <Info setInput={setInput} />
      </div>
    </DarkModeProvider>
  )
}

export default App
