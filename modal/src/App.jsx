import { useState } from 'react'
import Modal from './components/modal'
import './App.css'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setOpen(true)}>Abrir o Modal</button>
      <Modal isOpen={open} setModal={()=> setOpen(!open)}/>

      
    </div>
  )
}

export default App
