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
      breakTime: 5,
      sessionTime: 1500
    }
    this.decreaseBreakTime = this.decreaseBreakTime.bind(this)
    this.increaseBreakTime = this.increaseBreakTime.bind(this)
    this.decreaseSessionTime = this.decreaseSessionTime.bind(this)
    this.increaseSessionTime = this.increaseSessionTime.bind(this)
  }

  decreaseBreakTime() {
    if (this.state.breakTime > 0)
      this.setState({
        breakTime: this.state.breakTime - 1
      })
  }

  increaseBreakTime() {
    this.setState({
      breakTime: this.state.breakTime + 1
    })
  }

  decreaseSessionTime() {
    if (this.state.sessionTime > 0) {
      this.setState({
        sessionTime: this.state.sessionTime - 1
      })
    }
  }

  increaseSessionTime() {
    this.setState({
      sessionTime: this.state.sessionTime + 1
    })
  }

  render() {
    return (
      <main>
        <h1>25 + 5 Clock</h1>
        <BreakControl decreaseBreakTime={this.decreaseBreakTime} increaseBreakTime={this.increaseBreakTime} breakTime={this.state.breakTime} />
        <SessionControl decreaseSessionTime={this.decreaseSessionTime} increaseSessionTime={this.increaseSessionTime} sessionTime={this.state.sessionTime} />
        <Session sessionTime={this.state.sessionTime} sessionSeconds={this.state.sessionSeconds} />
        <Controls />
      </main>
    )
  }
}
