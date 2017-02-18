import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/App.css';
import NewEntry from './components/NewEntry'
import PastPosts from './components/PastPosts'


class App extends Component {
  constructor(){
    super()
    // initial state
    this.state = {
      logEntry: {}
    }
  }
  date (){
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth()+1; //January is 0!
    let yyyy = date.getFullYear();

    return date = mm+'/'+dd+'/'+yyyy;
  }

  day(){
    let date = new Date();
    return "Day" + date.getDate();
  }

  hashTag = "#100DaysOfCode"

  tweet(hashTag, day, progress, link) {
    return hashTag + " " + day + " " + progress + " " + link
  }

  url() {
    return "www.shortLinkToWork.com"
  }

  progress() {
    return "Today I blah, blah, blah"  }

  thoughts() {
    console.log("thoughts");
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>100 Days of Code Log</h1>
          <NewEntry date={this.date()} day={this.day()} tweet={this.tweet(this.hashTag, this.day(), this.progress(), this.url())} />
          <PastPosts />
        </div>
          <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
