import React,{useEffect,useState} from 'react';

import './App.css';


function App() {
  const [list,setList]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{return res.json()}).then((data)=>{setList(data)})
  })
  return (
    <div className="App">
      {
        list.map((user)=>{
          return(
            <div>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
