import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <section className="hero is-primary is-medium" style={{minHeight:"581px"}}>
          <div className="hero-body">
            <div className="container has-text-centered" style={{marginTop:"40px"}}>
              <i className="fab fa-gg" style={{fontSize:"60px"}}></i>
              <h1 className="title">
                Forexify
              </h1>
              <h2 className="subtitle">
                Stay Ahead, in Style.
              </h2>
              <Link
                className="button is-primary is-inverted"
                to="/market"
              >
                Enter
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
