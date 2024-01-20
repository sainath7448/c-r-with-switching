import React, {Component} from 'react'
import Welcome from './components/Welcome'
import './App.css'

class App extends Component {
  state = {
    isSubscribed: false,
  }

  handleButtonClick = () => {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))
  }

  renderAuthButton = () => {
    const {isSubscribed} = this.state

    return (
      <button onClick={this.handleButtonClick}>
        {isSubscribed ? 'Subscribed' : 'Subscribe'}
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome</h1>
        <Welcome greeting="Thank you!" name="Happy Learning" />
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default App
