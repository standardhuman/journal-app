import React, { Component } from 'react';
import '../styles/Progress.css';

class ProgressAndThoughts extends Component {

  // constructor(){
  //   super()
  //
  //   this.submitProgress = this.submitProgress.bind(this)
  //   this.submitThoughts = this.submitThoughts.bind(this)
  // }

  submitProgress(event){
    // set state
    event.preventDefault()
    console.log(this);
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

          <form action="" name="Progress" onSubmit={this.submitProgress.bind(this)}>
            <input type="text" name="progress" ref={(input) => { this.progressInput = input }} required placeholder="Today's progress"></input><br/>
          </form>

          <form action="" name="Thoughts" onSubmit={this.submitThoughts}>
            <input type="text" name="thoughts"  ref={(input) => { this.thoughtsInput = input }} required placeholder="Today's thoughts"></input><br/>
            <button type="submit">Save</button>
          </form>

      </div>
    );
  }
}

export default ProgressAndThoughts
