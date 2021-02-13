import React, { Component } from 'react'

import './dice.css'

import Die from '../display/diceDisplay';
import Roll from '../rolling/rolling';

class Dice extends Component {
    state = { 
        dice1: 6,
        dice2: 6
    }
    diceHandler=()=>{
        setTimeout(() => {
            const dice1 = Math.ceil(Math.random()*6) 
            const dice2 = Math.ceil(Math.random()*6)
            this.setState({dice1:dice1, dice2:dice2})
        }, 2000);
    }
    render() { 
        return ( 
            <div className='main-body'>
                <h3>Die Rolling Game</h3>
                <Die value1={this.state.dice1} value2={this.state.dice2}/>
                <Roll roll={this.diceHandler}/>
            </div>
        );
    }
}
 
export default Dice;