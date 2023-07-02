
import './App.css'
import { useEffect, useState } from 'react'
import axiosInstance from './helper/axios-instace'


function App() {
  const [pokemon, setPokemon] = useState([])


  useEffect( () => {
   axiosInstance
    .get('pokemon')
    .then((res) => {
        console.log(res.data.results)
        setPokemon(res.data.results)
      })
    .catch((err) => console.log(err))



  }, [])
 

  

  return (
    <>
      <div>
        <h1>Pokemon</h1>
        <div>
          {pokemon.map( (pokemon) => ( <div> {pokemon.name}</div> ))}
        </div>

      </div>
    </>
  )
}

export default App
