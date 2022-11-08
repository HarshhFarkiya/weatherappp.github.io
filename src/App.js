import './App.css';
import React,{useEffect, useState} from 'react';
import Navbar from './components/navbar';
import ShowWeather from './components/showWeather';
import Show from './components/Show';
import Video from './components/videos/clear.mp4'
import Alert from './components/alert';
function App() {
  const [mode,setMode]=useState("light");
  const [city, setCity]= useState('');
  const [climate, setClimatee]= useState("");
  const [data, setWdata]=useState('');
  const [message, setMessage]=useState('');
  const [v, setV]=useState(Video);
  const[alertmsg, setAlert]=useState(null);
const msgSet = (msg, state)=>{
  setAlert({msg : msg,
   state : state 
  });
  setTimeout(() => {
    setAlert(null);
  }, 3000);
}
  const set =(ele,dataa, cli,ele2,m,y)=>
  {
    setCity(ele);
    setWdata(dataa);
    setClimatee(cli);
    setV(ele2);
    msgSet(m,y);
  }
  return (
    <>
    <div>
    <Navbar title="Weather App" mode={mode}/>
    </div>
    <video src={v} loop autoPlay={true} style={{position:'fixed'}} type="video/mp4"/>
    <Alert msg={alertmsg} style={{position:'fixed'}}/>
    <ShowWeather fun={set} style={{width:'100%'}} />
    <div style={{position: 'absolute', marginLeft:'25%', marginRight:'0px', width:'50%', padding:'15px', textAlign:'center', border:'solid 2px grey', borderRadius:'10px', visibility:city===''?'hidden':"visible"}}>
      <Show data={data} message={message}/>
   </div>
   {console.log(data)}
      </>
  );
  }
export default App;
