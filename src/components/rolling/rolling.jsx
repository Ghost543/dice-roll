import React from 'react';
import './rolling.css'

const Roll = (props) => {
    return ( 
        
            <button onClick={props.roll} className='rolling-button' >Roll Die</button>
        
    );     
}
 
export default Roll;