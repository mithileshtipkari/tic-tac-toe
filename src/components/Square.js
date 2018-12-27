import React, { Component } from 'react'
import '../css/Square.css'
class Square extends Component{
	render(){
		return(
			<button style={{width: '60px', height : '60px',
							backgroundColor : 'lightgreen'}}
					onClick={() => this.props.onClick(this.props.value)}
			>
				{this.props.value}
			</button>
		);
	}
}

export default Square;