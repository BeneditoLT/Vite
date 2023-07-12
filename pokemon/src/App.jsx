
import './App.css'

import axiosInstance from './helper/axios-instace'
import useAxios from './hook/use-axios'


function App() {
  const [pokemon, loading, error] = useAxios({
    axiosInstance: axiosInstance,
    method: 'get',
    url: 'pokemon',
    othesConfig: {},

  })



  

  return (
    <>
      <div>
        <h1>Pokemon</h1>
        <div>
          {pokemon?.results?.map((pokemon) => (
            <div> {pokemon.name}</div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
