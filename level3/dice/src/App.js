import React, { Component } from 'react'
import './App.css';
import one from './images/Alea_1.png'
import two from './images/Alea_2.png'
import three from './images/Alea_3.png'
import four from './images/Alea_4.png'
import five from './images/Alea_5.png'
import six from './images/Alea_6.png'


class App extends Component {
  constructor () {
    super()
    this.state={
      numberOfDice: null,
      rolls: [],
      rollSum: null
    }

  }

    diceRoll = numberOfDice => {
    let rolls = [];
    
    for (let i = 0; i < numberOfDice; i++) {
       rolls[i] = Math.floor(Math.random() * 6) +1;
      
    } 
    this.setState({
      numberOfDice, rolls
    })
  }
  
  
  render () {
    return (
      <>
      <div className="App">
        <h1> React Dice</h1>

        <h3>How many dice do you want to roll?</h3>

        <div className="die-buttons">
          {[1,2,3,4,5,6].map(number => {
            let text = number === 1 ? "die" : "dice";
            return (

              <button key = {number} onClick = {() => this.diceRoll(number)} className="dice-button"> {number} {text} </button>
            )
            
            
          })}
        </div>

        {this.state.rolls.map ((roll, index) => <DiceImage roll={roll} key={index} /> ) }
      </div>

      </>
    )
  }
}

const DiceImage = ({roll}) => {
  if  (roll ===1) {
    return <img className="dice-image" src={one} alt="1" />
  } else if (roll === 2) {
    return <img className="dice-image" src={two} alt="2" />
  } else if (roll === 3) {
    return <img className="dice-image" src={three} alt="3" />
  } else if (roll === 4) {
    return <img className="dice-image" src={four} alt="4" />
  } else if (roll === 5) {
    return <img className="dice-image" src={five} alt="5" />
  } else if (roll === 6) {
    return <img className="dice-image" src={six} alt="6" />
  }
};


export default App