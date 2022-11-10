import React from 'react'
import PropTypes from 'prop-types'
export default function alert(props)
{
const capitalize=(word)=>{
const lower = word.toLowerCase();
return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return(
    <div style={{height:'30px'}}>
    {props.msg && <div>
        <div class={`alert alert-${props.msg.state}`} role="alert">{capitalize(props.msg.msg)} : <strong>{props.msg.state==='danger'?'Failed!!':'Success!!'}</strong></div>
    </div>}
    </div>
    )
}