import React, { Component } from 'react';

class Links extends Component {
  render() {
    return (
      <div className="Links">
        <div className="Links-header">
          <h2>Links</h2>
          <div>

          </div>
        </div>
        <p className="Links-intro">

        </p>
        <form action="" name="ProgressAndThoughts">
          Links to your work:
          <p>Shorten URL:</p>
          <input type="text" name="ShortenURL" placeholder="paste URL"/>
          <input type="field" name="GitHub" placeholder="github.com/standardhuman..."/>
          <input type="field" name="Other"placeholder="Paste other URL"/>
          <button>Save</button>     
          <button>Clear</button>
        </form>
      </div>
    );
  }
}

export default Links
