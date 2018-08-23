import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {

  state = {
    isActive: false
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar" aria-label="main navigation" style={{
        borderBottom: 'solid 1px #dddddd'
      }}>
        <div className="navbar-brand">
          <NavLink
            className="navbar-item"
            to="/"
          >
            <i className="fab fa-gg" style={{fontSize:"35px", marginRight:"10px", color:"#0029ff"}}></i>
            <h1 className="title">Forexify</h1>
          </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={this.state.isActive
          ? 'navbar-menu is-active'
          : 'navbar-menu'}>
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              to="/"
            >
              <h1 className="subtitle">Home</h1>
            </NavLink>
            <NavLink
              className="navbar-item"
              to="/market"
            >
              <h1 className="subtitle">Real-time Market</h1>
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header
