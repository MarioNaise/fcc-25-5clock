import React from 'react'
import './App.css'
import BreakControl from "./BreakControl"

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      breakTime : 5
    }
  }
  render() {
    return (
      <main>
        <h1>25 + 5 Clock</h1>
        <label>Break Length</label>
        <BreakControl breakTime={this.state.breakTime} />
      </main>
    )
  }
}
