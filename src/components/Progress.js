import React, { Component } from 'react';
import '../styles/Progress.css';

class Progress extends Component {
  constructor(){
    super()
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const target = event.target;
    const value = target.type === 'textarea' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })

  }

  render() {
    return (
      <div className="Progress">
        <h2>Progress</h2>
        <div className="Progress-header"></div>

        <div className="progress"></div>

        <p className="Progress-intro"></p>

          <form action="" name="Progress">

            <textarea name="progress" cols="40" rows="5" value={this.state.value} onChange={this.handleChange} placeholder="today's progress"></textarea><br/>
            <textarea name="thoughts" cols="40" rows="5" value={this.state.value} placeholder="thoughts"></textarea>

          </form>

      </div>
    );
  }
}

export default Progress
