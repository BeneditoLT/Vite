import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState('')
  useEffect(() => {
    console.log('renderiza sempre')

  })

  useEffect(() => {
    console.log('Renderiza uma vez')

  },[])

  useEffect(() => {
    console.log('renderiza quando um ponto expecifico é auterado')

  },[count])

  useEffect(() => {

  const timer =  setTimeout(() => {
      console.log(`O count foi executado ${'count'} `)

    },1000)

    return() => {
      clearTimeout(timer)
    }

  },[count])

   useEffect(() =>{
    fetch('https://reqres.in/api/users/')
      .then((res) => res.json())
      .then((data) =>setData(data.data[0].first_name))
      
    
   },[])

   console.log(data)

   
  return (
    <>
      <div className='App'>
        <h1>Teste com api</h1> 
        <div className='card'>
          <p>Foi renderisado </p>
          <button onClick={() => setCount((count) => count + 1)}>Render</button>
        </div>
       
      </div>
    
    </>
  )
}

export default App
