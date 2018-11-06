import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav class="nav nav-tabs nav-fill">
        <Link to={'/home'} className="nav-item nav-link">
          HOME
        </Link>
        <Link to={'/add'} className="nav-item nav-link">
          NEW QUESTION
        </Link>
        <Link to={'/leaderboard'} className="nav-item nav-link">
          LEADERBOARD
        </Link>
        <span>Hello USER</span>
        <Link to={'/'} className="nav-item nav-link">
          LOGOUT
        </Link>
      </nav>
    )
  }
}

export default Nav
