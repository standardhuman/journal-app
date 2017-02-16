import React, { Component } from 'react';
import '../styles/Links.css';

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
          <input type="text" name="ShortenURL" placeholder="shorten URL"/><br/>
          <input type="field" name="GitHub" placeholder="github.com/standardhuman..."/><br/>
          <input type="field" name="Other"placeholder="Paste other URL"/><br/>
          <button>Save</button>
          <button>Clear</button>
        </form>
      </div>
    );
  }
}

export default Links
