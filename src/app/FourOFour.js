import React, { Component } from 'react'

export default class FourOFour extends Component {
  render() {
    return (
      <section className="hero is-primary is-danger" style={{minHeight:"581px"}}>
        <div className="hero-body">
          <div className="container has-text-centered" style={{marginTop:"200px"}}>
            <h1 className="title">
              404
            </h1>
            <h2 className="subtitle">
              Page Not Found
            </h2>
          </div>
        </div>
      </section>
    );
  }
}
