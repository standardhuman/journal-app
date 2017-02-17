import React, { Component } from 'react';
import '../styles/Thoughts.css';

class Thoughts extends Component {
  constructor(){
    super()
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })

  }

  render() {
    return (
      <div className="Thoughts">
        <h2>Thoughts</h2>
        <div className="Thoughts-header"></div>

        <div className="progress"></div>

        <p className="Thoughts-intro"></p>

          <form action="" name="Thoughts">


            <textarea name="thoughts" cols="40" rows="5" value={this.state.value} placeholder="thoughts"></textarea>
          </form>

      </div>
    );
  }
}

export default Thoughts
