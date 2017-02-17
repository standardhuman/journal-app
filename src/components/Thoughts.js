import React, { Component } from 'react';
import '../styles/Thoughts.css';

class Thoughts extends Component {
  constructor(){
    super()
    this.state = {
      value: ''
    };
    // this.handleChange = this.handleChange.bind(this)
  }

  submitThoughts(event){
    // set state
    event.preventDefault()
    console.log("You submitted your thoughts!");
  }

  render() {
    return (
      <div className="Thoughts">
        <h2>Thoughts</h2>
        <div className="Thoughts-header"></div>

        <div className="thoughts"></div>

        <p className="Thoughts-intro"></p>

          <form action="" name="Thoughts" onSubmit={this.submitThoughts}>

            <input type="text" name="thoughts"  placeholder="Today's thoughts"></input><br/>
            <button type="submit">Save</button>

          </form>


      </div>
    );
  }
}

export default Thoughts
