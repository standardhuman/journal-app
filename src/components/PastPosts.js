import React, { Component } from 'react';
import '../styles/PastPosts.css';

class PastPosts extends Component {
  render() {
    return (
      <div className="PastPosts">
        <h2>Past Posts</h2>
        <div className="PastPosts-header">
          <ul>
            <li>Day 11</li>
            <li>Day 10</li>
            <li>Day 9</li>
            <li>Day 8</li>
            <li>Day 7</li>
          </ul>
        </div>
        <p className="PastPosts-intro">
        </p>
      </div>
    );
  }
}

export default PastPosts
