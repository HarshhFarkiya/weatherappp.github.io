import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Video from './videos/clear.mp4'
import Video2 from './videos/rain.mp4'
import Video5 from './videos/haze.mp4'
import Video3 from './videos/sunny.mp4'
import Video4 from './videos/thunderstrom.mp4'
export default function ShowWeather(props)
{
    const [city, setC]=useState('');
    const [climate, setCliamte]=useState('');
    let cityy ='';
    const fetch =()=>
    {
        const url ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=39fda9ce34af56a08e2e09236543536e";
        axios.get(`${url}`)
        .then((response)=>{
          const allData = response.data.main;
          const c=response.data.weather;
          const m=response.data.message;
          //setCliamte(c[0]);
         setCliamte(c[0]['main']);
         let v='';
        if(c[0]['main']==="Haze") {v=Video5};
        if(c[0]['main']==="Smoke"){v=Video5};
        if(c[0]['main']==="Sunny"){v=Video3};
        if(c[0]['main']==="Clouds"){v=Video2};
        if(c[0]['main']==="Thunderstrom"){v=Video4};
        props.fun(city, allData,climate,v,"City Found", "success");
        })
        .catch(
           props.fun('', '','',Video,"City Not Found", "danger"),
           setCliamte('')
        );
    }
    const handleSubmit = event => {
        event.preventDefault();
        setC("");
        fetch(city);
    }
    return (
        <>
        <form className='container my-5'style={{padding: '30px'}} onSubmit={handleSubmit}>
        <div className="input-group">
        <span className="input-group-text" style={{padding: '10px'}}>Enter name of city</span>
        <input type="text" aria-label="First name" className="form-control" onChange={event => setC(event.target.value)}
          value={city}/>
        <input type="submit" aria-label="Click to get weather" className="btn btn-primary"/>
        </div>
        <div className="input-group" style={{textAlign:'center', width:'100%',visibility:climate===''?'hidden':'visible'}}>
        <span className="input-group-text" style={{padding: '10px', margin:'20px', marginLeft:'0px', marginRight:'0px'}}>Climate</span>
        <span className="input-group-text" style={{padding: '10px', margin:'20px',marginLeft:'0px'}}>{climate}</span>
        </div>
        </form>
        
        
        </>
    );
}