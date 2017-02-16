import React, { Component } from 'react';
import '../styles/ProgressAndThoughts.css';

class ProgressAndThoughts extends Component {
  render() {
    return (
      <div className="ProgressAndThoughts">
        <h2>Progress and Thoughts</h2>
        <div className="ProgressAndThoughts-header"></div>

        <div className="progress"></div>

        <p className="ProgressAndThoughts-intro"></p>

          <form action="" name="ProgressAndThoughts">
            <textarea name="Text1" cols="40" rows="5" placeholder="today's progress"></textarea><br/>
            <textarea name="Text1" cols="40" rows="5" placeholder="thoughts"></textarea>
          </form>

      </div>
    );
  }
}

export default ProgressAndThoughts
