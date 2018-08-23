import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loadCurrencyDatumAsync} from '../store/Forex'
import {destroyCurrencyDatum} from '../store/Forex'
import moment from 'moment'
import Loading from '../components/Loading'

class CurrencyDetail extends Component {
  static contextTypes = {
    router: () => true,
  }

  componentDidMount() {
    this.props.loadCurrencyDatumAsync(this.props.match.params.currency)
  }

  componentWillUnmount() {
    this.props.destroyCurrencyDatum()
  }

  render() {
    if (!this.props.currencyDatum) {
      return (
        <Loading />
      );
    } else {
      let self = this
      return (<div className="section">
        <div className="container">
          <h1 className="title">{ this.props.currencyDatum.base }</h1>
          <p className="subtitle is-5">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
          <div className="columns is-multiline">
            {
              Object.keys(this.props.currencyDatum.rates).map(function (v, index) {
                return (
                  <div className="column is-one-fifth" key={ index }>
                    <div className="card">
                      <div className="card-content">
                        <p className="title is-6"> <strong>{v}</strong></p>
                        <hr/>
                        <p className="subtitle is-8">
                          {self.props.currencyDatum.rates[v]}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <a className="button is-primary" onClick={this.context.router.history.goBack}>Back</a>
        </div>
      </div>);
    }
  }
}

const mapStateToProps = state => {
  return {currencyDatum: state.forex.currencyDatum};
}

const mapDispatchToProps = dispatch => {
  return {
    loadCurrencyDatumAsync: (currency) => dispatch(loadCurrencyDatumAsync(currency)),
    destroyCurrencyDatum: () => dispatch(destroyCurrencyDatum())
  };
}

export default connect(mapStateToProps, mapDispatchToProps,)(CurrencyDetail)
