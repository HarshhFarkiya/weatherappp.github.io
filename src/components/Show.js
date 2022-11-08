import React from 'react'
export default function Show(props)
{
  
 // props.setWData('');
 console.log(props.data);
    return(
          <table className="table" style={{visibility:props.data===''?'hidden':'visible', backgroundColor:'black'}}>
          <thead>
            <tr className="table" style={{backgroundColor:'#CDCACA ', color:'black'}}>
              <th scope="col" style={{textAlign: 'center', margin:'20px'}}>Parameter</th>
              <th scope="col" style={{textAlign: 'center', margin:'20px'}}>Value</th>
            </tr>
          </thead>
          <tbody>
          {Object.keys(props.data).map((key, i) => (
            <tr className="table-secondary" style={{textAlign: 'center'}}>
              <td className='text-center' style={{textAlign: 'center'}}>{key}</td>
              <td className='text-center' style={{textAlign: 'center'}}>{props.data[key]}</td>
            </tr>
             ))}
          </tbody>
        </table>
    );
}