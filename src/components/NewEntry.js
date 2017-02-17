import React, { Component } from 'react';
import '../styles/NewEntry.css';

import DayAndDate from './DayAndDate'
import ProgressAndThoughts from './ProgressAndThoughts'
import Links from './Links'
import Tweet from './Tweet'

class NewEntry extends Component {
  render() {

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
