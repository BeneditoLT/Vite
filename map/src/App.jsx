import './App.css'

const users = [
  {
    name: 'Carlos',
    address: 'Rua X',
    age: 28,
    isAdmin: false,
  },
  {
    name: 'Maria',
    address: 'Rua XX',
    age: 31,
    isAdmin: true,
  },
  {
    name: 'Matheus',
    address: 'Rua XI',
    age: 22,
    isAdmin: false,
  }
]

function App(){
  return(
    <>
    <div>
      {users.map((user, index) => (
        
        <div key={index}> {user.name} </div>     
           
           
           
      ))}
    </div>
    </>
  )

}
export default App