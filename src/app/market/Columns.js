import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default class Columns extends Component {

  render () {
    return (
      <div className='columns is-multiline' style={{margin:'30px'}}>
        { this.props.currencies.map(function (c, index) {
          return (
            <div className='column is-one-third' key={ index }>
              <div className="card">
                <div className="card-content">
                  <p className="title">{c.base}</p>
                  <p className="subtitle is-5">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
                  {Object.keys(c.rates).map(function (v, index) {
                    return (
                      <p className="subtitle is-6" key={ index }>{v} : {c.rates[v]}</p>
                    )
                  })}
                </div>
                <div className="card-footer">
                  <Link
                    className="card-footer-item"
                    to= {{
                      pathname: `/market/${c.base}`
                    }}
                  >
                    <div className="button is-primary">See more detail</div>
                  </Link>
                </div>
              </div>
            </div>
          );
        }) }
      </div>
    );
  }

}
