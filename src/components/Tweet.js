import React, { Component } from 'react';
import '../styles/Tweet.css';

class Tweet extends Component {

  render() {
    return (
      <div className="Tweet">
        <div className="Tweet-header">
          <h2>Tweet</h2>
          <div>

          </div>
        </div>
        <p className="Tweet-intro"></p>
        <form action="">
          <input type="text" name="tweet" placeholder="tweet" defaultValue={this.props.tweet} />
        </form>
        <button>Send</button>
        <button>Clear</button>
      </div>
    );
  }
}

export default Tweet
