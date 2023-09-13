// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Cards from './Cards/Cards';

function App() {

  const[users, setUsers] = useState([]);
  const[loader,setLoader] = useState(false);

    

  const getCards =  async () => {
    const api = "https://reqres.in/api/users?page=1";
    setLoader(true);
    alert("Fetching the Cards");
    setTimeout(async () => {
      let response = await fetch(api);
      const json_response = await response.json();
      setUsers(json_response.data);
      setLoader(false);
      console.log(users);
    }, 2000)
  }
  return (
    <>
    
    <Navbar toggle={getCards}/>
    {!loader && <Cards user = {users}/>}
    </>
  );
}

export default App;
