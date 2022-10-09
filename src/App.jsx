import React from 'react'
import './App.css'
import BreakControl from "./BreakControl"

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakTime: 5
    }
    this.decreaseBreakTime = this.decreaseBreakTime.bind(this)
    this.increaseBreakTime = this.increaseBreakTime.bind(this)
  }

  decreaseBreakTime() {
    if(this.state.breakTime >0)
      this.setState({
      breakTime: this.state.breakTime - 1
    })
  }

  increaseBreakTime() {
    this.setState({
      breakTime: this.state.breakTime + 1
    })
  }

  render() {
    return (
      <main>
        <h1>25 + 5 Clock</h1>
        <BreakControl decreaseBreakTime={this.decreaseBreakTime} increaseBreakTime={this.increaseBreakTime} breakTime={this.state.breakTime} />
      </main>
    )
  }
}
