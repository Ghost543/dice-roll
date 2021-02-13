import React from 'react';
import './die.css'
// eslint-disable-next-line
import dice6 from '../dice/dice6.png'
// eslint-disable-next-line
import dice5 from '../dice/dice5.png'
// eslint-disable-next-line
import dice4 from '../dice/dice4.png'
// eslint-disable-next-line
import dice3 from '../dice/dice3.png'
// eslint-disable-next-line
import dice2 from '../dice/dice2.png'
// eslint-disable-next-line
import dice1 from '../dice/dice1.png'

const dice = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6
}
const Die = (props) => {
    return ( 
        <div>
            <div className="dice">
                <h5>Dice One: {props.value1}</h5>
                <img src={dice[props.value1]} alt={props.value1}/>
            </div>
            <div className="dice">
                <h5>Dice Two:  {props.value2}</h5>
                <img src={dice[props.value2]} alt={props.value2}/>
            </div>
             
        </div>
     );
}
 
export default Die;