import React, { Component } from 'react';
import '../styles/DayAndDate.css';

class DayAndDate extends Component {
  render() {
    return (
      <div className="DayAndDate">
        <h2>Day And Date</h2>
        <div className="DayAndDate-header">
          Day 12 February 12, 2017
        </div>
        <p className="DayAndDate-intro">
        </p>
      </div>
    );
  }
}

export default DayAndDate
