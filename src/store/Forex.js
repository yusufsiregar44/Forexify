import axios from 'axios'
import * as actions from './forex/actions'

const error = err => console.log(err);

const fetchAllCurrencyData = async () => {
  const USD = await axios.get("https://exchangeratesapi.io/api/latest?base=USD&symbols=GBP,EUR,IDR,SGD,JPY")
  const EUR = await axios.get("https://exchangeratesapi.io/api/latest?base=EUR&symbols=GBP,USD,IDR,SGD,JPY")
  const GBP = await axios.get("https://exchangeratesapi.io/api/latest?base=GBP&symbols=USD,EUR,IDR,SGD,JPY")
  const IDR = await axios.get("https://exchangeratesapi.io/api/latest?base=IDR&symbols=GBP,USD,EUR,SGD,JPY")
  const SGD = await axios.get("https://exchangeratesapi.io/api/latest?base=SGD&symbols=GBP,EUR,USD,IDR,JPY")
  const JPY = await axios.get("https://exchangeratesapi.io/api/latest?base=JPY&symbols=GBP,EUR,USD,IDR,SGD")
  let arrayOfRates = [USD.data, EUR.data, GBP.data, IDR.data, SGD.data, JPY.data]
  return arrayOfRates;
}

const fetchCurrencyDatum = async (currency) => {
  const CURRENCYDATUM = await axios.get(`https://exchangeratesapi.io/api/latest?base=${currency}`)
  return CURRENCYDATUM.data;
}

var forexAsync;
var currencyDatumAsync;

export function loadForex() {
  return dispatch => {
    fetchAllCurrencyData()
    .then(result => {
      dispatch(actions.loadDefaultForexDataSuccess(result))
    })
    .catch(error)
  };
}

export function loadForexAsync() {
  return dispatch => {
    forexAsync = setInterval(() => {
      dispatch(loadForex())
    }, 1000)
  };
}

export function loadCurrencyDatum(currency) {
  return dispatch => {
    fetchCurrencyDatum(currency)
    .then(result => {
      dispatch(actions.loadCurrencyDatumSuccess(result))
    })
    .catch(error)
  };
}

export function loadCurrencyDatumAsync(currency) {
  return dispatch => {
    currencyDatumAsync = setInterval(() => {
      dispatch(loadCurrencyDatum(currency))
    }, 1000)
  };
}

export function destroyForex() {
  return dispatch => {
    clearInterval(forexAsync)
    setTimeout(() => {
      dispatch(actions.clearForexDataSuccess())
    }, 1500)
  };
}

export function destroyCurrencyDatum() {
  return dispatch => {
    clearInterval(currencyDatumAsync)
    setTimeout(() => {
      dispatch(actions.clearCurrencyDatumSuccess())
    }, 1500)
  };
}
