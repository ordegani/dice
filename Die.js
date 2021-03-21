import React from 'react'
import './Die.css'

class Die extends React.Component{ 
render(){ 
	const {face, rolling} = this.props 
	
 
	return <i class={`as fa-dice-${face} 
			${rolling && 'Die-shaking'}`}/> 
} 
} 

export default Die
