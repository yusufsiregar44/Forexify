import initialState from '../initialState'
import * as types from './types'

export default function forexDataReducer(state = initialState.forex, action) {
  switch (action.type) {
    case types.LOAD_DEFAULT_FOREX_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
      case types.LOAD_CURRENCY_DATUM_SUCCESS:
        return {
          ...state,
          currencyDatum: action.data
        };
      case types.CLEAR_FOREX_DATA_SUCCESS:
        return {
          ...state,
          data: null,
        }
      case types.CLEAR_CURRENCY_DATUM_SUCCESS:
        return {
          ...state,
          currencyDatum: null,
        }
    default:
      return state;
  }
}
