import React, { Component } from 'react'
import Square from './Square'

class Board extends Component{
	constructor(props) {
    	super(props);
    	this.state = {
      		squares: Array(9).fill(null),
    	};
  	}
	renderSquare(i) {
	    return <Square value={i} />;
	}
  	render(){
  		const status = 'Next player: X';
  		return(
  			<div>
  				<div>{status}</div>
				<div style={{height : '60px'}}>
  					{this.renderSquare(1)}
  					{this.renderSquare(2)}
  					{this.renderSquare(3)}
  				</div>  				
  				<div>
  					{this.renderSquare(4)}
  					{this.renderSquare(5)}
  					{this.renderSquare(6)}
  				</div>
  				<div>
  					{this.renderSquare(7)}
  					{this.renderSquare(8)}
  					{this.renderSquare(9)}
  				</div>
  			</div>
  		);
  	}
}
export default Board;