import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users').then(res=>res.json()).then(setUsers)
  }, [])

  return (
    <div>
      {
        users.map(item=><div key={item.id}>
          <p>{item.id}</p>
        </div>)
      }
    </div>
  );
}

export default App;
