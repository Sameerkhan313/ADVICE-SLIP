import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { useState } from 'react'


function App() {
  const[adiveShow , setadiveShow] = useState("SPECIAL QUOTE FOR YOU")
  const [themeChanger, setthemeChanger] = useState(false)
  const [counter, setCounter] = useState(0)
  const apiCall = async ()=>{
    const api = await fetch("https://api.adviceslip.com/advice")
    const resjson = await api.json()
    console.log(resjson);
    // console.log(slip : {resjson});
    const {slip:{advice},}= resjson
    console.log(advice);
    setadiveShow(advice.toUpperCase())
    setthemeChanger(!themeChanger)
    setCounter(counter + 1) 
  }

  return (
    <div style={{
      backgroundColor:themeChanger? "White" : "Purple",
      color: themeChanger? "Purple": "White",
      width:'100vw', height:"100vh", display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"
    }}>
      <h1>{adiveShow}</h1>
      <button style={{
        borderRadius:"10px",padding:"7px", fontSize:"30px", fontWeight:"bold",
        backgroundColor: themeChanger? "Purple" : "white",
        color: themeChanger? "White": "Purple",
      }} onClick={apiCall}>Click Me</button>
      <h3>You Have Read {counter} Time</h3>
    </div>
  );
}

export default App;
