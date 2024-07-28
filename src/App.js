import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state={showClock: false,}
  onToggleClock= ()=>{
    this.setState(prevstate=>{
      const {showClock}=prevstate
      return {
        showClock:!showClock,
      }
    })

  }
  render() {
    const {showClock}=this.state
    return (
  <div className="app-container">
        <button type="button" className="toggle-button" onClick={this.onToggleClock}>
          {showClock ? "Hide Clock": "Show Clock"}
          
        </button>
       {showClock && <Clock />}
      </div>
    )
  }
}

export default App
