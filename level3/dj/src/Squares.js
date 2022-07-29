import React, { Component } from 'react'
import SquareRender from './SquareRender'
import Buttons from './Buttons'


 export class Squares extends Component {
    constructor(){
        super()
        this.state = {
            colors: ["white", "white", "white","white"]
    }


    this.smallTime = this.smallTime.bind(this)
    this.partyDj = this.partyDj.bind(this)
    this.leftBlue = this.leftBlue.bind(this)
    this.rightBlue = this.rightBlue.bind(this)
    this.bigDjOne = this.bigDjOne.bind(this)
    this.bigDjTwo = this.bigDjTwo.bind(this)
    this.bigDjThree = this.bigDjThree.bind(this)
    this.bigDjFour = this.bigDjFour.bind(this)

  }
  
  smallTime(){
    if(this.state.colors[0] === 'white'){
    this.setState((prevState) => {
      return{
        colors: prevState.colors = ['black', 'black', 'white', 'black']
      }
    })
  } else if(this.state.colors[0] === 'black'){
    this.setState((prevState) =>{
      return{
        colors: prevState.colors = ['white', 'white', 'black', 'white']
      }
    })
  } else {
    this.setState(prevState =>{
      return{
        colors: prevState.colors = ['black', 'black', 'white', 'black']
      }
    })
  }
}                              


partyDj(){
  this.setState(prevState =>{
    return{
      colors: prevState.colors = ['purple', 'purple', 'white', 'white']
    }
  })
}

leftBlue(){
  this.setState(prevState =>{
    return{
      colors: prevState.colors = ['purple', 'purple', 'blue', 'black']
    }
  })
}

rightBlue(){
  this.setState(prevState =>{
    if(this.state.colors[2] !== 'blue'){
      return{
        colors: prevState.colors = ['purple', 'purple', 'white', 'blue']
      }
    } else {
      return{
         colors: prevState.colors = ['purple', 'purple', 'blue', 'blue']
      }
    }
  })
}

bigDjOne(){
  this.setState(prevState =>{
    return{
      colors: prevState.colors = ['yellow', 'blue', 'red', 'blue']
    }
  })
}

bigDjTwo(){
  this.setState(prevState =>{
    return{
      colors: prevState.colors = ['white', 'blue', 'white', 'blue']
    }
  })

}

bigDjThree(){
  this.setState(prevState =>{
    return{
      colors: prevState.colors = ['purple', 'blue', 'blue', 'purple']
    }
  })

}

bigDjFour(){
  this.setState(prevState =>{
    return{
      colors: prevState.colors = ['green', 'green', 'green', 'green']
    }
  })

}
    render(){
      const createSquare = this.state.colors.map((color, index) => (
        <SquareRender key={index} colors={color} className="container"/>
     ))
      return(
        <div className="container">
           {createSquare}
         <Buttons
          colors={this.state.colors} 
          smallTime={this.smallTime} 
          partyDj={this.partyDj} 
          leftBlue ={this.leftBlue} 
          rightBlue={this.rightBlue} 
          bigDjOne={this.bigDjOne} 
          bigDjTwo={this.bigDjTwo} 
          bigDjThree={this.bigDjThree} 
          bigDjFour={this.bigDjFour}/>

            

        </div>
      )

  }  

}


    

    


export default Squares