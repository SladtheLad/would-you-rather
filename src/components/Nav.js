import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div class="nav">
        <ul>
          <Link to={'/home'} className="nav-item">
            HOME
          </Link>
          <Link to={'/add'} className="nav-item">
            NEW QUESTION
          </Link>
          <Link to={'/leaderboard'} className="nav-item">
            LEADERBOARD
          </Link>
          <Link to={'/'} className="nav-item">
            LOGOUT
          </Link>
        </ul>
      </div>
    )
  }
}

export default Nav
