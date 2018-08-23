import React, { Component } from 'react'
import { connect } from 'react-redux'
import Columns from './market/Columns'
import { loadForexAsync } from '../store/Forex'
import { destroyForex } from '../store/Forex'
import Loading from '../components/Loading'

class Market extends Component {
  componentDidMount() {
    this.props.loadForexAsync()
  }

  componentWillUnmount() {
    this.props.destroyForex()
  }

  render() {
    if (!this.props.data) {
      return (
        <Loading />
      );
    } else {
      return (
        <Columns currencies={this.props.data}/>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state.forex.data,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadForexAsync: () => dispatch(loadForexAsync()),
    destroyForex: () => dispatch(destroyForex())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Market)
