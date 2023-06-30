




import axios from "axios";
import { useState, useEffect } from "react";
import './App.css'
function App() {
 


  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
      axios.get("https://reqres.in/api/users/")
        .then((res) => setRepositories(res.data.data))
        .catch((error) => console.log(error));
    }, []); // Executar somente uma vez durante a montagem inicial do componente
  
    console.log(repositories);
  
    return (
      <>
        <div className="flex">
          <div className="display">
          {repositories.map((user, id) => (
            <div key={id} className="card">
                 <p>
                  <strong>{user.first_name}</strong>
                 </p>
                 <p>{user.email}</p>
                 <img key={user.avatar} src={user.avatar}  />
          </div>

          
              
          ))}
          </div>
          </div>
        
      </>
    );

}

export default App;