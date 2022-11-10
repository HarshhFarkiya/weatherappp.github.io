import React, { useEffect } from "react";
import show from "./assets/show.png"
import smoke from "./assets/smoke.jpg"
export default function Show(props) {
  // props.setWData('');
  console.log(props.data);
  const capitalize=(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
        }        
       
  return (
    <>
      <div className="card" >
        <div className="card-body">
          <table>
            <tbody>

            
            <tr>
              <td>
                <img src={props.src} style={{height:"130px", width:"130px", border:"0px solid ", borderRadius:"100px"}}></img>
                <h4 style={{textAlign:"center", margin:"10px"}}>{capitalize(props.city)}</h4>
              </td>
              <td style={{textAlign:"left", padding:"20px"}}>
              <h5>Temperature </h5>
              <h5>Temperature Max</h5>
              <h5>Temperature Min</h5>
              <h5>Real Feel</h5>
              <h5>Humidity</h5>
              </td>
              <td style={{textAlign:"right", padding:'20px'}}>
              <h5>{props.data["temp"]}℉</h5>
              <h5>{props.data["temp_max"]}℉</h5>
              <h5>{props.data["temp_min"]}℉</h5>
              <h5>{props.data["feels_like"]}℉</h5>
              <h5>{props.data["humidity"]}</h5>
              </td>
            </tr>
            </tbody>
          </table>
            <span >
              
            </span>
            <span  >
            
            </span>
          

         
        </div>
      </div>
    </>
  );
}
