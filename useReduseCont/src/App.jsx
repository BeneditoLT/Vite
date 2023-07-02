import './App.css'
import { useReducer} from 'react'



const reducer = (state, action) => {
  switch (action.type) {
    case 'IncrementAndShowText':
      return { count: state.count + 1, showText: !state.showText}
    case 'resetValue':
      return {count: 0, showText: true}
    default:
      return " This action does't exist"  
  }

}

function contApp() {
  const [state, dispatch] = useReducer(reducer,{
    count: 0,
    showText: true,

  })

  const { count, showText} = state

  const handleClick = () => {
    dispatch({type: 'IncrementAndShowText'})
  }
//  const [count, setCount] = useState(0)
//  const [showText, setShowText] = useState(true)




//const handleClick = () => {
//  setCount  (count + 1)
//  setShowText  (!showText)



return(
  <div className='App'>
    <h1>Eletrokits</h1>
    <h3>{count}</h3>
    <button onClick={handleClick}> Clique </button>
    <button onClick={() => dispatch({type: 'resetValue'})} > Reset </button>
    {showText && <p>Eletrokits</p>}

  </div>
)

}


export default contApp
