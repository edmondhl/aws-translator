import './App.css'
import Example from './components/Toggle'
import UiDeco from './components/UiDeco'
import Userinput from './components/Userinput'
import { DarkModeProvider } from './components/DarkModeContext'

function App() {
  return (
    <DarkModeProvider> 
      <div>
        <UiDeco />
        <Example />
        <Userinput />
      </div>
    </DarkModeProvider>
  )
}

export default App
