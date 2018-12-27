import React, { Component } from 'react'
import '../css/Square.css'
class Square extends Component{
	constructor(props){
		super(props);
		this.state = {
			value : null,
		};
	}
	render(){
		return(
			<button style={{width: '60px', height : '60px',
							backgroundColor : 'lightgreen'}}
					onClick={() => this.setState({value : 'X'})}
			>
				{this.state.value}
			</button>
		);
	}
}

export default Square;