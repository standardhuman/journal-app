import React, { Component } from 'react';
import '../styles/Links.css';

class Links extends Component {

  submitShorten(event) {
    event.preventDefault()
    console.log("You submitted a URL for shortening!");
  }
  submitGitHub(event) {
    event.preventDefault()
    console.log("You submitted your github repo!");
  }
  submitOtherURL(event) {
    event.preventDefault()
    console.log("You submitted some other URL!");
  }

  render() {
    return (
      <div className="Links">
        <div className="Links-header">
          <h3>Links</h3>
          <div>

          </div>
        </div>
        <p className="Links-intro"></p>

        <form action="" name="Links" onSubmit={this.submitShorten}>
          <input type="text" name="ShortenURL" placeholder="Shorten URL"/><br/>
        </form>

        <form action="" name="Links" onSubmit={this.submitGitHub}>
          <input type="field" name="GitHub" placeholder="github.com/standardhuman..."/><br/>
        </form>

        <form action="" name="Links" onSubmit={this.submitOtherURL}>
          <input type="field" name="Other"placeholder="Paste other URL"/><br/>
        </form>

          <button>Save</button>
          <button>Clear</button>

      </div>
    );
  }
}

export default Links
