import React, { Component } from 'react'
import Square from './Square'

class Board extends Component{
	constructor(props) {
    	super(props);
    	this.state = {
      		squares: Array(9).fill(5),
    	};
  	}
	renderSquare(i) {
	    return (
	    	<Square value={this.state.squares[i]} 
	    			onClick={()=> this.handleClick(i)}
	    	/>
	    );
	}
	handleClick(i){
		console.log(i + 'was clicked')
	}
  	render(){
  		const status = 'Next player: X';
  		return(
  			<div>
  				<div>{status}</div>
				<div style={{height : '60px'}}>
  					{this.renderSquare(0)}
  					{this.renderSquare(1)}
  					{this.renderSquare(2)}
  				</div>  				
  				<div>
  					{this.renderSquare(3)}
  					{this.renderSquare(4)}
  					{this.renderSquare(5)}
  				</div>
  				<div>
  					{this.renderSquare(6)}
  					{this.renderSquare(7)}
  					{this.renderSquare(8)}
  				</div>
  			</div>
  		);
  	}
}
export default Board;