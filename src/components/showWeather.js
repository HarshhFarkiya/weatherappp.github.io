import React, { useState,useEffect } from 'react'
import axios from 'axios'
import smoke from "./assets/smoke.jpg"
import show from "./assets/show.png"
import back from "./assets/background.jpg"
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
         console.log(c[0]['main']);
         let src = '';
         if(c[0]['main']==="Smoke" || c[0]['main']==="Haze")
            {
             src= smoke
            }
            if(c[0]['main']==="Clear")
            {
                src=show;
            }
            else{
                src=show;
            }
            console.log(src);
        props.fun(city, allData,climate,"City Found", "success",src,src);
        })
        .catch(
           props.fun('', '','',"City Not Found", "danger",'', back),
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