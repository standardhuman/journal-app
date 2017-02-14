import React, { Component } from 'react';

class ProgressAndThoughts extends Component {
  render() {
    return (
      <div className="ProgressAndThoughts">
        <div className="ProgressAndThoughts-header"></div>

        <div className="progress"></div>

        <p className="ProgressAndThoughts-intro"></p>

          <form action="" name="ProgressAndThoughts">
            <p>Today's progress:</p>
            <textarea name="Text1" cols="40" rows="5" placeholder="today's progress"></textarea><br/>
            <textarea name="Text1" cols="40" rows="5" placeholder="thoughts"></textarea>
          </form>

      </div>
    );
  }
}

export default ProgressAndThoughts
