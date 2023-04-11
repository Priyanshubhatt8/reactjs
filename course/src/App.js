import React,{useState} from 'react';
import About from './About' 
import Contact from './Contact'
import Users from './Users'
import './App.css';

function App() {
  //const[name,setName]=useState("anil")

  return (
    <div>
      <h1> Home page</h1>
    { /*<About namebh={name}/>*/}
    {/*<button onClick={()=>{setName("bhatt")}}>Update props</button>*/}
    // {/* <Contact />*/}
     <Users /> 
    </div>
  )
}

export default App;
