import React from 'react'
import './App.css'
import BreakControl from "./BreakControl"
import SessionControl from "./SessionControl"
import Session from "./Session"
import Controls from "./Controls"

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakTimeDisplay: 5,
      sessionTime: 1500,
      sessionTimeDisplay: 25,
      counting: false,
      timerLabel: "Session"
    }
    this.decreaseBreakTime = this.decreaseBreakTime.bind(this);
    this.increaseBreakTime = this.increaseBreakTime.bind(this);
    this.decreaseSessionTime = this.decreaseSessionTime.bind(this);
    this.increaseSessionTime = this.increaseSessionTime.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  decreaseBreakTime() {
    if (this.state.breakTimeDisplay > 1)
      this.setState({
        breakTimeDisplay: this.state.breakTimeDisplay - 1
      })
  }

  increaseBreakTime() {
    this.setState({
      breakTimeDisplay: this.state.breakTimeDisplay + 1
    })
  }

  decreaseSessionTime() {
    if (this.state.sessionTimeDisplay > 1) {
      this.setState({
        sessionTime: (this.state.sessionTimeDisplay - 1) * 60,
        sessionTimeDisplay: this.state.sessionTimeDisplay - 1
      })
    }
  }

  increaseSessionTime() {
    this.setState({
      sessionTime: (this.state.sessionTimeDisplay + 1) * 60,
      sessionTimeDisplay: this.state.sessionTimeDisplay + 1
    })
  }

  handleStartStop(){
    if(!this.state.counting && this.state.sessionTime > 0){
    this.setState({
      sessionInterval: setInterval(()=>{
      if(this.state.sessionTime > 0){
        this.setState({
      sessionTime: this.state.sessionTime - 1
    })
      } else if(this.state.timerLabel == "Session"){
        this.setState({
          sessionTime: this.state.breakTimeDisplay * 60,
          timerLabel: "Break"
        })
      } else if(this.state.timerLabel == "Break"){
        this.setState({
          sessionTime: (this.state.sessionTimeDisplay) * 60,
          timerLabel: "Session"
        })
      }
    },1000),
      counting: true
    })
    } else {
      clearInterval(this.state.sessionInterval);
      this.setState({
        counting: false
      });
    }
  }

  handleReset(){
    clearInterval(this.state.sessionInterval);
    this.setState({
      breakTimeDisplay: 5,
      sessionTime: 1500,
      sessionTimeDisplay: 25,
      counting: false
    });
  }

  render() {
    return (
      <main>
        <h1>25 + 5 Clock</h1>
        <BreakControl decreaseBreakTime={this.decreaseBreakTime} increaseBreakTime={this.increaseBreakTime} breakTimeDisplay={this.state.breakTimeDisplay} />
        <SessionControl decreaseSessionTime={this.decreaseSessionTime} increaseSessionTime={this.increaseSessionTime} sessionTimeDisplay={this.state.sessionTimeDisplay} />
        <Session timerLabel={this.state.timerLabel} sessionTime={this.state.sessionTime} sessionSeconds={this.state.sessionSeconds} />
        <Controls handleStartStop={this.handleStartStop} handleReset={this.handleReset} />
      </main>
    )
  }
}
