import * as types from './types'

export function loadDefaultForexDataSuccess(data) {
  return { type: types.LOAD_DEFAULT_FOREX_DATA_SUCCESS, data };
}

export function loadCurrencyDatumSuccess(data) {
  return { type: types.LOAD_CURRENCY_DATUM_SUCCESS, data };
}

export function clearForexDataSuccess() {
  return { type: types.CLEAR_FOREX_DATA_SUCCESS};
}

export function clearCurrencyDatumSuccess() {
  return { type: types.CLEAR_CURRENCY_DATUM_SUCCESS};
}
