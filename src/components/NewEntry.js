import React, { Component } from 'react';
import '../styles/NewEntry.css';

import DayAndDate from './DayAndDate'
import ProgressAndThoughts from './ProgressAndThoughts'
import Links from './Links'
import Tweet from './Tweet'

class NewEntry extends Component {
  render() {

    const createEntry(event) {
      event.preventDefault()
      console.log("Making a log entry.");
      const newEntry = {
        day: this.day.value,
        date: this.date.value,
        progress: this.progress.value,
        thoughts: this.thoughts.value,
        link: this.links.value,
        tweet: this.tweet.value
      }
    }

    return (
      <div className="NewEntry">
        <div className="NewEntry-header">
          <h2>New Log Entry</h2>
          <div>
            <DayAndDate date={this.props.date} day={this.props.day} />
            <ProgressAndThoughts />
            <Links />
            <Tweet day={this.props.day} tweet={this.props.tweet}/>
          </div>
        </div>
        <p className="NewEntry-intro">
        </p>
        <button>Save</button>
        <button>Clear</button>
      </div>
    );
  }
}

export default NewEntry
