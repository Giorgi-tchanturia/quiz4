import { useState,useEffect, useRef } from 'react'
import './App.css'
import Card from './components/card';
import axios from 'axios'; 

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState( [] );
  const [showCard, setShowCard] = useState(true);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect( () => {

    
    intervalRef.current = setInterval( () => {
      setTime(prev => prev + 1);
    }, 1000)
    return () => clearInterval(intervalRef.current);
  }, [])

  const getUsers = async () => {
    try {
      let response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect( () => {
    getUsers()
  }, []);

  useEffect( () => {
    function handleKeyUp(e) {
      console.log(e.key);
    }
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <>
      <input type="text" ref={inputRef}/>
      <button onClick={ () => console.log(inputRef.current.value)}>Add Item</button>
      <h3>{inputValue}</h3>
     
      {showCard ? <Card /> : null}
      <button onClick={ () => setShowCard(!showCard) }>Show/Hide</button>
     
      <h3>Time: {time}</h3>
      <button onClick={ () => clearInterval(intervalRef.current)}>Stop</button>
     
      <div>
        {users.length ? users.map( (el) => (
          <div key={el.id}>
            <h2>{el.name}</h2>
            <h3>{el.email}</h3>
          </div>
        )) : <h2>Loading Users.... </h2> }
      </div>
    </>
  )
}

export default App;