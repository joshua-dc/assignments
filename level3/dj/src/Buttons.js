import React, { Component } from 'react'

export class Buttons extends Component {
    render() {
        return (
            
            <div>
            <button 
            className="button" 
            onClick={this.props.smallTime}>DJ Small 
            </button>
            <button 
            className="button" 
            onClick={this.props.partyDj}>Party DJ
            </button>
            <button 
            className="button" 
            onClick={this.props.leftBlue}>Pro DJ left
            </button>
            <button 
            className="button" 
            onClick={this.props.rightBlue}>Pro DJ right
            </button>
            <button 
            className="button" 
            onClick={this.props.bigDjOne}>Big Dj 1
            </button>
            <button 
            className="button" 
            onClick={this.props.bigDjTwo}>Big Dj 2
            </button>
            <button 
            className="button" 
            onClick={this.props.bigDjThree}>Big Dj 3
            </button>
            <button className="button"  
            onClick={this.props.bigDjFour}>Big Dj 4
            </button>
            
            </div>
    
         
        )
    }
}


export default Buttons