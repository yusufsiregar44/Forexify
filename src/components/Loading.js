import spinner from '../assets/spinner.gif'
import React, { Component } from 'react'

class Loading extends Component {
  render() {
    return (
      <section className="hero is-white is-medium" style={{minHeight:"581px"}}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <img src={ spinner } alt="Loading..." style={{marginBottom:"20px"}}/>
            <h2 className="subtitle">
              Crunching the latest data
            </h2>
          </div>
        </div>
      </section>
    );
  }
}


export default Loading
