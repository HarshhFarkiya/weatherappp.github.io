import './App.css';
import React,{useEffect, useState} from 'react';
import Navbar from './components/navbar';
import ShowWeather from './components/showWeather';
import Show from './components/Show';
import Video from './components/videos/clear.mp4'
import Alert from './components/alert';
import background from './components/assets/background.jpg'
function App() {
  const [mode,setMode]=useState("light");
  const [city, setCity]= useState('');
  const [climate, setClimatee]= useState("");
  const [data, setWdata]=useState('');
  const [message, setMessage]=useState('');
  const [back, setBack]=useState(background);
  const [icon, setIcon]=useState('');
  const[alertmsg, setAlert]=useState(null);
const msgSet = (msg, state)=>{
  setAlert({msg : msg,
   state : state 
  });
  setTimeout(() => {
    setAlert(null);
  }, 3000);
}
  const set =(ele,dataa, cli,m,y,i,b)=>
  {
    setCity(ele);
    setWdata(dataa);
    setClimatee(cli);
    msgSet(m,y);
    setIcon(i);
    setBack(b);
  }
  console.log(climate);
  return (
    <>
    <div>
    <Navbar title="Weather App" mode={mode}/>
    </div>
    <img src={back} style={{position:'fixed', width:"100%"}}></img>
    <Alert msg={alertmsg} style={{position:'fixed'}}/>
    <ShowWeather fun={set} style={{width:'100%'}} />
    <div style={{position: 'absolute', visibility:city===''?'hidden':"visible", marginLeft:"35%", marginRight:'25%'}}>
      <Show data={data} message={message} city={city} climate={climate} src={icon}/>
   </div>
      </>
  );
  }
export default App;
