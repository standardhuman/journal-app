import React, { Component } from 'react';
import '../styles/Progress.css';

class Progress extends Component {
  constructor(){
    super()
    this.state = {
      value: ''
    };
    // this.handleChange = this.handleChange.bind(this)
  }

  // handleChange(event){
  //   const target = event.target;
  //   const value = target.type === 'textarea' ? target.checked : target.value;
  //   const name = target.name;
  //
  //   this.setState({
  //     [name]: value
  //   })
  //
  // }

  submitProgress(event){
    // set state
    event.preventDefault()
    console.log("You submitted your progress!");
  }
  submitThoughts(event){
    // set state
    event.preventDefault()
    console.log("You submitted your thoughts!");
  }


  render() {
    return (
      <div className="Progress">
        <h3>Progress and Thoughts</h3>
        <div className="Progress-header"></div>

        <div className="progress"></div>

        <p className="Progress-intro"></p>

          <form action="" name="Progress" onSubmit={this.submitProgress}>
            <input type="text" name="progress" ref={(input) => { this.progressInput = input }}placeholder="Today's progress"></input><br/>
          </form>

          <form action="" name="Thoughts" onSubmit={this.submitThoughts}>
            <input type="text" name="thoughts"  placeholder="Today's thoughts"></input><br/>
            <button type="submit">Save</button>
          </form>

      </div>
    );
  }
}

export default Progress
