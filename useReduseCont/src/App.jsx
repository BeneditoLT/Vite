import './App.css'
import { useState} from 'react'


function contApp() {
  const [count, setCount] = useState(0)
  const [showText, setShowText] = useState(true)




const handleClick = () => {
  setCount  (count + 1)
  setShowText  (!showText)

}

return(
  <div className='App'>
    <h1>Eletrokits</h1>
    <h3>{count}</h3>
    <button onClick={handleClick}> Clique </button>
    {showText && <p>Eletrokits</p>}

  </div>
)
}

export default contApp
