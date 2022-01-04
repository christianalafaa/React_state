import React, { Component } from 'react';
import './App.css';
import Profile from './Component/Profile';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }

  toggle = () => {
    this.setState({
      show: this.state.show,
    })
  }

  render() {
    return (
      <div>
        {
          this.state.show?<Profile/>
          :<p>Profile visibility</p>
        }
        <button onClick={() => this.toggle()}>{this.state.show? 'Show': 'Hide'}</button>
      </div>
    )
  }
}

export default App


