import React, { Component } from 'react'
import '../css/Square.css'
const Square = (props) =>{
	return(
		<button style={{width: '60px', height : '60px',
						backgroundColor : 'lightgreen'}}
				onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

export default Square;