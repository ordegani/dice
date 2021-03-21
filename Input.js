import React from 'react'
import './RollDice.css'

class Input extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef();
    }
  
    handleSubmit(event) {
      alert('A number was submitted: ' + this.input.current.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Limit Score:
            <input type="text" ref={this.input} />
          </label>
          <input type="submit" value="Go!" />
        </form>
      );
    }
  }
  export default Input
