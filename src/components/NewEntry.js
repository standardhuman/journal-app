import React, { Component } from 'react';
import DayAndDate from './DayAndDate'
import ProgressAndThoughts from './ProgressAndThoughts'
import Links from './Links'
import Tweet from './Tweet'

class NewEntry extends Component {
  render() {
    return (
      <div className="NewEntry">
        <div className="NewEntry-header">
          <div>
            <DayAndDate />
            <ProgressAndThoughts />
            <Links />
            <Tweet />
          </div>
        </div>
        <h2>New Journal Entry</h2>
        <p className="NewEntry-intro">
        </p>
        <button>Save</button>
        <button>Clear</button>
      </div>
    );
  }
}

export default NewEntry
