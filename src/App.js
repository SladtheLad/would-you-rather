import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/views/Home'
import Login from './components/views/Login'
import NewQuestion from './components/views/NewQuestion'
import LeaderBoard from './components/views/LeaderBoard'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/add" exact component={NewQuestion} />
          <Route path="/leaderboard" exact component={LeaderBoard} />
        </div>
      </Router>
    )
  }
}

export default App
