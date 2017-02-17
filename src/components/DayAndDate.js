import React, { Component } from 'react';
import '../styles/DayAndDate.css';

class DayAndDate extends Component {
  render() {
    return (
      <div className="DayAndDate">
        <div className="DayAndDate-header">
          <h3>Day {this.props.day}</h3>
          {this.props.date}
        </div>
        <p className="DayAndDate-intro">
        </p>
      </div>
    );
  }
}

export default DayAndDate
