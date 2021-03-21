import React from 'react'; 
import RollDice from './RollDice'
import Die from './Die'
import Input from './Input'
import './App.css';

function App() { 
return ( 
	<div> 
    <h3>Player1</h3>
	<Input/>
	<RollDice /> 
	<h3>Player2</h3>
	</div> 
); 
} 

export default App; 
